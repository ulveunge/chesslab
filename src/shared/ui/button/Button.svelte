<script lang="ts">
	import type { Snippet } from 'svelte';
	import clsx from 'clsx';

	interface Props {
		children: Snippet;
		size?: 's' | 'm' | 'l';
		href?: string;
		class?: string;
		onclick?: () => void;
	}

	let { children, href, class: className, onclick, size = 's' }: Props = $props();

	const tag = href ? 'a' : 'button';
	const role = href ? 'link' : 'button';
	let sizeClasses = '';

	switch (size) {
		case 's':
			sizeClasses = 'py-2 px-4 text-sm';
			break;
		case 'm':
			sizeClasses = 'py-3 px-5 text-md';
			break;
		case 'l':
			sizeClasses = 'py-4 px-6 text-lg';
			break;
		default:
			sizeClasses = '';
			break;
	}

</script>


<svelte:element this={tag} {role} tabindex="0" class={clsx('text-white bg-accent hover:-translate-y-px active:translate-y-px transition-transform rounded-lg', sizeClasses, className)} {href} {onclick}>
	{@render children()}
</svelte:element>