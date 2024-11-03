export default function (node: HTMLElement, selector = 'body') {
	if (!node) return;

	const portalTarget = document.querySelector(selector);

	if (portalTarget) {
		portalTarget.appendChild(node);
	}
}
