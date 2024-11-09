<script lang="ts">
	import '../app.css';
	import { NavBar } from '$widgets/nav-bar';
	import { Header } from '$widgets/header';

	let { children, data } = $props();

	console.log(data.auth);
</script>

<div class="flex min-h-svh">
	<NavBar mode="desktop" />
	<div class="grow bg-base">
		<Header>
			<NavBar mode="mobile" />
		</Header>
		<main class="overflow-hidden p-10">
			{@render children()}
		</main>
	</div>
</div>
