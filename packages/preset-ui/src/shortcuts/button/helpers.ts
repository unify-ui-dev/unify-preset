import type { Appearance, formOutline } from "@/types";
import { getConfigValue, getShortcutsIfNotSame } from "@/utils";
import { btnCongig } from "./const";
import type {
	BtnGhostOrSoft,
	SolidBtnShade,
	BtnWhite,
	SolidGradientBtn,
} from "./types";
import { getBackgroundOpacity } from "../shortcut_helper";

export const genBtnVariantWhite = ({
	solid,
	appearance,
}: { solid: BtnWhite; appearance: Appearance }) => {
	const { light, dark } = solid;
	const btnvariantLight = `${
		appearance === "light" || appearance === "both"
			? `b b-gray-200/60 bg-${light.bg} hover-bg-${light.hoverBg} active-bg-${light.pressBg} text-${light.textColor} focus-visible-outline-${light.hoverBg}`
			: ""
	} `;

	const variantDark = `${
		appearance === "dark"
			? `b b-gray-800/60 bg-${dark.bg} hover-bg-${dark.hoverBg} active-bg-${dark.pressBg} text-${dark.textColor} focus-visible-outline-${dark.hoverBg}`
			: appearance === "both"
				? `dark-b-gray-800/60 dark-bg-${dark.bg} dark-hover-bg-${dark.hoverBg} dark-active-bg-${dark.pressBg} dark-text-${dark.textColor} dark-focus-visible-outline-${dark.hoverBg}`
				: ""
	}`;
	return `${btnvariantLight} ${variantDark}`;
};

export const genBtnVariantSolid = ({
	color,
	shades,
	appearance,
	removeDefaultTextColor,
}: {
	color: string;
	shades: SolidBtnShade;
	appearance: Appearance;
	removeDefaultTextColor?: boolean;
}) => {
	if (color === "neutral")
		return `${genBtnVariantSolidNeutral({ appearance })}`;
	const { light, dark, useLightForBoth } = shades;
	const bgDark = getShortcutsIfNotSame({
		val1: `${color}-${light?.bgShade}`,
		val2: `${color}-${dark?.bgShade}`,
		shortcuts: `dark-bg-${color}-${dark?.bgShade}`,
	});
	const bgHover = getShortcutsIfNotSame({
		val1: `${color}-${light?.hoverBgShade}`,
		val2: `${color}-${dark?.hoverBgShade}`,
		shortcuts: `dark-hover-bg-${color}-${dark?.hoverBgShade} dark-focus-visible-outline-${color}-${dark?.hoverBgShade}`,
	});
	const activeBg = getShortcutsIfNotSame({
		val1: `${color}-${light?.pressBgShade}`,
		val2: `${color}-${dark?.pressBgShade}`,
		shortcuts: ` dark-active-bg-${color}-${dark?.pressBgShade}`,
	});

	const shadowLight = `unify-internal-btn-solid-base-${color}-${light?.bgShade} hover-unify-internal-btn-solid-base-${color}-${light?.hoverBgShade}`;
	const shadowDark = `unify-internal-btn-solid-base-${color}-${dark?.bgShade} hover-unify-internal-btn-solid-base-${color}-${dark?.hoverBgShade}`;
	const darkBoth = `
    ${getShortcutsIfNotSame({
			val1: `${color}-${light?.bgShade}`,
			val2: `${color}-${dark?.bgShade}`,
			shortcuts: `dark-unify-internal-btn-solid-base-${color}-${dark?.bgShade}`,
		})}
    ${getShortcutsIfNotSame({
			val1: `${color}-${light?.bgShade}`,
			val2: `${color}-${dark?.bgShade}`,
			shortcuts: `dark-hover-unify-internal-btn-solid-base-${color}-${dark?.hoverBgShade}`,
		})}
    `;

	const btnvariantLight = `${
		appearance === "light" || appearance === "both"
			? `${shadowLight} bg-${color}-${light?.bgShade} hover-bg-${color}-${light?.hoverBgShade} active-bg-${color}-${light?.pressBgShade} focus-visible-outline-${color}-${light?.hoverBgShade}`
			: ""
	} `;

	const foreColor = `${removeDefaultTextColor ? "" : "text-white"}`;
	const variantDark = `${
		appearance === "dark"
			? `${shadowDark} bg-${color}-${dark?.bgShade} hover-bg-${color}-${dark?.hoverBgShade} active-bg-${color}-${dark?.pressBgShade} focus-visible-outline-${color}-${dark?.hoverBgShade}`
			: appearance === "both"
				? `${bgDark} ${bgHover} ${activeBg} ${darkBoth}`
				: ""
	}`;
	return `${btnvariantLight} ${foreColor} ${
		useLightForBoth ? "" : variantDark
	}`;
};

