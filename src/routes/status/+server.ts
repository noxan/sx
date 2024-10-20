import { NODE_ENV } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () =>
	json({
		environment: NODE_ENV,
	});
