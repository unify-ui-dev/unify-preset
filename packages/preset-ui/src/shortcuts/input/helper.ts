import type { Appearance, ColorShade, SolidShade } from "@/types";
import { getShortcutsIfNotSame } from "@/utils";
import { genTextColor } from "../helpers";

export const getPlaceHolder = ({
	appearance,
	placeHolder,
}: {
	appearance: Appearance;
	placeHolder?: {
		light?: ColorShade;
		dark?: ColorShade;
	};
}) => {
	const lightV = `${
		appearance === "light" || appearance === "both"
			? `placeholder-text-gray-${placeHolder?.light}`
			: ""
	}`;

	const darkV = `${
		appearance === "dark"
			? `placeholder-text-gray-${placeHolder?.dark}`
			: appearance === "both"
				? `dark-placeholder-text-gray-${placeHolder?.dark}`
				: ""
	}`;
	return `${lightV} ${darkV}`;
};

export const getTextColor = ({
	appearance,
	textColor,
}: {
	appearance: Appearance;
	textColor?: { light?: ColorShade; dark?: ColorShade };
}) => {
	const textColor_ = genTextColor(appearance, {
		light: `gray-${textColor?.light}`,
		dark: `gray-${textColor?.dark}`,
	});
	return `${textColor_}`;
};

export const getInputBorder = ({
	appearance,
	shades,
}: {
	appearance: Appearance;
	shades: { light: ColorShade; dark: ColorShade };
}) => {
	const { light, dark } = shades;
	const lightUtilities = `
        ${
					appearance === "light" || appearance === "both"
						? `border-gray-${light} `
						: ""
				}`;

	const darkUtilities = `
        ${
					appearance === "dark"
						? `outline-gray-${dark}`
						: appearance === "both"
							? `
            ${getShortcutsIfNotSame({
							val1: light,
							val2: dark,
							shortcuts: `dark-border-gray-${dark}`,
						})}`
							: ""
				}`;

	return `${lightUtilities} ${darkUtilities}`;
};

export const getInputGrayVariant = ({
	appearance,
	shades,
}: { appearance: Appearance; shades: SolidShade }) => {
	const { light, dark } = shades;
	const lightUtilities = `
        ${
					appearance === "light" || appearance === "both"
						? `bg-gray-${light?.bgShade} text-gray-${light?.textShade}`
						: ""
				}`;

	const darkUtilities = `
        ${
					appearance === "dark"
						? `bg-gray-${dark?.bgShade} text-gray-${dark?.textShade}`
						: appearance === "both"
							? `dark-bg-gray-${dark?.bgShade} dark-text-gray-${dark?.textShade}`
							: ""
				}`;

	return `${lightUtilities} ${darkUtilities}`;
};

export const getInputOutlineFocus = ({
	color,
	appearance,
	shades,
}: {
	color: string;
	appearance: Appearance;
	shades?: { light: string; dark: string };
}) => {
	const lightVariant = `${
		appearance === "light" || appearance === "both"
			? `focus-b-${color}-${shades?.light}`
			: ""
	}`;
	const darkVariant = `${
		appearance === "dark"
			? `focus-b-${color}-${shades?.dark}`
			: appearance === "both"
				? `
        ${getShortcutsIfNotSame({
					val1: `${color}-${shades?.light}`,
					val2: `${color}-${shades?.dark}`,
					shortcuts: `dark-focus-b-${color}-${shades?.dark}`,
				})}`
				: ""
	}`;

	return `focus-outline-offset-0 focus-outline-transparent ${lightVariant} ${darkVariant}`;
};
