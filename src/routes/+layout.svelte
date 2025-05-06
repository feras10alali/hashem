<script>
	import { Header, Footer } from '$lib/components'
	import '../css/global.css'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();
</script>

<div class='app'>
	<main>
		<slot />
	</main>
</div>