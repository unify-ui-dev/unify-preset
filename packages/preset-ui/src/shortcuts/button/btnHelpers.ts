import type { Appearance, formOutline } from "@/types";
import { getConfigValue, getShortcutsIfNotSame } from "@/utils";

import type {
	BtnGhostOrSoft,
	BtnWhite,
	GradientBtn,
} from "./types";
import { getBackgroundOpacity } from "../shortcut_helper";

export const genBtnVariantWhite = ({
	solid,
	appearance,
}: { solid: BtnWhite|undefined; appearance: Appearance }) => {
	if (!solid) {
		return '';
	}
	const { bg, hoverBg, pressBg, textColor, dark } = solid;
	const btnvariantLight = `${appearance === "light" || appearance === "both"
		? `b b-gray-200/60 bg-${bg} hover-bg-${hoverBg} active-bg-${pressBg} text-${textColor} focus-visible-outline-${hoverBg}`
		: ""
		} `;

	const variantDark = dark ? `${appearance === "dark"
		? `b b-gray-800/60 bg-${dark.bg} hover-bg-${dark.hoverBg} active-bg-${dark.pressBg} text-${dark.textColor} focus-visible-outline-${dark.hoverBg}`
		: appearance === "both"
			? `dark-b-gray-800/60 dark-bg-${dark.bg} dark-hover-bg-${dark.hoverBg} dark-active-bg-${dark.pressBg} dark-text-${dark.textColor} dark-focus-visible-outline-${dark.hoverBg}`
			: ""
		}` : '';
	return `${btnvariantLight} ${variantDark}`;
};

