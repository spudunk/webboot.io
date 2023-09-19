// import type { RequestHandler } from './$types';
import { text } from '@sveltejs/kit';
import { sendEmail } from '$lib';
import { stripe, endpointSecret, webCrypto } from '$lib/server/stripe';

import type { RequestHandler } from './$types';
import type Stripe from 'stripe';

const fulfillOrder = async (session: Stripe.Checkout.Session) => {
	const email = session.customer_details?.email || '';
	console.log('Customer Email: ', email);
	
	console.log('getting expanded session with line items');
	let lineItems;
	try {
		lineItems = await stripe.checkout.sessions.listLineItems(session.id);
		console.log("lineItems: ", lineItems)
	} catch (err) {
		console.error('Error retrieving expanded session: \n', err);
	}

	const lineItem = lineItems?.data[0];
	console.log('Line Item 0: \n', lineItem);

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
		// case 'charge.succeeded':
		// 	const chargeSucceeded = event.data.object;
		// 	console.log(`Charge for ${chargeSucceeded.amount} was successful!\n`);
		// 	handleChargeSucceeded(chargeSucceeded);
		// 	break;

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
			console.log("checkout.session.async failed, emailing notice")
			// Send an email to the customer asking them to retry their order
			emailCustomerAboutFailedPayment(session);

			break;
		}

		default:
			// Unexpected event type
			console.log(`Unhandled event type: ${event.type}.\n`);
	}

	// console.log(event);

	return text('', {
		status: 200
	});
};
