/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string;
				role: string;
			};
		}
		interface PageData {
			message?: string;
			errors?: Record<string, string>;
		}
		// interface Platform {}
	}
}

export {};

