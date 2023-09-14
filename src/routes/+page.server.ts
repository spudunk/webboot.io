import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib'

export const actions = {
    default: async ({request}) => {
        // TODO log the user in
        const data = await request.formData();
        const email = data.get('email')?.toString();
        const name = data.get('name')?.toString();
        // const tel = data.get('tel')?.toString();
        // const business = data.get('business')?.toString();
        // const website = data.get('website')?.toString();

        if (!email) {
			return fail(400, { email, emailMissing: true });
		}
        if (!name) {
            return fail(400, { name, nameMissing: true });
        }

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
        })

        // const p2 = sendEmail({
        //     to: 'chris@webboot.io',
        //     from: 'forms@webboot.io',
        //     subject: `New submission${business?` from ${business}`:''}`,
        //     textBody: 
        //     `email: ${email}\n` + 
        //     `name: ${name}\n` +
        //     `tel: ${tel}\n` +
        //     `business: ${business}\n` +
        //     `website: ${website}`
        // })

        const res1 = await p1;
        // const res2 = await p2;

        if (res1.ErrorCode) {
            console.error(res1)
            return fail(res1.ErrorCode, {error: res1})
        }
        // if (res2.ErrorCode) {
        //     console.error(res2)
        //     return fail(res2.ErrorCode, {error: res2})
        // } 
        return { success: true };
    },
} satisfies Actions;