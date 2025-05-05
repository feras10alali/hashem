import { json } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export async function POST() {
  try {
    pb.authStore.clear(); // Clear the session
    return json({ message: 'تم تسجيل الخروج بنجاح' });
  } catch (err) {
    console.error('Logout failed:', err);
    return json({ error: 'حدث خطأ أثناء تسجيل الخروج' }, { status: 500 });
  }
}
