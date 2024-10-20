import { init } from '@jill64/sentry-sveltekit-cloudflare/client';

const handleErrorWithSentry = init(
	'https://2673cb3aed1f9088a1516478698e54fb@o4508105785868288.ingest.de.sentry.io/4508144247177296',
	{ sentryOptions: { enabled: import.meta.env.PROD } },
);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
