export default function (node: HTMLElement, fn: () => void) {
	const clickHandler = (e: MouseEvent) => {
		if (!(e.target instanceof Element) || !node || node.contains(e.target)) return;

		fn();
	};

	document.addEventListener('click', clickHandler, true);

	return {
		destroy() {
			document.removeEventListener('click', clickHandler, true);
		}
	};
}
