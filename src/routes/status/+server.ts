import { NODE_ENV } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const { CF_PAGES, CF_PAGES_COMMIT_SHA } = process.env;

export const GET: RequestHandler = () =>
	json({
		CF_PAGES,
		CF_PAGES_COMMIT_SHA,
		environment: NODE_ENV,
	});
