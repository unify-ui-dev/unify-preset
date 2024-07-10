import { parseColor } from "@unocss/preset-mini/utils";
import type { Theme } from "@unocss/preset-uno";

const extractRgbaIfContainsAlphaValue = (input: string | undefined) => {
	const regex = /var\((.*?)\)/;
	const match = input?.match(regex);
	return match ? match[1] : null;
};

export const getVariableBgValue = (body: string, theme: Theme) => {
	const color = parseColor(body, theme);
	const extractedColor = extractRgbaIfContainsAlphaValue(color?.color);
	if (color?.cssColor?.type === "rgb" && color.cssColor.components)
		return `rgb(${color.cssColor.components.join(",")})`;
	if (
		color?.cssColor?.type === "rgba" &&
		color.cssColor.components &&
		extractedColor
	)
		return `var(${extractedColor})`;
	return color?.color;
};