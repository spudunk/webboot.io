import type { Handle } from '@sveltejs/kit';
import { Database } from '$lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
	// Only initialize database if we're not prerendering and we have access to platform.env
	if (event.platform?.env?.DB) {
		const db = new Database(event.platform.env.DB);
		event.locals.db = db;
	}

	return resolve(event);
};
