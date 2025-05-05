import { json } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export async function POST({ request }) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return json({ error: 'يرجى تعبئة جميع الحقول' }, { status: 400 });
    }

    await pb.collection('users').authWithPassword(email, password);

    return json({ message: 'تم تسجيل الدخول بنجاح' });
  } catch (err) {
    console.error('Login failed:', err);
    return json({ error: 'بيانات تسجيل الدخول غير صحيحة' }, { status: 401 });
  }
}
