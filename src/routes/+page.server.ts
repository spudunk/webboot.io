import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib';

export const actions = {
	default: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const name = data.get('name')?.toString();
		const tel = data.get('tel')?.toString();
		const business = data.get('business')?.toString();
		const website = data.get('website')?.toString();

		// form validation
		if (!email) {
			return fail(400, { email, emailMissing: true });
		}
		if (!name) {
			return fail(400, { name, nameMissing: true });
		}

		try {
			const p1 = sendEmail({
				to: email,
				from: 'chris@webboot.io',
				subject: 'Thanks for contacting webboot.io!',
				textBody:
					`Hi ${name}, I'll reach out within a few days to discuss your project.` +
					`If you need immediate assistance please call my cell.\n\n` +
					`Christopher Hicks\n` +
					`(360) 827-2736\n` +
					`chris@webboot.io`
			});

			const p2 = sendEmail({
				to: 'chris@webboot.io',
				from: 'forms@webboot.io',
				subject: `New submission${business ? ` from ${business}` : ''}`,
				textBody:
					`email: ${email}\n` +
					`name: ${name}\n` +
					`tel: ${tel}\n` +
					`business: ${business}\n` +
					`website: ${website}`
			});

			// wait for both emails
			const res1 = await p1;
			const res2 = await p2;

			const handleError = async (res: Response) => {
				const type = res.headers.get('content-type');
				// console.log('Response Type: ', type);
				// console.error('Response: ', res);
				if (type?.includes('json')) {
					const json = await res.json();
					// console.error(res, json);
					return fail(res.status, { error: JSON.stringify(json) });
				}
				return fail(res.status, { error: res.status + ' ' + res.statusText });
			};
			if (!res1.ok) {
				return handleError(res1);
			}
			if (!res2.ok) {
				return handleError(res2);
			}
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { error: '500: Network Error ' + err });
		}
	}
} satisfies Actions;
