import { parseColor } from "@unocss/preset-mini/utils";
import type { Theme } from "@unocss/preset-uno";

import {
	barShades,
	progress_MeterHeightSize,
	radius,
	rangeSizes,
} from "./const";
import type { BarShade, variantSize } from "./types";

export const getRangeSize = (val: variantSize) => {
	return rangeSizes[val];
};
export const getSizeProgress_Meter = (val: string) => {
	return progress_MeterHeightSize[val];
};

export const getRadius = (val: string) => {
	return radius[val];
};

const extractRgbaIfContainsAlphaValue = (input: string | undefined) => {
	const regex = /var\((.*?)\)/;
	const match = input?.match(regex);
	return match ? match[1] : null;
};

export const getVariableBgValue = (body: string, theme: Theme, withAlpha?: boolean) => {
	const color = parseColor(body, theme);
	const extractedColor = extractRgbaIfContainsAlphaValue(color?.color);

	if (color?.cssColor?.type === "rgb" && color.cssColor.components && withAlpha)
		return `${color.cssColor.components.join(",")}`
	if(color?.cssColor?.type === 'rgba' && color.cssColor.components && withAlpha)
		return `${color.cssColor.components.join(",")}`
	if (color?.cssColor?.type === "rgb" && color.cssColor.components)
		return `rgb(${color.cssColor.components.join(",")})`;
	if (
		color?.cssColor?.type === "rgba" &&
		color.cssColor.components &&
		extractedColor
	)
		return `rgb(${color.cssColor.components.join(",")})`;
	return color?.color;
};



export const getBarShades = (val: BarShade) => {
	return barShades[val];
};

export const extractColorAndShades = (text: string) => {
	const parts = text.split("-");
	return { colorName: parts[0], shade: parts[1] };
};
