<script lang="ts">
	import clsx from 'clsx';
	import { Icon } from '$/shared/ui';
	import { NAVIGATION_LINKS, outsideClick } from '$/shared/lib';
	import { ICON_SIZE } from '../lib/constants';

	let open = $state(false);

	let nav: HTMLElement;
	let container: HTMLDivElement;

	const openHandler = () => {
		open = true;
	};

	const closeHandler = () => {
		open = false;
	};

	const toggleHandler = $derived(open ? closeHandler : openHandler);

	$effect(() => {
		const width = container.clientWidth;
		const { paddingLeft, paddingRight } = window.getComputedStyle(container);

		nav.style.setProperty('--max-width', `${width}px`);
		nav.style.setProperty('--min-width', `calc(${ICON_SIZE}px + ${paddingLeft} + ${paddingRight})`);
	});
</script>

{#snippet menuItem({
	text,
	iconId,
	href,
	onclick
}: {
	text: string;
	iconId: string;
	href?: string;
	onclick?: () => void;
})}
	{@const commonContainerClasses = clsx('hover:text-accent inline-flex items-center gap-3', {
		'pointer-events-none': !open
	})}

	{#snippet itemContent()}
		<Icon class="pointer-events-auto" size={ICON_SIZE} id={iconId} />
		<span
			class={clsx('transition-opacity', {
				'pointer-events-none select-none opacity-0': !open
			})}
		>
			{text}
		</span>
	{/snippet}

	<li>
		{#if href}
			<a class={commonContainerClasses} {href}>
				{@render itemContent()}
			</a>
		{:else}
			<button class={commonContainerClasses} {onclick}>
				{@render itemContent()}
			</button>
		{/if}
	</li>
{/snippet}

<nav
	bind:this={nav}
	use:outsideClick={closeHandler}
	class={clsx(
		'sticky top-0 flex h-svh shrink-0 self-start overflow-hidden border-r border-outline transition-[width] duration-300',
		{
			'w-[var(--min-width)]': !open,
			'w-[var(--max-width)]': open
		}
	)}
	style="--min-width: 68px"
>
	<div bind:this={container} class="flex min-w-max origin-left flex-col p-6">
		<div>
			<button class="hover:text-accent" onclick={toggleHandler} aria-label="open menu">
				<Icon size={ICON_SIZE} id="fa6-bars" />
			</button>
		</div>
		<div class="my-auto flex flex-col gap-4">
			{#each NAVIGATION_LINKS as { id, label, links } (id)}
				<p class={clsx('font-roboto-condensed text-lg transition-opacity', { 'opacity-0': !open })}>
					{label}
				</p>
				<ul class="flex flex-col gap-3">
					{#each links as { id, text, iconId, href } (id)}
						{@render menuItem({ text, iconId, href })}
					{/each}
				</ul>
			{/each}
		</div>
		<ul class="flex flex-col gap-3">
			{@render menuItem({ text: 'Log In', iconId: 'fa6-right-to-bracket' })}
			{@render menuItem({ text: 'Sign Up', iconId: 'fa6-user-plus' })}
		</ul>
	</div>
</nav>
