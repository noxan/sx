import { version } from '$app/environment';
import { env } from '$env/dynamic/private';
import { NODE_ENV } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () =>
	json({
		cloudflare: {
			pages: env.CF_PAGES,
			commit: env.CF_PAGES_COMMIT_SHA,
		},
		sveltekit: {
			version,
		},
		environment: NODE_ENV,
	});
