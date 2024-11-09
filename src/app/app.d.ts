import type { RequestEvent } from '@sveltejs/kit';
import type { Snippet } from 'svelte';
import PocketBase from 'pocketbase';
declare global {
	type RegEvent = RequestEvent<Partial<Record<string, string>>, string | null>;
	type Children = Snippet<[]>;
	type LayoutServerLoad = (
		event: ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>
	) => MaybePromise<void | Record<string, any>>;

	type User = {
		avatar: string;
		collectionId: string;
		collectionName: string;
		created: string;
		email: string;
		emailVisibility: boolean;
		id: string;
		name: string;
		updated: string;
		username: string;
		verified: boolean;
	} | null;

	type Auth = {
		isAuth: boolean;
		user: User;
	};

	declare namespace App {
		interface Locals {
			pb: PocketBase;
			auth: Auth;
		}
	}
}

export {};
