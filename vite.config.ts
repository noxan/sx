import { sentryVitePlugin } from '@sentry/vite-plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	build: {
		sourcemap: true
	},
	plugins: [
		sentryVitePlugin({
			org: 'zukunftshaus',
			project: 'sx'
		}),
		sveltekit()
	],
	ssr: {
		noExternal: ['@jill64/sentry-sveltekit-cloudflare']
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
