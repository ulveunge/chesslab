import type { RequestEvent } from '@sveltejs/kit';
import type { Snippet } from 'svelte';
declare global {
	type RegEvent = RequestEvent<Partial<Record<string, string>>, string | null>;
	type Children = Snippet<[]>;
}

export {};
