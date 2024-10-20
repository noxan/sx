import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const users = await db(platform).select().from(user);

	return {
		users,
		test: 'bla',
	};
};
