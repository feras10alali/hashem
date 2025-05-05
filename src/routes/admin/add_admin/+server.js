import { json } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export async function POST({ request }) {
	try {
		const { username, password, passwordConfirm, role } = await request.json();

		if (!username || !password || !passwordConfirm || !role) {
			return json({ error: 'جميع الحقول مطلوبة' }, { status: 400 });
		}

		if (password !== passwordConfirm) {
			return json({ error: 'كلمتا المرور غير متطابقتين' }, { status: 400 });
		}

		const user = await pb.collection('users').create({
			username,
			password,
			passwordConfirm,
			role
		});

		return json({ message: 'تمت إضافة المسؤول بنجاح', user });
	} catch (err) {
		console.error('فشل في إنشاء المستخدم:', err);
		return json({ error: err?.response?.message || 'فشل في إنشاء المستخدم' }, { status: 500 });
	}
}
