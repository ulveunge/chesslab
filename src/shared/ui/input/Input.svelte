<script lang="ts">
	import clsx from 'clsx';
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		placeholder?: string;
		label?: string;
		type?: string;
		error?: string;
		value?: string;
		iconSlot?: Snippet<[]>;
		class?: string;
	}

	let {
		name,
		placeholder,
		label,
		type = $bindable('text'),
		error,
		value = $bindable(''),
		iconSlot,
		class: className
	}: Props = $props();

	let input: HTMLInputElement;

	const focusHandler = () => {
		input.focus();
	};
</script>

<div class={clsx('flex flex-col gap-2', className)}>
	{#if label}
		<label class="text-md font-medium" for={name}>{label}</label>
	{/if}
	<div
		class="flex rounded-md border border-outline bg-surface focus-within:border-red-500 focus-within:bg-base"
		onclick={focusHandler}
		role="presentation"
	>
		<input
			class="w-full rounded-[inherit] bg-transparent px-4 py-4 text-lg focus:outline-none"
			bind:this={input}
			{name}
			id={name}
			{type}
			{placeholder}
			bind:value
		/>
		{#if iconSlot}
			<div class="flex h-[calc(100%-4px)] items-center self-center pr-4">
				{@render iconSlot()}
			</div>
		{/if}
	</div>
	{#if error}
		<span>{error}</span>
	{/if}
</div>
