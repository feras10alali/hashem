import { writable } from 'svelte/store';

export const alert = writable({ message: '', type: '', visible: false });

export function showAlert(message, type = 'info', duration = 3000) {
	alert.set({ message, type, visible: true });
	setTimeout(() => {
		alert.set({ message: '', type: '', visible: false });
	}, duration);
}
