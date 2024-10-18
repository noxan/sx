import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = () =>
	json({
		environment: process.env.NODE_ENV
	});
