<script lang="ts">
	import '../app.css';
	import { NavBar, Header } from '$widgets';
	import Button from '$shared/ui/button/Button.svelte';
	let { children } = $props();

	const onclick = () => window.alert('zalupa');

</script>

<div class="flex min-h-svh">
	<NavBar />
	<div class="grow bg-base">
		<Header />
		<main class="overflow-hidden p-10">
			{@render children()}
			<Button {onclick}>chesslab</Button>
			<Button size="m">chesslab</Button>
			<Button size="l">chesslab</Button>
		</main>
	</div>
</div>
