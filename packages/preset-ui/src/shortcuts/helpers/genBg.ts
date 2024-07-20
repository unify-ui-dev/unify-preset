import type { Appearance, BorderPrefix, OutlineVariant, Soft, Subtle, ColorShade, BaseColor, } from "@/types";
import { getConfigValue, getShortcutsIfNotSame } from "@/utils";

import { helperDefaultValues } from "./helper-const";
import { getBackgroundOpacity } from "../shortcut_helper";

export const genUiBackground = ({ color, appearance, colorShades }: { colorShades: BaseColor; color: string; appearance: Appearance }) => {
	if (color === "neutral") {
		return `${genVariantSolidNeutral({ appearance })}`;
	}
	const ignoreText = colorShades.ignoreTextColor
	const { shade: shade, dark, textColor } = colorShades;
	const textLight = ignoreText ? '' : textColor && appearance === "light" || appearance === "both" ? `text-${textColor}` : ''

	const textDark = ignoreText ? '' : dark?.textColor && appearance === 'dark' ? `text-${dark.textColor}` : ''
	const textBoth = textColor !== dark?.textColor ? `${ignoreText ? '' : dark?.textColor && appearance === 'both' ? `dark-text-${dark.textColor}` : ''}` : ''
	const variantLight = `${appearance === "light" || appearance === "both" ? `bg-${color}-${shade} ${textLight.includes('undefined') ? '' : textLight}` : ""} `;

	const variantDark = dark ? `${appearance === "dark"
		? `bg-${color}-${dark.shade} ${textDark.includes('undefined') ? '' : textDark}` : appearance === "both" ? `${textBoth.includes('undefined') ? '' : textBoth} ${getShortcutsIfNotSame({
			val1: `${shade}`,
			val2: `${dark.shade}`,
			shortcuts: `dark-bg-${color}-${dark.shade}`
		})}` : ""}` : '';
	return `${variantLight} ${variantDark}`;
};

const genOutlineNeutral = ({ appearance, prefix = "border", }: { prefix?: BorderPrefix, appearance: Appearance; }) => {
	const variantLight = `${appearance === "light" || appearance === "both" ? `${prefix}-gray-900` : ""}`;

	const variantDark = `${appearance === "dark"
		? `${prefix}-white`
		: appearance === "both"
			? `dark-${prefix}-white`
			: ""
		}`;
	return `${variantLight} ${variantDark}`;
};
export const genOutline = ({ color, appearance, border, prefix = "border", }: { prefix?: BorderPrefix; color: string; appearance: Appearance; border: { shade: ColorShade, dark?: { shade: ColorShade } }; }) => {
	if (color === "neutral")
		return `${genOutlineNeutral({ appearance, prefix })}`;
	const { shade: shade, dark } = border

	const variantLight = `${appearance === "light" || appearance === "both" ? `${prefix}-${color}-${shade}` : ""}`;

	const variantDark = dark ? `${appearance === "dark"
		? `${prefix}-${color}-${dark.shade}`
		: appearance === "both"
			? `${getShortcutsIfNotSame({
				val1: `${shade}`,
				val2: `${dark.shade}`,
				shortcuts: `dark-${prefix}-${color}-${dark.shade}`,
			})}`
			: ""
		}` : "";
	return `${variantLight} ${variantDark}`;
};

export const genVariantOutline = ({ color, appearance, outlineColor, }: { color: string; appearance: Appearance; outlineColor: OutlineVariant; }) => {
	const { borderSize, shade, textShade, dark } = outlineColor;
	const borderSize_ = borderSize ? borderSize : 1;
	if (color === "neutral")
		return `${genVariantOutlineNeutral({
			appearance,
			borderSize: borderSize_,
		})}`;

	const variantLight = `${appearance === "light" || appearance === "both"
		? `text-${color}-${textShade}`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `text-${color}-${dark?.textShade}`
		: appearance === "both"
			? `${getShortcutsIfNotSame({
				val1: `${textShade}`,
				val2: `${dark?.textShade}`,
				shortcuts: `dark-text-${color}-${dark?.textShade}`,
			})}`
			: ""
		}` : '';
	const getBorder = {
		light: shade,
		dark: dark?.shade,
	};
	const getBorderValue = genOutline({
		color,
		appearance,
		prefix: "border",
		border: { shade: getBorder.light as ColorShade, dark: { shade: getBorder?.dark as ColorShade } }
	});

	return `b ${getBorderValue}  ${variantLight} ${variantDark}`;
};

export const genBorderColor = ({ appearance, color, border, }: { appearance: Appearance; color: string, border: { shade: ColorShade; dark?: ColorShade }; }) => {
	const { shade, dark } = border;
	const lightUtilities = `
        ${appearance === "light" || appearance === "both"
			? `border-${color}-${shade} `
			: ""
		}`;

	const darkUtilities = dark ? `
        ${appearance === "dark" ? `border-${color}-${dark}`
			: appearance === "both" ? ` ${getShortcutsIfNotSame({
				val1: shade,
				val2: dark,
				shortcuts: `dark-border-${color}-${dark}`,
			})}` : ""}` : '';

	return `${lightUtilities} ${darkUtilities}`;
};

