<script>
	import { invalidate, goto } from '$app/navigation';
	let email = '';
	let password = '';
	let error = '';

	async function login() {
		const res = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' }
		});

		if (res.ok) {
			await invalidate(); // Refresh session if needed
			goto('/admin');     // 🔁 Redirect after success
		} else {
			const data = await res.json();
			error = data.error || 'فشل تسجيل الدخول';
		}
	}
</script>


<!-- Page Wrapper -->
<div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
	<!-- Login Card -->
	<div class="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
		<h2 class="text-center text-xl font-bold mb-6">مرحبًا</h2>

		<!-- Email Input -->
		<div class="relative w-full mb-4">
			<input
				id="email"
				type="text"
				bind:value={email}
				placeholder=" "
				class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-white border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
			/>
			<label
				for="email"
				class="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pr-2"
			>
				اسم المستخدم
			</label>
		</div>

		<!-- Password Input -->
		<div class="relative w-full mb-4">
			<input
				id="password"
				type="password"
				bind:value={password}
				placeholder=" "
				class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-white border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
			/>
			<label
				for="password"
				class="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pr-2"
			>
				كلمة المرور
			</label>
		</div>

		<!-- Error Message -->
		{#if error}
			<p class="text-red-600 text-sm text-center mb-4">{error}</p>
		{/if}

		<!-- Login Button -->
		<button
			on:click={login}
			class="w-full h-12 bg-black text-white rounded-lg hover:bg-gray-900 active:bg-gray-800"
		>
			تسجيل الدخول
		</button>
	</div>
</div>
