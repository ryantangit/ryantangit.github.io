export function querySelectorVerbose<T extends Element>(input: string): T{
	const element = document.querySelector<T>(input);
	if (!element) {
		throw new Error(`DOM selection ${input} not found`);
	}
	return element;
}
