import { init } from '@jill64/sentry-sveltekit-cloudflare/server';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authHandle } from './auth';

const { onHandle, onError } = init(
	'https://2673cb3aed1f9088a1516478698e54fb@o4508105785868288.ingest.de.sentry.io/4508144247177296',
	{ toucanOptions: { enabled: process.env.NODE_ENV !== 'development' } }
);

export const handleError = onError();

export const handle = sequence(onHandle(), authHandle);
