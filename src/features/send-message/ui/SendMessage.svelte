<!-- aI8ofJZh6nPZ1wX-->
<script lang="ts">
	import { Button, Input } from '$shared/ui';

	interface Props {
		onclick: (message: string) => void;
	}

	let message = $state('');
	const { onclick: onClick }: Props = $props();

	function onclick() {
		onClick(message)
	}
</script>

<div class="flex w-full">
	<Input class="*:rounded-r-none w-full" placeholder="Type your message..." name="message" bind:value={message} />
	<Button class="rounded-l-none" size="l" {onclick}>send</Button>
</div>