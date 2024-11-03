import type { RequestEvent } from '@sveltejs/kit';
declare global {
	type RegEvent = RequestEvent<Partial<Record<string, string>>, string | null>;
}

export {};
