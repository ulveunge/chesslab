export default function useModal() {
	let isOpen = $state(false);

	const open = () => {
		isOpen = true;
	};

	const close = () => {
		isOpen = false;
	};

	const toggle = $derived(isOpen ? close : open);

	return {
		get isOpen() {
			return isOpen;
		},
		open,
		close,
		toggle
	};
}
