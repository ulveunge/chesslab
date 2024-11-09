<script lang="ts">
	import clsx from 'clsx';
	import { Icon } from '$shared/ui';
	import type { TTheme } from '$shared/lib/types';
	import { THEMES } from '../lib/constants';
	import themeStore from '../model/store.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	const getThemeIndex = (targetTheme: TTheme) => {
		return THEMES.findIndex((theme) => theme === targetTheme);
	};

	let initialRender = true;
	let activeThemeIndex = $state(getThemeIndex(themeStore.currentTheme));
	let counter = $derived((activeThemeIndex + 1) % THEMES.length);
	let container: HTMLSpanElement;

	const switchTheme = () => {
		activeThemeIndex = getThemeIndex(THEMES[counter]);
		themeStore.changeTheme(THEMES[activeThemeIndex]);
	};

	$effect(() => {
		if (initialRender) {
			container.classList.remove('transition-transform');
			initialRender = false;
		} else {
			container.classList.add('transition-transform');
		}

		container.style.setProperty('--x', `${activeThemeIndex * -100}%`);
	});
</script>

<button
	class={clsx(
		'relative h-8 w-24 overflow-hidden rounded-lg border border-outline bg-base text-sm font-thin shadow-inner shadow-depth hover:border-accent',
		className
	)}
	onclick={switchTheme}
>
	<span
		bind:this={container}
		class="absolute inset-0 inline-flex size-full translate-x-[var(--x)] items-center transition-transform"
	>
		{#each THEMES as theme (theme)}
			<span class="inline-flex w-full shrink-0 items-center justify-center gap-2">
				<Icon size={20} id="{theme}-theme" />
				{theme}
			</span>
		{/each}
	</span>
</button>
