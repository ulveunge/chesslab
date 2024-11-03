<script lang="ts">
	interface Props {
		id: string;
		size?: number;
		class?: string;
	}

	let { id, size, class: className }: Props = $props();
</script>

<svg class={className} style="width: {size}px; height: {size}px">
	<use xlink:href="icons.svg#{id}"></use>
</svg>
