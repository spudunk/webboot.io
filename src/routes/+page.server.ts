import { superValidate } from 'sveltekit-superforms/server';
import { contactSchema } from '$lib/schemas.js';

export const load = async () => {
	// Server API:
	
	// Send contact form data to the client
	const contactForm = await superValidate(contactSchema);
	// Always return { form } in load and form actions.
	return { contactForm };
	
};
