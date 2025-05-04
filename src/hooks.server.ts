import type { Handle } from '@sveltejs/kit';
import { Database } from '$lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
	// Get the D1 database from the platform
	const db = new Database(event.platform?.env?.DB);

	// Attach the database instance to locals
	event.locals.db = db;

	return resolve(event);
};
