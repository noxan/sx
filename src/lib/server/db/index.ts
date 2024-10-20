import { drizzle } from 'drizzle-orm/d1';

export const db = (platform: Readonly<App.Platform> | undefined) => {
	if (!platform?.env.DB) {
		throw new Error('DB is not configured');
	}

	return drizzle(platform.env.DB);
};
