<script>
	import { invalidate } from '$app/navigation';
	import { cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import { logout } from '$lib/logout';

	let showDrawer = false;
	let username = '';
	let password = '';
	let passwordConfirm = '';
	let role = 'admin';
	let error = '';

	const alert = writable(null);

	function slideRightToLeft(node, { duration = 300 }) {
		return {
			duration,
			easing: cubicOut,
			css: t => `transform: translateX(${(1 - t) * 100}%);`
		};
	}

	function handleOverlayClick(e) {
		if (e.target === e.currentTarget) {
			showDrawer = false;
		}
	}

	async function registerAdmin() {
		const res = await fetch('/admin/add_admin', {
			method: 'POST',
			body: JSON.stringify({ username, password, passwordConfirm, role }),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await res.json();

		if (res.ok) {
			username = '';
			password = '';
			passwordConfirm = '';
			error = '';
			alert.set({ type: 'success', message: 'تمت إضافة المسؤول بنجاح' });
			await invalidate();
		} else {
			error = data.error || 'فشل في العملية';
			alert.set({ type: 'error', message: error });
		}

		setTimeout(() => alert.set(null), 5000);
	}
</script>

<button class="text-black bg-gray-100 px-2 py-1 rounded mr-4 mb-0 text-3xl" on:click={() => showDrawer = true}>☰</button>

{#if showDrawer}
	<div class="fixed inset-0 bg-black/30 z-40" on:click={handleOverlayClick}>
		<div class="fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg z-50 p-4 flex flex-col justify-between" transition:slideRightToLeft>
			<div>
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-lg font-bold">الصفحات</h2>
					<button on:click={() => showDrawer = false} class="text-black text-xl">×</button>
				</div>
				<nav class="flex flex-col gap-2">
					<a href="/admin/approved_responses" class="hover:underline">الردود</a>
					<a href="/admin/approved_responses" class="hover:underline">الردود المقبولة</a>
					<span class="text-gray-400 cursor-not-allowed">اضافة مسؤول</span>
				</nav>
			</div>

				<button type="submit" on:click={logout} class="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-full">
					تسجيل الخروج
				</button>
		</div>
	</div>
{/if}


<div class="flex justify-center items-center w-full min-h-screen pt-4 bg-gray-100">
	<div class="w-full max-w-2xl bg-white mt-[0%] p-6 rounded-xl shadow-md">
		<h1 class="text-xl text-center font-semibold mb-6">اضافة مسؤول</h1>

		<div class="space-y-4">
			<div class="relative">
				<input
					bind:value={username}
					id="username"
					type="text"
					placeholder=" "
					class="peer w-full px-2.5 pt-5 pb-2.5 text-sm text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-black"
				/>
				<label
					for="username"
					class="absolute right-2 text-sm text-gray-500 transform scale-75 -translate-y-4 top-2 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all"
				>
					اسم المستخدم
				</label>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="relative">
					<input
						bind:value={password}
						id="password"
						type="password"
						placeholder=" "
						class="peer w-full px-2.5 pt-5 pb-2.5 text-sm text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-black"
					/>
					<label
						for="password"
						class="absolute right-2 text-sm text-gray-500 transform scale-75 -translate-y-4 top-2 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all"
					>
						كلمة المرور
					</label>
				</div>

				<div class="relative">
					<input
						bind:value={passwordConfirm}
						id="passwordConfirm"
						type="password"
						placeholder=" "
						class="peer w-full px-2.5 pt-5 pb-2.5 text-sm text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-black"
					/>
					<label
						for="passwordConfirm"
						class="absolute right-2 text-sm text-gray-500 transform scale-75 -translate-y-4 top-2 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all"
					>
						تأكيد كلمة المرور
					</label>
				</div>
			</div>

			{#if error}
				<p class="text-center text-red-600 text-sm">{error}</p>
			{/if}

			<button
				on:click={registerAdmin}
				class="w-full mt-6 bg-black text-white h-12 rounded-lg hover:bg-gray-900 active:bg-gray-800 transition-all"
			>
				اضافة مسؤول
			</button>
		</div>
	</div>
</div>

<!-- Alert -->
{#if $alert}
	<div class="fixed bottom-4 right-3 z-50">
		<div class={`flex items-center p-4 text-sm rounded-lg shadow-lg ${
			$alert.type === 'success' ? 'text-green-800 bg-green-100' :
			$alert.type === 'error' ? 'text-red-800 bg-red-100' :
			'text-blue-800 bg-blue-100'
		}`} role="alert">
			<svg class="shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
			</svg>
			<span class="sr-only">Info</span>
			<div>
				<span class="font-medium">{$alert.type === 'success' ? '' : 'خطأ!'}</span> {$alert.message}
			</div>
		</div>
	</div>
{/if}
