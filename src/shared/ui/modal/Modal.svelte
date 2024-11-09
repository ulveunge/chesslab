<script lang="ts">
	import { fade } from 'svelte/transition';
	import clsx from 'clsx';
	import { outsideClick, portal } from '$shared/lib/actions';
	import { Icon } from '$shared/ui';

	interface Props {
		open: boolean;
		onclose: () => void;
		children?: Children;
		class?: string;
	}

	let { open, children, onclose, class: className }: Props = $props();
</script>

{#if open}
	<div
		class="fixed top-0 z-[9999] flex h-svh w-svw min-w-[375px] items-center justify-center bg-overlay"
		use:portal
		transition:fade={{ duration: 150 }}
	>
		<div class={clsx('flex flex-col rounded-md bg-base p-6', className)} use:outsideClick={onclose}>
			<button
				class="mb-3 self-end text-gray hover:text-accent"
				aria-label="close modal"
				onclick={onclose}
			>
				<Icon size={24} id="cg-close-r" />
			</button>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
{/if}
