import { setError, message, superValidate } from 'sveltekit-superforms/server';
import { contactSchema, messageSchema } from '$lib/schemas.js';
import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Server API:

	// Send contact form data to the client
	const contactForm = await superValidate(contactSchema);
	// Always return { form } in load and form actions.
	return { contactForm };
};

export const actions = {
	// Always return { form } in load and form actions.

	contact: async ({ request }) => {
		const form = await superValidate(request, contactSchema);
		// console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// Email the validated form data
		try {
			const p1 = sendEmail({
				to: form.data.email,
				from: 'chris@webboot.io',
				subject: 'Thanks for contacting webboot.io!',
				textBody:
					`Hi ${form.data.name}, I'll reach out within a few days to discuss your project.` +
					`If you need immediate assistance please call my cell.\n\n` +
					`Christopher Hicks\n` +
					`(360) 827-2736\n` +
					`chris@webboot.io`
			});

			const p2 = sendEmail({
				to: 'chris@webboot.io',
				from: 'forms@webboot.io',
				subject: `New submission${form.data.business ? ` from ${form.data.business}` : ''}`,
				textBody:
					`email: ${form.data.email}\n` +
					`name: ${form.data.name}\n` +
					`tel: ${form.data.tel}\n` +
					`business: ${form.data.business}\n` +
					`website: ${form.data.website}`
			});

			// wait for both emails in parallel
			const res1 = await p1;
			const res2 = await p2;

			console.log(
				res1.status,
				res1.statusText,
				JSON.stringify(res1.headers),
				JSON.stringify(res1.body)
			);
			console.log(
				res2.status,
				res2.statusText,
				JSON.stringify(res2.headers),
				JSON.stringify(res2.body)
			);

			const handleError = async (res: Response) => {
				// return fail(res.status, { form });
				console.error(`${res.status}: ${res.statusText}`);
				setError(form, `${res.status}: ${res.statusText}`);
				return message(form, `${res.status}: ${res.statusText}`, {
					status: 500
				});
			};

			if (!res1.ok) {
				return handleError(res1); // returns form with error wrapper
			}
			if (!res2.ok) {
				return handleError(res2); // returns form with error wrapper
			}
		} catch (err) {
			console.error(err);
			return message(form, err, { status: 500 });
		}

		return message(form, 'form submitted');
	},
	// End contact action

	message: async ({ request }) => {
		const form = await superValidate(request, messageSchema);

		// console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// Email the validated form data
		try {
			const p1 = sendEmail({
				to: form.data.email,
				from: 'chris@webboot.io',
				subject: 'Thanks for messaging webboot.io!',
				textBody:
					`Hi ${form.data.name}, I got your message. I'll reach out soon.` +
					`If you need immediate assistance please call my cell.\n\n` +
					`Christopher Hicks\n` +
					`(360) 827-2736\n` +
					`chris@webboot.io`
			});

			const p2 = sendEmail({
				to: 'chris@webboot.io',
				from: 'forms@webboot.io',
				subject: `New message from ${form.data.name}`,
				textBody:
					`email: ${form.data.email}\n` +
					`name: ${form.data.name}\n` +
					`tel: ${form.data.tel}\n` +
					`message: ${form.data.message}\n`
			});

			// wait for both emails in parallel
			const res1 = await p1;
			const res2 = await p2;

			const handleError = async (res: Response) => {
				// return fail(res.status, { form });
				setError(form, `${res.status}: ${res.statusText}`);
				return message(form, `${res.status}: ${res.statusText}`, {
					status: 500
				});
			};

			if (!res1.ok) {
				return handleError(res1); // returns form with error wrapper
			}
			if (!res2.ok) {
				return handleError(res2); // returns form with error wrapper
			}
		} catch (err) {
			console.error(err);
			return message(form, err, { status: 500 });
		}

		return message(form, 'form submitted');
	}
};
