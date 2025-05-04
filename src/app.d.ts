/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="@cloudflare/workers-types" />

import type { D1Database } from '@cloudflare/workers-types';
import type { Database } from '$lib/server/db';

declare module '@analytics/simple-analytics' {
	interface SimpleAnalyticsConfig {
		customDomain?: string;
		collectDnt?: boolean;
	}
	
	interface SimpleAnalyticsPlugin {
		name: 'simple-analytics';
		config?: SimpleAnalyticsConfig;
	}
	
	function simpleAnalyticsPlugin(config?: SimpleAnalyticsConfig): SimpleAnalyticsPlugin;
	export default simpleAnalyticsPlugin;
}

declare module 'analytics' {
	interface AnalyticsInstance {
		page: (options?: { [key: string]: any }) => void;
		track: (event: string, payload?: { [key: string]: any }) => void;
		identify: (userId: string, traits?: { [key: string]: any }) => void;
	}

	interface AnalyticsConfig {
		app: string;
		plugins?: any[];
	}

	export default function Analytics(config: AnalyticsConfig): AnalyticsInstance;
}

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
			db: Database;
		}
		interface PageData {
			message?: string;
			errors?: Record<string, string>;
		}
		interface Platform {
			env: {
				DB: D1Database;
			};
		}
		// interface Platform {}
	}

	interface EmailData {
		to: string;
		from: string;
		subject: string;
		textBody: string;
	}

	interface Env {
		DB: D1Database;
		FROM_EMAIL: string;
		ADMIN_EMAIL: string;
	}
}

export {};

