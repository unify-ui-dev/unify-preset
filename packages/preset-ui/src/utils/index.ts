export const getConfigValue = (value: number | string | undefined) =>
	typeof value === "number"
		? value
		: typeof value === "string"
			? `[${value}]`
			: "";

/**
 * This function check to value 1: light and 2 : dark, if the 2 values are same then return an empty string to avoid CSS duplication in output
 * @param
 * @returns
 */
export const getShortcutsIfNotSame = ({
	val1,
	val2,
	shortcuts,
}: { val1: string; val2: string; shortcuts: string }) =>
	val1 === val2 ? "" : shortcuts;
