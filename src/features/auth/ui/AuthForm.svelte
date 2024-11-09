<script lang="ts">
	import { Input, Button, Icon } from '$shared/ui';
	import { pb } from '$shared/lib/api/pocketbase';

	interface Props {
		onsuccess: () => void;
	}

	let { onsuccess }: Props = $props();

	let passwordInputType = $state('password');
	let username = $state('');
	let password = $state('');
	const passwordVisible = $derived(passwordInputType === 'password');

	const togglePasswordVisibility = () => {
		passwordInputType = passwordVisible ? 'text' : 'password';
	};
</script>

{#snippet passwordVisibilityButton()}
	{@const iconSize = 20}

	<button class="text-gray hover:text-accent" onclick={togglePasswordVisibility} type="button">
		{#if passwordVisible}
			<Icon id="fa6-reg-eye" size={iconSize} />
		{:else}
			<Icon id="fa6-reg-eye-slash" size={iconSize} />
		{/if}
	</button>
{/snippet}

<form
	onsubmit={async (e: SubmitEvent) => {
		e.preventDefault();

		try {
			await pb.collection('users').authWithPassword(username, password);
			if (onsuccess) onsuccess();
		} catch (error) {
			console.log(error);
		}
	}}
	class="flex w-96 flex-col space-y-8"
>
	<div class=" space-y-6">
		<Input
			label="Username"
			name="username"
			placeholder="Enter your username"
			bind:value={username}
		/>
		<Input
			label="Password"
			name="password"
			type={passwordInputType}
			placeholder="Enter your password"
			bind:value={password}
			iconSlot={passwordVisibilityButton}
		/>
	</div>
	<Button size="l">Log In</Button>
</form>
