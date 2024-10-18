import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'zukunftshaus',
				project: 'sx'
			}
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
