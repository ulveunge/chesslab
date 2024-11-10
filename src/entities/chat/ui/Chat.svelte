<script lang="ts">
	import SendMessage from '$features/send-message/ui/SendMessage.svelte';
	import { getMessages } from '$entities/chat/lib/api';
	import clsx from 'clsx';
	import { USER_ID } from '$entities/chat/lib/constants';

	// interface Props {
	// 	roomId?: string;
	// }
	//
	// const { roomId }: Props = $props()

	function sendMessage(message: string) {}

</script>

{#snippet messageSnippet(message)}
	{@const isMyMessage = message.userId === USER_ID}
	<div class={clsx("p-4 rounded-md w-fit max-w-[80%] mb-4 last:mb-0", { "self-end bg-orange-100": isMyMessage, "bg-sky-50": !isMyMessage })}>
		<p>{message.message}</p>
	</div>
{/snippet}

<div class="max-w-96 border border-gray rounded-md">
	<div class="py-8 px-2 flex flex-col">
		{#await getMessages() then messages}
			{#each messages as message}
				{@render messageSnippet(message)}
			{/each}
		{/await}
	</div>
	<SendMessage />
</div>