export const genVariantSoft = ({ color: color_, soft, appearance, }: { color: string; appearance: Appearance; soft: Soft; }) => {
	const color = color_ === "neutral" ? "gray" : color_;
	const { bgOpacity, bgShade, textShade, dark } = soft;

	const variantLight = `${appearance === "light" || appearance === "both"
		? `bg-${color}-${bgShade}${getBackgroundOpacity(
			bgOpacity,
		)}  text-${color}-${textShade}`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `bg-${color}-${dark.bgShade}${getBackgroundOpacity(
			dark.bgOpacity,
		)} text-${color}-${dark.textShade}`
		: appearance === "both"
			? `${getShortcutsIfNotSame({
				val1: `${textShade}`,
				val2: `${dark.textShade}`,
				shortcuts: `dark-text-${color}-${dark.textShade}`,
			})}
            dark-bg-${color}-${dark.bgShade}${getBackgroundOpacity(
				dark.bgOpacity,
			)}`
			: ""
		}` : '';
	return `${variantLight} ${variantDark}`;
};

export const genVariantSubtle = ({ color: color_, appearance, subtle, }: { color: string; appearance: Appearance; subtle: Subtle; }) => {
	const color = color_ === "neutral" ? "gray" : color_;
	if (color_ === "neutral")
		return `${genVariantSubtleNeutral({ appearance, subtle })}`;
	const { borderWidth, bgShade, textShade, borderShade, borderOpacity, bgOpacity, dark } = subtle;

	const variantLight = `${appearance === "light" || appearance === "both"
		? `border-${color}-${borderShade}/${getConfigValue(
			borderOpacity,
		)}`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `border-${color}-${dark?.borderShade}/${getConfigValue(
			dark?.borderOpacity,
		)}`
		: appearance === "both"
			? `
            ${getShortcutsIfNotSame({
				val1: `${borderShade}/${getConfigValue(borderOpacity)}`,
				val2: `${dark.borderShade}/${getConfigValue(dark.borderOpacity)}`,
				shortcuts: `dark-border-${color}-${dark.borderShade}/${getConfigValue(dark.borderOpacity)}`
			})}`
			: ""
		}` : "";
	return `${genVariantSoft({
		color,
		appearance,
		soft: { bgOpacity: bgOpacity as number, textShade: textShade as ColorShade, bgShade: bgShade as ColorShade, dark: dark }
	})}  border-${getConfigValue(borderWidth)} ${variantLight} ${variantDark}`;
};

export const genVariantSolidNeutral = ({ appearance, }: { appearance: Appearance }) => {
	const variantLight = `${appearance === "light" || appearance === "both" ? "bg-gray-900" : ""
		} `;

	const variantDark = `${appearance === "dark"
		? "bg-white"
		: appearance === "both"
			? "dark-bg-white"
			: ""
		}`;
	return `${variantLight} ${variantDark}`;
};

export const genVariantWhiteBlack = ({ appearance, colors, }: { appearance: Appearance; colors: { white: string; black: string } }) => {
	const { white, black } = colors;
	const variantLight = `${appearance === "light" || appearance === "both" ? `bg-${white}` : ""
		} `;

	const variantDark = `${appearance === "dark"
		? `bg-${black}`
		: appearance === "both"
			? `dark-bg-${black}`
			: ""
		}`;
	return `${variantLight} ${variantDark}`;
};

export const genVariantOutlineNeutral = ({ appearance, borderSize, }: { appearance: Appearance; borderSize: string | number }) => {
	const borderSize_ = borderSize ? borderSize : 1;
	const variantLight = `${appearance === "light" || appearance === "both"
		? "border-gray-800 text-gray-800"
		: ""
		}`;

	const variantDark = `${appearance === "dark"
		? "border-white  text-white"
		: appearance === "both"
			? "dark-border-white dark-text-white"
			: ""
		}`;
	return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`;
};

export const genNeutralSoftGhost = (appearance: Appearance, variant: "soft" | "ghost",) => {
	return variant === "ghost"
		? `${genNeutralGhost(appearance)}`
		: `${genNeutralSoft(appearance)}`;
};

const genNeutralGhost = (appearance: Appearance) => {
	const lightV = `${appearance === "light" || appearance === "both" ? "text-gray-900" : ""
		}`;
	const darkV = `${appearance === "dark"
		? "text-white"
		: appearance === "both"
			? "dark-text-white"
			: ""
		}`;

	return `${lightV} ${darkV}`;
};

const genNeutralSoft = (appearance: Appearance) => {
	const lightV = `${appearance === "light" || appearance === "both"
		? "bg-gray-950/10 text-gray-900"
		: ""
		}`;
	const darkV = `${appearance === "dark"
		? "bg-gray-50/20 text-white"
		: appearance === "both"
			? "dark-bg-gray-50/20 dark-text-gray-950"
			: ""
		}`;

	return `${lightV} ${darkV}`;
};

export const genVariantSubtleNeutral = ({
	appearance,
	subtle = helperDefaultValues.defaultSubtle,
}: { appearance: Appearance; subtle: Subtle }) => {
	const { borderWidth } = subtle;
	const variantLight = `${appearance === "light" || appearance === "both"
		? "border-gray-900/70 text-gray-900"
		: ""
		}`;

	const variantDark = `${appearance === "dark"
		? "border-gray-800/60 text-white"
		: appearance === "both"
			? "dark-border-gray-800/60 dark-text-white"
			: ""
		}`;
	return `${genNeutralSoft(appearance)} border-${getConfigValue(
		borderWidth,
	)} ${variantLight} ${variantDark}`;
};

