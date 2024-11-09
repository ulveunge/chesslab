<script lang="ts">
	import { ThemeSwitch } from '$features/theme-switch';

	interface Props {
		children: Children;
	}

	let { children }: Props = $props();
</script>

<header class="sticky top-0 z-[9999] flex h-[68px] border-b border-outline bg-surface">
	{@render children()}
	<div class="flex grow items-center px-6">
		<ThemeSwitch class="ml-auto" />
	</div>
</header>
