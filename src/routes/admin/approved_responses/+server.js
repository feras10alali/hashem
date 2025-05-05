import { json } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export async function POST({ request }) {
	const { responseId } = await request.json();

	if (!responseId) {
		return json({ error: 'Missing response ID' }, { status: 400 });
	}

	try {
		await pb.collection('approved_responses').delete(responseId);
		return json({ message: 'تم الانتهاء من الرد وحذفه' });
	} catch (err) {
		console.error(err);
		return json({ error: 'حدث خطأ أثناء حذف الرد' }, { status: 500 });
	}
}
