export function isDefined<T extends any>(value: T | undefined): value is T {
	return value !== undefined;
}
