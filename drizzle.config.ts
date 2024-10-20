import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';

const { LOCAL_DATABASE_URL, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_DATABASE_ID, CLOUDFLARE_D1_TOKEN } =
	process.env;

const config = {
	schema: './src/lib/server/db/schema.ts',
	dialect: 'sqlite',

	verbose: true,
	strict: true,
} satisfies Config;

const localConfig = {
	dbCredentials: {
		url: LOCAL_DATABASE_URL,
	},
};

const remoteConfig = {
	driver: 'd1-http',
	dbCredentials: {
		accountId: CLOUDFLARE_ACCOUNT_ID,
		databaseId: CLOUDFLARE_DATABASE_ID,
		token: CLOUDFLARE_D1_TOKEN,
	},
};

export default defineConfig({
	...config,
	...(LOCAL_DATABASE_URL ? localConfig : remoteConfig),
});
