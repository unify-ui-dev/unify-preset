import type { ColorShade } from "@/types";
import type { Theme } from "unocss/preset-mini";

export const isValidColor = (color: string, theme: Theme) => {
	const colors = theme.colors;
	return !colors ? false : Object.keys(colors).includes(color);
};

export const getNextShade = (
	currentShade: ColorShade,
	fallbackShade: ColorShade = "900",
): ColorShade => {
	const shadeNumber = Number.parseInt(currentShade);
	return shadeNumber === 950
		? fallbackShade
		: shadeNumber === 900
			? "950"
			: shadeNumber % 100 === 50
				? ((shadeNumber + 50).toString() as ColorShade)
				: ((shadeNumber + 100).toString() as ColorShade);
};

export const getPrevShade = (
	currentShade: ColorShade,
	fallbackShade: ColorShade = "100",
): ColorShade => {
	const shadeNumber = Number.parseInt(currentShade);
	return shadeNumber === 50
		? fallbackShade || "100"
		: shadeNumber === 100
			? "50"
			: shadeNumber === 950
				? "900"
				: ((shadeNumber - 100).toString() as ColorShade);
};
