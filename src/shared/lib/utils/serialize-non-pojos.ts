export default function serializeNonPOJOs<T = object>(obj: object) {
	return structuredClone(obj) as T;
}
