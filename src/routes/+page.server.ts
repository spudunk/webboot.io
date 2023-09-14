import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({request}) => {
        // TODO log the user in
        const data = await request.formData();
        const email = data.get('email');
        const name = data.get('name');
        const tel = data.get('tel');
        const phone = data.get('phone');
        const business = data.get('business');
        const website = data.get('website');


        if (!email) {
			return fail(400, { email, missing: true });
		}

        if (!name) {
            return fail(400, { name, missing: true });
        }

        console.log(email, name, tel, phone, business, website);
        return { success: true };

    },
} satisfies Actions;