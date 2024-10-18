import * as Sentry from '@sentry/sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authHandle } from './auth';

Sentry.init({
	dsn: 'https://2673cb3aed1f9088a1516478698e54fb@o4508105785868288.ingest.de.sentry.io/4508144247177296'
});

export const handleError = Sentry.handleErrorWithSentry();

export const handle = sequence(Sentry.sentryHandle(), authHandle);
