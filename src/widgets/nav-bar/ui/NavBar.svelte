<script lang="ts">
	import clsx from 'clsx';
	import { Icon, Modal } from '$shared/ui';
	import { outsideClick } from '$shared/lib/actions';
	import { useModal } from '$shared/lib/hooks';
	import { NAVIGATION_LINKS } from '$shared/lib/constants';
	import { AuthForm } from '$features/auth';
	import { ICON_SIZE } from '../lib/constants';

	interface Props {
		mode: 'desktop' | 'mobile';
	}

	let { mode }: Props = $props();
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

	const authModal = useModal();

	const outsideClickHandler = () => {
		if (mode === 'desktop') return;

		closeHandler();
	};

	$effect(() => {
		if (mode === 'mobile') return;

		const handler = () => {
			const width = container.clientWidth;
			const { paddingLeft, paddingRight } = window.getComputedStyle(container);

			if (!width) return;

			nav.style.setProperty('--max-width', `${width}px`);
			nav.style.setProperty(
				'--min-width',
				`calc(${ICON_SIZE}px + ${paddingLeft} + ${paddingRight})`
			);
		};

		handler();

		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		};
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

	{@const tag = href ? 'a' : 'button'}
	{@const role = href ? 'link' : 'button'}

	<li>
		<svelte:element this={tag} {role} tabindex="0" class={commonContainerClasses} {href} {onclick}>
			{@render itemContent()}
		</svelte:element>
	</li>
{/snippet}

<nav
	bind:this={nav}
	use:outsideClick={outsideClickHandler}
	class={clsx({
		'sticky top-0 hidden h-svh shrink-0 self-start overflow-hidden border-r border-outline transition-[width] duration-300 sm:flex':
			mode === 'desktop',
		'h-full sm:hidden': mode === 'mobile',
		'w-[var(--min-width)]': mode === 'desktop' && !open,
		'w-[var(--max-width)]': mode === 'desktop' && open
	})}
	style="--min-width: 68px"
>
	<div
		bind:this={container}
		class={clsx('relative flex origin-left flex-col', {
			'p-6': mode === 'desktop',
			'h-full': mode === 'mobile'
		})}
	>
		<div class={clsx({ 'flex h-full items-center px-6': mode === 'mobile' })}>
			<button class="hover:text-accent" onclick={toggleHandler} aria-label="open menu">
				<Icon size={ICON_SIZE} id="fa6-bars" />
			</button>
		</div>
		<div
			class={clsx('flex flex-col gap-4', {
				'h-full': mode === 'desktop',
				'absolute top-[calc(100%+1px)] h-[calc(100svh-100%)] border-r border-outline bg-surface px-6 pb-6 transition-transform':
					mode === 'mobile',
				'-translate-x-full': mode === 'mobile' && !open
			})}
		>
			<div class="my-auto flex min-w-max flex-col gap-4">
				{#each NAVIGATION_LINKS as { id, label, links } (id)}
					<p
						class={clsx('font-roboto-condensed text-lg transition-opacity', { 'opacity-0': !open })}
					>
						{label}
					</p>
					<ul class="flex flex-col gap-3">
						{#each links as { id, text, iconId, href } (id)}
							{@render menuItem({ text, iconId, href })}
						{/each}
					</ul>
				{/each}
			</div>
			<ul class="flex min-w-max flex-col gap-3">
				{@render menuItem({
					text: 'Log In',
					iconId: 'fa6-right-to-bracket',
					onclick: authModal.open
				})}
				{@render menuItem({ text: 'Sign Up', iconId: 'fa6-user-plus' })}
			</ul>
		</div>
	</div>
</nav>

<Modal class="basis-96" open={authModal.isOpen} onclose={authModal.close}>
	<AuthForm onsuccess={authModal.close} />
</Modal>
