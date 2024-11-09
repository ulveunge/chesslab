<script lang="ts">
	import clsx from 'clsx';

	interface Props {
		children: Children;
		size?: 's' | 'm' | 'l';
		href?: string;
		class?: string;
		onclick?: () => void;
	}

	let { children, href, class: className, onclick, size = 's' }: Props = $props();

	const getSizeClasses = () => {
		switch (size) {
			case 's':
				return 'py-2 px-4 text-sm';
			case 'm':
				return 'py-3 px-5 text-md';
			case 'l':
				return 'py-4 px-7 text-lg';
			default:
				return '';
		}
	};

	const sizeClasses = getSizeClasses();
	const tag = href ? 'a' : 'button';
	const role = href ? 'link' : 'button';
</script>

<svelte:element
	this={tag}
	{role}
	tabindex="0"
	class={clsx(
		'relative inline-flex items-center overflow-hidden rounded-md text-white transition-transform',
		'active:translate-y-px',
		"before:absolute before:inset-0 before:size-full before:rounded-[inherit] before:bg-accent before:content-['']",
		"after:absolute after:inset-0 after:size-full after:origin-right after:scale-x-0 after:rounded-[inherit] after:bg-accent-dark after:transition-transform after:content-['']",
		'hover:after:origin-left hover:after:scale-x-100',
		sizeClasses,
		className
	)}
	{href}
	{onclick}
>
	<span class="z-10 w-full text-center">
		{@render children()}
	</span>
</svelte:element>
