// import type { RequestHandler } from './$types';
import { json, text } from '@sveltejs/kit';
import { sendEmail } from '$lib';
import { stripe, endpointSecret, webCrypto, listLineItems } from '$lib/server/stripe';

import type { RequestHandler } from './$types';
import type Stripe from 'stripe';

const fulfillOrder = async (session: Stripe.Checkout.Session) => {
	const email = session.customer_details?.email || '';
	console.log('Customer Email: ', email);
	console.log('Session ID: ', session.id);
	console.log('getting expanded session with line items...');
	let lineItems;
	let lineItem;

	// not getting cloudflare workers to execute beyond this point
	try {
		const r = await listLineItems(session.id);
		if(r.status === 200) {
			lineItems = await r.json();
		} else {
			console.error(`API Fetch Error: ${r.status}: ${r.statusText}`);
		}
		// lineItems = await stripe.checkout.sessions.listLineItems(session.id);
		// second way to get line_items
		// const session2 = await stripe.checkout.sessions.retrieve(session.id, { expand: ['line_items'] });
		// const lineItems2 = session2.line_items
		console.log('lineItems: ', lineItems);
		lineItem = lineItems?.data[0];
		console.log('Line Item 0: \n', lineItem);
	} catch (err) {
		console.error('Error retrieving expanded session: \n', err);
	}


	if (lineItem?.description == 'web success guide') {
		const p = sendEmail({
			to: email,
			from: 'chris@webboot.io',
			subject: 'Your link to Web Success Guide',
			textBody:
				`Thanks for purchasing web success guide! Here's your link: TEST.\n` +
				`Your link is good for 5 downloads, so don't share it. Whenever the guide is updated we'll provide you with a new link.\n` +
				`If you have any trouble downloading reply to this email for help.`
		});
		const res = await p;
		if (res.status == 200) {
			console.log('Email sent to: ', email, ' for web success guide');
		} else {
			console.error('Error sending email: ', res.status, ': ', res.statusText);
		}
	}
};

const emailCustomerAboutFailedPayment = async (session: Stripe.Checkout.Session) => {
	console.log("todo: send failed payment email");
	return session.id;
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.text();
	let event = JSON.parse(body);
	const sig = request.headers.get('stripe-signature') ?? '';

	// console.log("event before validation:\n", event);

	try {
		event = await stripe.webhooks.constructEventAsync(
			body,
			sig,
			endpointSecret,
			undefined,
			webCrypto
		);
		// console.log("Stripe Event Validated", event.id)
	} catch (err) {
		console.error(`Webhook Error: ${err}`);
		return text(`Webhook Error: ${err}`, { status: 400 });
	}
	// console.log("event after validation:\n", event);

	// Handle the event
	switch (event.type) {
		case 'checkout.session.completed': {
			const session = event.data.object;
			if (session.payment_status === 'paid') {
				console.log('checkout.session.completed paid, fulfilling order');
				fulfillOrder(session);
			}
			break;
		}
		case 'checkout.session.async_payment_succeeded': {
			const session = event.data.object;
			console.log('checkout.session.async paid, fulfilling order');
			// Fulfill the purchase...
			fulfillOrder(session);
			break;
		}
		case 'checkout.session.async_payment_failed': {
			const session = event.data.object;
			console.log('checkout.session.async failed, emailing notice');
			// Send an email to the customer asking them to retry their order
			emailCustomerAboutFailedPayment(session);
			break;
		}
		default:
			// Unexpected event type
			console.log(`Unhandled event type: ${event.type}.\n`);
	}

	// console.log(event);
	return json(
		{ received: true },
		{
			status: 200
		}
	);
};
