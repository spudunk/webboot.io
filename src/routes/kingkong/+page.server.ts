import { superValidate } from 'sveltekit-superforms/server';
import { messageSchema } from '$lib/schemas.js';

export const load = async () => {
	// Server API:
	
	// Send contact form data to the client
	const messageForm = await superValidate(messageSchema);
	// Always return { form } in load and form actions.
	return { messageForm };
	
};
