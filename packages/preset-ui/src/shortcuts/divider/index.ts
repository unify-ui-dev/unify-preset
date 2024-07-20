import type { Appearance } from "@/types";
import { divideGray, dividerShade } from "./const";
import { getDivider } from "./helper";
import type { Divider } from "./types";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getDividerShortcuts = ({
	divider,
	appearance: appearance_,
}: { divider?: Divider; appearance?: Appearance | undefined }) => {
	const appearance = appearance_ || "both";
	const shades = Object.assign({}, dividerShade, divider?.shades);
	const grayShades = Object.assign({}, divideGray, divider?.grayShades);
	const dividers = {
		"divider-hr-2": "border-2",
		"divider-hr-3": "border-3",
		"divider-hr-4": "border-4",
		"divider-hr-6": "border-6",
		"divider-hr-8": "border-8",

		"divider-custom":
			"relative before-absolute before-content-empty before-inset-x-0 flex items-center",
		"divider-custom-1": "before-h-px ",
		"divider-custom-2": "before-h-2px",
		"divider-custom-3": "before-h-3px",
		"divider-custom-4": "before-h-4px",
		"divider-custom-6": "before-h-6px",
		"divider-custom-8": "before-h-8px",
	};
	const dynamicDividers: Shortcut[] = [
		[
			/^divider-hr-border(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				const shades_ = color === "gray" ? grayShades : shades;
				if (isValidColor(color, theme))
					return `${getDivider({
						color,
						appearance,
						shades: shades_,
						prefix: "border",
					})}`;
			},
		],
		[
			/^divider-custom-bg(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				const shades_ = color === "gray" ? grayShades : shades;
				if (isValidColor(color, theme))
					return `${getDivider({
						color,
						appearance,
						shades: shades_,
						prefix: "before-bg",
					})}`;
			},
		],
	];
	return [dividers, ...dynamicDividers];
};

export { getDividerShortcuts, type Divider };
