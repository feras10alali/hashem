<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { alert, showAlert } from '$lib/alertStore';
	import { cubicOut } from 'svelte/easing';
	import { logout } from '$lib/logout';


	let showDrawer = false;

	// Custom transition: slide in from right
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


	const approved = writable([]);

	onMount(() => {
		approved.set($page.data.approved);
	});

	const removeApproved = (id) => {
		approved.update(list => list.filter(r => r.id !== id));
	};

	const handleFinish = async (responseId) => {
		try {
			const res = await fetch('/admin/approved_responses', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ responseId })
			});
			const result = await res.json();
			if (res.ok) {
				removeApproved(responseId);
				showAlert(result.message, 'success');
			} else {
				showAlert(result.error, 'error');
			}
		} catch (err) {
			console.error(err);
			showAlert('حدث خطأ أثناء العملية', 'error');
		}
	};
</script>

	

<button
	class="text-black px-0 py-0 rounded mr-4 text-3xl"
	on:click={() => showDrawer = true}
>
	☰
</button>

{#if showDrawer}
	<div
		class="fixed inset-0 bg-black/30 z-40"
		on:click={handleOverlayClick}
	>
		<!-- Added 'flex flex-col justify-between' to push logout button to bottom -->
		<div
			class="fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg z-50 p-4 flex flex-col justify-between"
			transition:slideRightToLeft
		>
			<div>
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-lg font-bold">الصفحات</h2>
					<button on:click={() => showDrawer = false} class="text-black text-xl">×</button>
				</div>
				<nav class="flex flex-col gap-2">
					<a href="/admin/responses" class="hover:underline">الردود</a>
					<span class="text-gray-400 cursor-not-allowed">الردود المقبولة</span>
					<a href="/admin/add_admin" class="hover:underline">اضافة مسؤول</a>
				</nav>
			</div>

			<!-- 🔴 Logout button -->
			<button
				type="submit"
				on:click={logout}
				class="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-full"
			>
				تسجيل الخروج
			</button>
		</div>
	</div>
{/if}


<h1 class="text-3xl font-bold text-center my-8">الردود الموافق عليها</h1>

{#if $approved.length === 0}
	<p class="text-center text-gray-500">لا توجد ردود.</p>
{:else}
	<ul class="space-y-5 max-w-3xl mx-auto px-4">
		{#each $approved as response}
			<li class="bg-white border border-gray-200 rounded-xl shadow p-5">
				<p class="mb-1"><strong>الاسم:</strong> {response.name}</p>
				<p class="mb-1"><strong>رقم الهاتف:</strong> {response.phonenumber}</p>
				{#if response.home?.lat && response.home?.lon}
					<p>
						<strong>الموقع:</strong>
						<a
							href={`https://www.google.com/maps?q=${response.home.lat},${response.home.lon}`}
							target="_blank"
							class="text-blue-600 underline hover:text-blue-800"
						>
							{response.home.lat.toFixed(6)}, {response.home.lon.toFixed(6)}
						</a>
					</p>
				{/if}
				<div class="mt-4">
					<button
						class="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 active:bg-gray-800 transition"
						on:click={() => handleFinish(response.id)}
					>
						تم الانتهاء
					</button>
				</div>
			</li>
		{/each}
	</ul>
{/if}

<!-- Alert Box -->
{#if $alert.visible}
	<div class="fixed bottom-4 right-4 z-50">
		<div class={`flex items-center p-4 text-sm rounded-lg shadow ${
			$alert.type === 'success' ? 'text-green-800 bg-green-100' :
			$alert.type === 'error' ? 'text-red-800 bg-red-100' :
			'text-blue-800 bg-blue-100'
		}`} role="alert">
			<svg class="shrink-0 w-4 h-4 me-3" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
			</svg>
			<div>
				<span class="font-medium">
					{$alert.type === 'success' ? 'نجاح!' : 'خطأ!'}
				</span>
				{$alert.message}
			</div>
		</div>
	</div>
{/if}
