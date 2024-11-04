<script lang="ts">
	import '../app.css';
	import { NavBar, Header } from '$widgets';
	let { children } = $props();
</script>

<div class="flex min-h-svh">
	<NavBar />
	<div class="grow bg-base">
		<Header />
		<main class="overflow-hidden p-10">
			{@render children()}
		</main>
	</div>
</div>
