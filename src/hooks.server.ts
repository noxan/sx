import { init } from '@jill64/sentry-sveltekit-cloudflare/server';
import { handle as authHandle } from './auth';

const { onHandle, onError } = init(
	'https://2673cb3aed1f9088a1516478698e54fb@o4508105785868288.ingest.de.sentry.io/4508144247177296',
	{ toucanOptions: { enabled: import.meta.env.PROD } },
);

export const handleError = onError();

export const handle = onHandle(authHandle);
