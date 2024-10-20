import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';

const { LOCAL_DATABASE_URL } = process.env;

const config = {
	schema: './src/lib/server/db/schema.ts',
	dialect: 'sqlite',

	verbose: true,
	strict: true
} satisfies Config;

export default defineConfig({
	...config,
	...(LOCAL_DATABASE_URL
		? {
				dbCredentials: {
					url: LOCAL_DATABASE_URL
				}
			}
		: {
				driver: 'd1-http',
				dbCredentials: {
					// accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
					// databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
					// token: process.env.CLOUDFLARE_D1_TOKEN!
				}
			})
});
