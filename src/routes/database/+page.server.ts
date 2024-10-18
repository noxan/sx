import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const users = await db.select().from(user);

	return {
		users,
		test: 'bla'
	};
};
