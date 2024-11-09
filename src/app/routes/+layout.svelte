<script lang="ts">
	import '../app.css';
	import { NavBar } from '$widgets/nav-bar';
	import { Header } from '$widgets/header';

	let { children, data } = $props();

	console.log(data.auth);
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