export const genBtnVariantOutline = ({
	color,
	appearance,
	outlineShades,
}: { color: string; appearance: Appearance; outlineShades: formOutline }) => {
	const { borderSize, light, dark, useLightForBoth } = outlineShades;

	const borderSize_ = borderSize ? borderSize : 1;

	if (color === "neutral")
		return `${genBtnVariantOutlineNeutral({
			appearance,
			outlineBtn: { borderSize: borderSize_ },
		})}`;

	const variantLight = `${
		appearance === "light" || appearance === "both"
			? `bg-transparent hover-bg-${color}-${light?.textShade}/10 border-${color}-${light?.borderShade} hover-border-${color}-${light?.hoverBorderShade} text-${color}-${light?.textShade} hover-text-${color}-${light?.hoverTextShade} focus-visible-outline-${color}-${light?.hoverBorderShade}`
			: ""
	}`;

	const variantDark = `${
		appearance === "dark"
			? `bg-transparent hover-bg-${color}-${dark?.textShade}/10 border-${color}-${dark?.borderShade} hover-border-${color}-${dark?.hoverBorderShade} text-${color}-${dark?.textShade} hover-text-${color}-${dark?.hoverTextShade} focus-visible-outline-${color}-${dark?.hoverBorderShade}`
			: appearance === "both"
				? `
            ${getShortcutsIfNotSame({
							val1: `${light?.borderShade}`,
							val2: `${dark?.borderShade}`,
							shortcuts: `dark-border-${color}-${dark?.borderShade}`,
						})}
            ${getShortcutsIfNotSame({
							val1: `${light?.textShade}`,
							val2: `${dark?.textShade}`,
							shortcuts: `dark-text-${color}-${dark?.textShade} dark-hover-bg-${color}-${dark?.textShade}/10`,
						})}
            ${getShortcutsIfNotSame({
							val1: `${light?.hoverBorderShade}`,
							val2: `${dark?.hoverBorderShade}`,
							shortcuts: `dark-hover-border-${color}-${dark?.hoverBorderShade} dark-focus-visible-outline-${color}-${dark?.hoverBorderShade}`,
						})}
            ${getShortcutsIfNotSame({
							val1: `${light?.hoverTextShade}`,
							val2: `${dark?.hoverTextShade}`,
							shortcuts: `dark-hover-text-${color}-${dark?.hoverTextShade}`,
						})}`
				: ""
	}`;
	return `border-${getConfigValue(borderSize_)} ${variantLight} ${
		useLightForBoth ? "" : variantDark
	}`;
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

	const { light, dark } = ghostOrSoft;
	const variantLight = `${
		appearance === "light" || appearance === "both"
			? `${
					variant === "ghost" ? "" : `bg-${color}-${light?.bgShade}`
				}${getBackgroundOpacity(light?.bgOpacity)} hover-bg-${color}-${
					light?.hoverBgShade
				}/${getConfigValue(light?.hoverBgOpacity)} active-bg-${color}-${
					light?.pressBgShade
				}/${getConfigValue(light?.pressOpacity)} text-${color}-${
					light?.textShade || 600
				} focus-visible-outline-${color}-${light?.textShade || 600}`
			: ""
	}`;

	const variantDark = `${
		appearance === "dark"
			? `${
					variant === "ghost" ? "" : `bg-${color}-${dark?.bgShade}`
				}${getBackgroundOpacity(dark?.bgOpacity)} hover-bg-${color}-${
					dark?.hoverBgShade
				}/${getConfigValue(dark?.hoverBgOpacity)} active-bg-${color}-${
					dark?.pressBgShade
				}/${getConfigValue(dark?.pressOpacity)} text-${color}-${
					dark?.textShade || 500
				} focus-visible-outline-${color}-${dark?.textShade || 500}`
			: appearance === "both"
				? `${
						variant === "ghost" ? "" : `dark-bg-${color}-${dark?.bgShade}`
					}${getBackgroundOpacity(dark?.bgOpacity)} dark-hover-bg-${color}-${
						dark?.hoverBgShade
					}/${getConfigValue(dark?.hoverBgOpacity)} dark-active-bg-${color}-${
						dark?.pressBgShade
					}/${getConfigValue(dark?.pressOpacity)} dark-text-${color}-${
						dark?.textShade || 500
					} dark-focus-visible-outline-${color}-${dark?.textShade || 500}`
				: ""
	}`;
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

export const genBtnVariantSolidNeutral = ({
	appearance,
}: { appearance: Appearance }) => {
	const shadowLight = "unify-internal-btn-solid-base-gray-800";
	const shadowDark = "unify-internal-btn-solid-base-gray-100";
	const darkBoth =
		"dark-unify-internal-btn-solid-base-gray-100 hover-dark-unify-internal-btn-solid-base-gray-200";

	const btnvariantLight = `${
		appearance === "light" || appearance === "both"
			? `bg-gray-900 ${shadowLight} hover-bg-gray-950 active-bg-gray-700 text-white focus-visible-outline-gray-900`
			: ""
	} `;

	const variantDark = `${
		appearance === "dark"
			? `bg-gray-50 ${shadowDark} hover-bg-gray-100 active-bg-white text-gray-900 focus-visible-outline-gray-50`
			: appearance === "both"
				? `dark-bg-gray-50 ${darkBoth} dark-hover-bg-gray-100 dark-active-bg-white dark-text-gray-900 dark-focus-visible-outline-gray-900`
				: ""
	}`;
	return `${btnvariantLight} ${variantDark}`;
};
const genBtnVariantOutlineNeutral = ({
	appearance,
	outlineBtn = btnCongig.generalBtnOuline,
}: { appearance: Appearance; outlineBtn?: formOutline }) => {
	const { borderSize } = outlineBtn;
	const borderSize_ = borderSize ? borderSize : 1;
	const variantLight = `${
		appearance === "light" || appearance === "both"
			? "bg-transparent border-gray-800 hover-bg-gray-100/40 active-bg-gray-100/50 text-gray-800 hover-text-gray-900"
			: ""
	}`;

	const variantDark = `${
		appearance === "dark"
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
	const lightV = `${
		appearance === "light" || appearance === "both"
			? "hover-bg-gray-900/90 hover-text-white active-bg-gray-900/80 text-gray-900"
			: ""
	}`;
	const darkV = `${
		appearance === "dark"
			? "hover-bg-white/90 active-bg-white/60 text-white hover-text-gray-900"
			: appearance === "both"
				? "dark-hover-bg-white/90 dark-active-bg-white/60 dark-text-white dark-hover-text-gray-900"
				: ""
	}`;

	return `bg-transparent ${lightV} ${darkV}`;
};

const genBtnNeutralSoft = (appearance: Appearance) => {
	const lightV = `${
		appearance === "light" || appearance === "both"
			? "bg-gray-50 hover-bg-gray-950 hover-text-white active-bg-gray-900 text-gray-900"
			: ""
	}`;
	const darkV = `${
		appearance === "dark"
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
	const btnvariantLight = `${
		appearance === "light" || appearance === "both"
			? "b b-gray-700 bg-gradient-to-bl from-gray-900 to-gray-700 text-white hover-from-gray-950 hover-to-gray-800  focus-visible-outline-gray-900"
			: ""
	} `;

	const variantDark = `${
		appearance === "dark"
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
	appearance,
	removeDefaultTextColor,
}: {
	color: string;
	gradientShades: SolidGradientBtn;
	appearance: Appearance;
	removeDefaultTextColor?: boolean;
}) => {
	if (color === "neutral")
		return `${genBtnVariantSolidNeutralGradient({ appearance })}`;
	const { light, dark, useLightForBoth } = gradient;

	const foreColor = `${removeDefaultTextColor ? "" : "text-white"}`;
	const btnvariantLight = `${
		appearance === "light" || appearance === "both"
			? `b-${color}-${light?.borderShade} from-${color}-${light?.bgShadeFrom} to-${color}-${light?.bgShadeTo} hover-from-${color}-${light?.hoverShadeFrom} hover-to-${color}-${light?.hoverShadeTo} focus-b-transparent focus-visible-outline-${color}-${light?.bgShadeFrom}`
			: ""
	} `;

	const variantDark = `${
		appearance === "dark"
			? `b-${color}-${dark?.borderShade} from-${color}-${dark?.bgShadeFrom} to-${color}-${dark?.bgShadeTo} hover-from-${color}-${dark?.hoverShadeFrom} hover-to-${color}-${dark?.hoverShadeTo} focus-b-transparent focus-visible-outline-${color}-${dark?.bgShadeFrom}`
			: appearance === "both"
				? `${getShortcutsIfNotSame({
						val1: `${light?.borderShade}`,
						val2: `${dark?.borderShade}`,
						shortcuts: `dark-b-${color}-${dark?.borderShade}`,
					})} 
            ${getShortcutsIfNotSame({
							val1: `${light?.bgShadeFrom}`,
							val2: `${dark?.bgShadeFrom}`,
							shortcuts: `dark-from-${color}-${dark?.bgShadeFrom}  dark-focus-visible-outline-${color}-${dark?.bgShadeFrom}`,
						})}
            ${getShortcutsIfNotSame({
							val1: `${light?.bgShadeTo}`,
							val2: `${dark?.bgShadeTo}`,
							shortcuts: `dark-to-${color}-${dark?.bgShadeTo}`,
						})}
            ${getShortcutsIfNotSame({
							val1: `${light?.hoverShadeFrom}`,
							val2: `${dark?.hoverShadeFrom}`,
							shortcuts: `dark-hover-from-${color}-${dark?.hoverShadeFrom}`,
						})}
            ${getShortcutsIfNotSame({
							val1: `${light?.hoverShadeTo}`,
							val2: `${dark?.hoverShadeTo}`,
							shortcuts: `dark-hover-to-${color}-${dark?.hoverShadeTo}`,
						})}
             `
				: ""
	}`;
	return `bg-gradient-to-b b active-opacity-90 ${foreColor} ${btnvariantLight} ${
		useLightForBoth ? "" : variantDark
	}`;
};