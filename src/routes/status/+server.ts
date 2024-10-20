import { version } from '$app/environment';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () =>
	json({
		cloudflare: {
			pages: env.CF_PAGES,
			commit: env.CF_PAGES_COMMIT_SHA,
		},
		sveltekit: {
			mode: import.meta.env.MODE,
			version,
		},
	});
