import { setError, message, superValidate } from 'sveltekit-superforms/server';
import { contactSchema, messageSchema } from '$lib/schemas.js';
import { zod } from 'sveltekit-superforms/adapters';

import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib/server';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
	const contactForm = await superValidate(zod(contactSchema));
	return { contactForm };
};

export const actions = {
	contact: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));
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
		const form = await superValidate(request, zod(messageSchema));

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
