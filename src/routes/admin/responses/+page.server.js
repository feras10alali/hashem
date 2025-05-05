import { json, redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export async function load({ locals }) {
	if (!locals.user) throw redirect(302, '/login');

	const responses = await pb.collection('response').getFullList();

	return {
		responses: responses.map(r => ({
			id: r.id,
			name: r.name,
			phonenumber: r.phonenumber,
			status: r.status,
			home: r.home
		}))
	};
}