export const genBtnVariantOutline = ({
	color,
	appearance,
	outlineShades,
}: { color: string; appearance: Appearance; outlineShades: formOutline }) => {
	const { borderSize, textShade, borderShade, hoverBorderShade, hoverTextShade, dark } = outlineShades;

	const borderSize_ = borderSize ? borderSize : 1;

	if (color === "neutral")
		return `${genBtnVariantOutlineNeutral({
			appearance,
			borderSize: borderSize_ ,
		})}`;

	const variantLight = `${appearance === "light" || appearance === "both"
		? `bg-transparent hover-bg-${color}-${textShade}/10 border-${color}-${borderShade} hover-border-${color}-${hoverBorderShade} text-${color}-${textShade} hover-text-${color}-${hoverTextShade} focus-visible-outline-${color}-${hoverBorderShade}`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `bg-transparent hover-bg-${color}-${dark?.textShade}/10 border-${color}-${dark?.borderShade} hover-border-${color}-${dark?.hoverBorderShade} text-${color}-${dark?.textShade} hover-text-${color}-${dark?.hoverTextShade} focus-visible-outline-${color}-${dark?.hoverBorderShade}`
		: appearance === "both"
			? `
            ${getShortcutsIfNotSame({
				val1: `${borderShade}`,
				val2: `${dark?.borderShade}`,
				shortcuts: `dark-border-${color}-${dark?.borderShade}`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${textShade}`,
				val2: `${dark?.textShade}`,
				shortcuts: `dark-text-${color}-${dark?.textShade} dark-hover-bg-${color}-${dark?.textShade}/10`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverBorderShade}`,
				val2: `${dark?.hoverBorderShade}`,
				shortcuts: `dark-hover-border-${color}-${dark?.hoverBorderShade} dark-focus-visible-outline-${color}-${dark?.hoverBorderShade}`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverTextShade}`,
				val2: `${dark?.hoverTextShade}`,
				shortcuts: `dark-hover-text-${color}-${dark?.hoverTextShade}`,
			})}`
			: ""
		}` : '';
	return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`;
};

export const genBtnVariantSoftOrGost = ({
	color,
	appearance,
	ghostOrSoft,
	variant,
}: {
	color: string;
	appearance: Appearance;
	ghostOrSoft: BtnGhostOrSoft;
	variant: "soft" | "ghost";
}) => {
	if (color === "neutral") {
		return `${genNeutralSoftGhost({ variant, appearance })}`;
	}

	const { bgShade, bgOpacity, hoverBgOpacity, hoverBgShade, textShade, pressBgShade, pressOpacity, dark } = ghostOrSoft;
	const variantLight = `${appearance === "light" || appearance === "both"
		? `${variant === "ghost" ? "" : `bg-${color}-${bgShade}`}${getBackgroundOpacity(bgOpacity)} 
		hover-bg-${color}-${hoverBgShade}/${getConfigValue(hoverBgOpacity)} active-bg-${color}-${pressBgShade}/${getConfigValue(pressOpacity)} text-${color}-${textShade || 600
		} focus-visible-outline-${color}-${textShade || 600}`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `${variant === "ghost" ? "" : `bg-${color}-${dark?.bgShade}`
		}${getBackgroundOpacity(dark?.bgOpacity)} hover-bg-${color}-${dark?.hoverBgShade
		}/${getConfigValue(dark?.hoverBgOpacity)} active-bg-${color}-${dark?.pressBgShade
		}/${getConfigValue(dark?.pressOpacity)} text-${color}-${dark?.textShade || 500
		} focus-visible-outline-${color}-${dark?.textShade || 500}`
		: appearance === "both"
			? `${variant === "ghost" ? "" : `dark-bg-${color}-${dark?.bgShade}`
			}${getBackgroundOpacity(dark?.bgOpacity)} dark-hover-bg-${color}-${dark?.hoverBgShade
			}/${getConfigValue(dark?.hoverBgOpacity)} dark-active-bg-${color}-${dark?.pressBgShade
			}/${getConfigValue(dark?.pressOpacity)} dark-text-${color}-${dark?.textShade || 500
			} dark-focus-visible-outline-${color}-${dark?.textShade || 500}`
			: ""
		}` : '';
	return `${variantLight} ${variantDark}`;
};

export const genBtnVariantSoft = ({
	color,
	appearance,
	ghostOrSoft,
}: { color: string; appearance: Appearance; ghostOrSoft: BtnGhostOrSoft }) => {
	return `${genBtnVariantSoftOrGost({
		variant: "soft",
		color,
		appearance,
		ghostOrSoft,
	})}`;
};

export const genBtnVariantGhost = ({
	color,
	appearance,
	ghost: ghostOrSoft,
}: { color: string; appearance: Appearance; ghost: BtnGhostOrSoft }) => {
	return `${genBtnVariantSoftOrGost({
		variant: "ghost",
		color,
		appearance,
		ghostOrSoft,
	})}`;
};


const genBtnVariantOutlineNeutral = ({
	appearance,
	borderSize,
}: { appearance: Appearance; borderSize?: string | number }) => {
	const borderSize_ = borderSize ? borderSize : 1;
	const variantLight = `${appearance === "light" || appearance === "both"
		? "bg-transparent border-gray-800 hover-bg-gray-100/40 active-bg-gray-100/50 text-gray-800 hover-text-gray-900"
		: ""
		}`;

	const variantDark = `${appearance === "dark"
		? "bg-transparent border-white hover-bg-gray-900/30 text-white"
		: appearance === "both"
			? "dark-border-white dark-hover-bg-gray-900/30 dark-text-white dark-hover-text-white"
			: ""
		}`;
	return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`;
};

const genNeutralSoftGhost = ({
	appearance,
	variant,
}: { variant: "soft" | "ghost"; appearance: Appearance }) => {
	return variant === "soft"
		? `${genBtnNeutralSoft(appearance)}`
		: `${genBtnNeutralGhost(appearance)}`;
};

const genBtnNeutralGhost = (appearance: Appearance) => {
	const lightV = `${appearance === "light" || appearance === "both"
		? "hover-bg-gray-900/90 hover-text-white active-bg-gray-900/80 text-gray-900"
		: ""
		}`;
	const darkV = `${appearance === "dark"
		? "hover-bg-white/90 active-bg-white/60 text-white hover-text-gray-900"
		: appearance === "both"
			? "dark-hover-bg-white/90 dark-active-bg-white/60 dark-text-white dark-hover-text-gray-900"
			: ""
		}`;

	return `bg-transparent ${lightV} ${darkV}`;
};

const genBtnNeutralSoft = (appearance: Appearance) => {
	const lightV = `${appearance === "light" || appearance === "both"
		? "bg-gray-50 hover-bg-gray-950 hover-text-white active-bg-gray-900 text-gray-900"
		: ""
		}`;
	const darkV = `${appearance === "dark"
		? "bg-white/4 hover-bg-white active-bg-gray-50 text-white hover-text-gray-900"
		: appearance === "both"
			? "dark-bg-white/4 dark-hover-bg-white dark-active-bg-gray-50 dark-text-white dark-hover-text-gray-900"
			: ""
		}`;
	return `${lightV} ${darkV}`;
};

export const genBtnVariantSolidNeutralGradient = ({
	appearance,
}: { appearance: Appearance }) => {
	const btnvariantLight = `${appearance === "light" || appearance === "both"
		? "b b-gray-700 bg-gradient-to-bl from-gray-900 to-gray-700 text-white hover-from-gray-950 hover-to-gray-800  focus-visible-outline-gray-900"
		: ""
		} `;

	const variantDark = `${appearance === "dark"
		? "b b-gray-300 bg-gradient-to-bl from-gray-100 to-white text-gray-950 hover-from-gray-200 hover-to-gray-50 focus-visible-outline-gray-50"
		: appearance === "both"
			? "dark-b-gray-300 dark-from-gray-100 dark-to-white dark-text-gray-950 dark-hover-from-gray-200 dark-hover-to-gray-50 focus-visible-outline-gray-50"
			: ""
		}`;
	return `active-opacity-90 ${btnvariantLight} ${variantDark}`;
};

export const genBtnVariantSolidGradient = ({
	color,
	gradientShades: gradient,
	appearance
}: {
	color: string;
	gradientShades: GradientBtn;
	appearance: Appearance;
}) => {
	if (color === "neutral")
		return `${genBtnVariantSolidNeutralGradient({ appearance })}`;
	const { bgShadeFrom, borderShade, hoverShadeFrom, hoverShadeTo, bgShadeTo, dark, useLightForBoth } = gradient;

	const btnvariantLight = `${appearance === "light" || appearance === "both"
		? `b-${color}-${borderShade} from-${color}-${bgShadeFrom} to-${color}-${bgShadeTo} hover-from-${color}-${hoverShadeFrom} hover-to-${color}-${hoverShadeTo} focus-b-transparent focus-visible-outline-${color}-${bgShadeFrom}`
		: ""
		} `;

	const variantDark = `${appearance === "dark"
		? `b-${color}-${dark?.borderShade} from-${color}-${dark?.bgShadeFrom} to-${color}-${dark?.bgShadeTo} hover-from-${color}-${dark?.hoverShadeFrom} hover-to-${color}-${dark?.hoverShadeTo} focus-b-transparent focus-visible-outline-${color}-${dark?.bgShadeFrom}`
		: appearance === "both"
			? `${getShortcutsIfNotSame({
				val1: `${borderShade}`,
				val2: `${dark?.borderShade}`,
				shortcuts: `dark-b-${color}-${dark?.borderShade}`,
			})} 
            ${getShortcutsIfNotSame({
				val1: `${bgShadeFrom}`,
				val2: `${dark?.bgShadeFrom}`,
				shortcuts: `dark-from-${color}-${dark?.bgShadeFrom}  dark-focus-visible-outline-${color}-${dark?.bgShadeFrom}`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${bgShadeTo}`,
				val2: `${dark?.bgShadeTo}`,
				shortcuts: `dark-to-${color}-${dark?.bgShadeTo}`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverShadeFrom}`,
				val2: `${dark?.hoverShadeFrom}`,
				shortcuts: `dark-hover-from-${color}-${dark?.hoverShadeFrom}`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverShadeTo}`,
				val2: `${dark?.hoverShadeTo}`,
				shortcuts: `dark-hover-to-${color}-${dark?.hoverShadeTo}`,
			})}
             `
			: ""
		}`;
	return `bg-gradient-to-b b active-opacity-90 ${btnvariantLight} ${useLightForBoth ? "" : variantDark
		}`;
};
