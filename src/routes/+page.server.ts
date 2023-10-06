import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import { sendEmail } from '$lib/server';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
	tel: z.string().optional(),
	business: z.string().optional(),
	website: z.string().optional(),
});

export const load = (async () => {
  // Server API:
  const form = await superValidate(schema);

  // Always return { form } in load and form actions.
  return { form };
});

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema);
    console.log('POST', form);

    // Convenient validation check:
    if (!form.valid) {
      // Again, always return { form } and things will just work.
      return fail(400, { form });
    }

    // TODO: Do something with the validated form.data

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

			// wait for both emails
			const res1 = await p1;
			const res2 = await p2;

			const handleError = async (res: Response) => {
				return fail(res.status, { form });
			};

			if (!res1.ok) {
				return handleError(res1);
			}
			if (!res2.ok) {
				return handleError(res2);
			}
		} catch (err) {
			console.error(err);
			return fail(500, { form });
		}


    // Yep, return { form } here too
    return { form };
  }
};


