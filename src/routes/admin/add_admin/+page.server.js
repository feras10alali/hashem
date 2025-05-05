import { json, redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export async function load({ locals }) {
	if (!locals.user) throw redirect(302, '/login');

	const approved = await pb.collection('approved_responses').getFullList();

	return {
		approved: approved.map(r => ({
			id: r.id,
			name: r.name,
			phonenumber: r.phonenumber,
			home: r.home
		}))
	};
}
