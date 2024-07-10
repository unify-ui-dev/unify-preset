import type { Appearance, formOutline } from "@/types";
import { getConfigValue, getShortcutsIfNotSame } from "@/utils";

import type {
	BtnGhostOrSoft,
	SolidBtnShade,
	BtnWhite,
	GradientBtn,
} from "./types";

import { getVariableBgValue } from "@/rules/utils";
import { getRealOpacityValue } from "../shortcut_helper";

export const genBtnVariantWhite = ({
	solid,
	appearance,
}: { solid: BtnWhite | undefined; appearance: Appearance }) => {
	if (!solid) {
		return '';
	}
	const { bg, hoverBg, pressBg, textColor, dark } = solid;
	const btnvariantLight = `${appearance === "light" || appearance === "both"
		? `b b-gray-200 bg-${bg} hover-bg-${hoverBg} active-bg-${pressBg} text-${textColor} focus-visible-outline-${textColor}`
		: ""
		} `;

	const variantDark = dark ? `${appearance === "dark"
		? `b b-gray-800 bg-${dark.bg} hover-bg-${dark.hoverBg} active-bg-${dark.pressBg} text-${dark.textColor} focus-visible-outline-${dark.textColor}`
		: appearance === "both"
			? `dark-b-gray-800 dark-bg-${dark.bg} dark-hover-bg-${dark.hoverBg} dark-active-bg-${dark.pressBg} dark-text-${dark.textColor} dark-focus-visible-outline-${dark.textColor}`
			: ""
		}` : '';
	return `${btnvariantLight} ${variantDark} focus-visible-outline focus-visible-outline-offset-2 
		focus-visible-outline-2`;
};

export const genBtnVariantSolid = ({
	color,
	shades,
	appearance,
	theme
}: {
	color: string;
	shades: SolidBtnShade;
	appearance: Appearance;
	theme: object
}) => {
	if (color === "neutral")
		return `${genBtnVariantSolidNeutral({ appearance, theme })}`;
	const { bgShade, hoverBgShade, pressBgShade, dark } = shades;

	const bgDark = getShortcutsIfNotSame({
		val1: `${color}-${bgShade}`,
		val2: `${color}-${dark?.bgShade}`,
		shortcuts: `dark-[--btn-solid-color:${getVariableBgValue(`${color}-${dark?.bgShade}`, theme)}]`,
	});
	const bgHover = getShortcutsIfNotSame({
		val1: `${color}-${hoverBgShade}`,
		val2: `${color}-${dark?.hoverBgShade}`,
		shortcuts: `dark-[--btn-solid-color-hover:${getVariableBgValue(`${color}-${dark?.hoverBgShade}`, theme)}]`,
	});
	const activeBg = getShortcutsIfNotSame({
		val1: `${color}-${pressBgShade}`,
		val2: `${color}-${dark?.pressBgShade}`,
		shortcuts: ` dark-[--btn-solid-color-press:${getVariableBgValue(`${color}-${dark?.pressBgShade}]`, theme)}]`,
	});

	const shadowLight = `unify-internal-btn-solid-base-${color}-${bgShade} hover-unify-internal-btn-solid-base-${color}-${hoverBgShade}`;
	const shadowDark = dark ? `unify-internal-btn-solid-base-${color}-${dark.bgShade} hover-unify-internal-btn-solid-base-${color}-${dark.hoverBgShade}` : '';
	const darkBoth = dark ? `
    ${getShortcutsIfNotSame({
		val1: `${color}-${bgShade}`,
		val2: `${color}-${dark?.bgShade}`,
		shortcuts: `dark-unify-internal-btn-solid-base-${color}-${dark.bgShade}`,
	})}
    ${getShortcutsIfNotSame({
		val1: `${color}-${bgShade}`,
		val2: `${color}-${dark.bgShade}`,
		shortcuts: `dark-hover-unify-internal-btn-solid-base-${color}-${dark.hoverBgShade}`,
	})}
    `: '';

	const btnvariantDefault = `${appearance === "light" || appearance === "both"
		? `${shadowLight} 
			[--btn-solid-color:${getVariableBgValue(`${color}-${bgShade}`, theme)}]
			[--btn-solid-color-hover:${getVariableBgValue(`${color}-${hoverBgShade}`, theme)}] 
			[--btn-solid-color-press:${getVariableBgValue(`${color}-${pressBgShade}`, theme)}]`
		: ""} `;

	const variantDark = dark ? `${appearance === "dark"
		? `${shadowDark} 
		[--btn-solid-color:${getVariableBgValue(`${color}-${dark.bgShade}`, theme)}] 
		[--btn-solid-color-hover:${getVariableBgValue(`${color}-${dark.hoverBgShade}`, theme)}] 
		[--btn-solid-color-press:${getVariableBgValue(`${color}-${dark.pressBgShade}`, theme)}] 
		`
		: appearance === "both"
			? `${bgDark} ${bgHover} ${activeBg} ${darkBoth}`
			: ""
		}` : '';
	return `${btnvariantDefault} ${variantDark} [--btn-focus-outline-color:var(--btn-solid-color-hover)]`;
};

export const genBtnVariantOutline = ({
	color,
	appearance,
	outlineShades,
	theme
}: { color: string; appearance: Appearance; outlineShades: formOutline, theme: object }) => {
	const { borderSize, textShade, borderShade, hoverBorderShade, hoverTextShade, dark } = outlineShades;

	const borderSize_ = borderSize ? borderSize : 1;

	if (color === "neutral")
		return `${genBtnVariantOutlineNeutral({
			appearance,
			borderSize: borderSize_,
			theme
		})}`;

	const variantLight = `${appearance === "light" || appearance === "both"
		? ` 
		[--btn-outline-color:${getVariableBgValue(`${color}-${borderShade}`, theme)}] 
		[--btn-outline-border-hover:${getVariableBgValue(`${color}-${hoverBorderShade}`, theme)}] 
		[--btn-outline-text-color:${getVariableBgValue(`${color}-${textShade}`, theme)}] 
		[--btn-outline-text-color-hover:${getVariableBgValue(`${color}-${hoverTextShade}`, theme)}]`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `bg-transparent 
		

		[--btn-outline-color:${getVariableBgValue(`${color}-${dark.borderShade}`, theme)}] 
		[--btn-outline-border-hover:${getVariableBgValue(`${color}-${dark.hoverBorderShade}`, theme)}] 
		[--btn-outline-text-color:${getVariableBgValue(`${color}-${dark.textShade}`, theme)}] 
		[--btn-outline-text-color-hover:${getVariableBgValue(`${color}-${dark.hoverTextShade}`, theme)}]

		hover-bg-${color}-${dark?.textShade}/10 border-${color}-${dark?.borderShade} hover-border-${color}-${dark?.hoverBorderShade} text-${color}-${dark?.textShade} hover-text-${color}-${dark?.hoverTextShade} focus-visible-outline-${color}-${dark?.hoverBorderShade}`
		: appearance === "both"
			? `
            ${getShortcutsIfNotSame({
				val1: `${borderShade}`,
				val2: `${dark?.borderShade}`,
				shortcuts: `dark-[--btn-outline-color:${getVariableBgValue(`${color}-${dark?.borderShade}`, theme)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${textShade}`,
				val2: `${dark?.textShade}`,
				shortcuts: `dark-[--btn-outline-text-color:${getVariableBgValue(`${color}-${dark.textShade}`, theme)}] `,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverBorderShade}`,
				val2: `${dark?.hoverBorderShade}`,
				shortcuts: `dark-[--btn-outline-border-hover:${getVariableBgValue(`${color}-${dark.hoverBorderShade}`, theme)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverTextShade}`,
				val2: `${dark?.hoverTextShade}`,
				shortcuts: `dark-[--btn-outline-text-color-hover:${getVariableBgValue(`${color}-${dark.hoverTextShade}`, theme)}]`,
			})}`
			: ""
		}` : '';
	return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark} [--btn-focus-outline-color:var(--btn-outline-border-hover)]`;
};

export const genBtnVariantSoftOrGost = ({
	color,
	appearance,
	ghostOrSoft,
	variant,
	theme
}: {
	color: string;
	appearance: Appearance;
	ghostOrSoft: BtnGhostOrSoft;
	variant: "soft" | "ghost";
	theme: object
}) => {
	if (color === "neutral") {
		return `${genNeutralSoftGhost({ variant, appearance, theme })}`;
	}

	const { bgShade, bgOpacity, hoverBgOpacity, hoverBgShade, textShade, pressBgShade, pressOpacity, dark } = ghostOrSoft;
	const variantLight = `${appearance === "light" || appearance === "both"
		? `
		${variant === "ghost" ? "" :
			`
				[--btn-soft-bg-color:rgba(${getVariableBgValue(`${color}-${bgShade}`, theme, true)},${getRealOpacityValue(bgOpacity as number)})]
			`
		}
		 [--btn-soft-bg-color-hover:rgba(${getVariableBgValue(`${color}-${hoverBgShade}`, theme, true)},${getRealOpacityValue(hoverBgOpacity)})]
		 [--btn-soft-bg-color-press:rgba(${getVariableBgValue(`${color}-${pressBgShade}`, theme, true)},${getRealOpacityValue(pressOpacity)})]
		 [--btn-soft-text-color:${getVariableBgValue(`${color}-${textShade}`, theme)}]`
		: ""
		}`;

	const variantDark = dark ? `${appearance === "dark"
		? `
			${variant === "ghost" ? "" :
			`
				[--btn-soft-bg-color:rgba(${getVariableBgValue(`${color}-${dark.bgShade}`, theme, true)},${getRealOpacityValue(dark.bgOpacity as number)})] 
			`
		}
		 [--btn-soft-bg-color-hover:rgba(${getVariableBgValue(`${color}-${dark.hoverBgShade}`, theme, true)},${getRealOpacityValue(dark.hoverBgOpacity)})] 
		 [--btn-soft-bg-color-press:rgba(${getVariableBgValue(`${color}-${dark.pressBgShade}`, theme, true)},${getRealOpacityValue(dark.pressOpacity)})]
		 [--btn-soft-text-color:${getVariableBgValue(`${color}-${dark.textShade}`, theme)}]
		`
		: appearance === "both"
			? `${variant === "ghost" ? "" :
				`
				dark-[--btn-soft-bg-color:rgba(${getVariableBgValue(`${color}-${dark.bgShade}`, theme, true)},${getRealOpacityValue(dark.bgOpacity as number)})] 
			`
			}
		 dark-[--btn-soft-bg-color-hover:rgba(${getVariableBgValue(`${color}-${dark.hoverBgShade}`, theme, true)},${getRealOpacityValue(dark.hoverBgOpacity)})]
		 dark-[--btn-soft-bg-color-press:rgba(${getVariableBgValue(`${color}-${dark.pressBgShade}`, theme, true)},${getRealOpacityValue(dark.pressOpacity)})]
		 dark-[--btn-soft-text-color:${getVariableBgValue(`${color}-${dark.textShade}`, theme)}]` : ""
		}` : '';
	return `${variantLight} ${variantDark} [--btn-focus-outline-color:var(--btn-soft-bg-color-hover)]`;
};

export const genBtnVariantSoft = ({
	color,
	appearance,
	ghostOrSoft,
	theme
}: { color: string; appearance: Appearance; ghostOrSoft: BtnGhostOrSoft, theme: object }) => {
	return `${genBtnVariantSoftOrGost({
		variant: "soft",
		color,
		appearance,
		ghostOrSoft,
		theme
	})}`;
};

export const genBtnVariantGhost = ({
	color,
	appearance,
	ghost: ghostOrSoft,
	theme
}: { color: string; appearance: Appearance; ghost: BtnGhostOrSoft, theme: object }) => {
	return `${genBtnVariantSoftOrGost({
		variant: "ghost",
		color,
		appearance,
		ghostOrSoft,
		theme
	})}`;
};



export const genBtnVariantSolidNeutral = ({
	appearance,
	theme
}: { appearance: Appearance, theme: object }) => {
	const shadowLight = "unify-internal-btn-solid-base-gray-800";
	const shadowDark = "unify-internal-btn-solid-base-gray-100";
	const darkBoth =
		"dark-unify-internal-btn-solid-base-gray-100 dark-hover-unify-internal-btn-solid-base-gray-200";

	const btnvariantLight = `${appearance === "light" || appearance === "both"
		? ` 
		[--btn-solid-color:${getVariableBgValue('gray-900', theme)}] ${shadowLight}]
		[--btn-solid-color-hover:${getVariableBgValue('gray-950', theme)}] 
		[--btn-solid-color-press:${getVariableBgValue('gray-900', theme)}] text-white` : ""}`;

	const variantDark = `${appearance === "dark"
		? `
		${shadowDark} 
		[--btn-solid-color:${getVariableBgValue('gray-50', theme)}] ${shadowLight}]
		[--btn-solid-color-hover:${getVariableBgValue('gray-100', theme)}] 
		[--btn-solid-color-press:${getVariableBgValue('white', theme)}]
		text-gray-900`
		: appearance === "both"
			? `${darkBoth} 
			dark-[--btn-solid-color:${getVariableBgValue('gray-50', theme)}] ${shadowLight}]
			dark-[--btn-solid-color-press:${getVariableBgValue('white', theme)}] 
			dark-[--btn-solid-color-hover:${getVariableBgValue('gray-100', theme)}]
			dark-text-gray-950
			`: ""}`;
	return `${btnvariantLight} ${variantDark} [--btn-focus-outline-color:var(--btn-solid-color-hover)]`;
};

const genBtnVariantOutlineNeutral = ({
	appearance,
	borderSize,
	theme
}: { appearance: Appearance; borderSize?: string | number, theme: object }) => {
	const borderSize_ = borderSize ? borderSize : 1;
	const variantLight = `${appearance === "light" || appearance === "both"
		? `bg-transparent 
		[--btn-outline-color:${getVariableBgValue('gray-800', theme)}] 
		[--btn-outline-border-hover:${getVariableBgValue('gray-900', theme)}] 
		[--btn-outline-text-color:${getVariableBgValue('gray-800', theme)}] 
		[--btn-outline-text-color-hover:${getVariableBgValue('gray-900', theme)}]
		hover-bg-gray-100/40 active-bg-gray-100/50`
		: ""
		}`;

	const variantDark = `${appearance === "dark"
		? `bg-transparent  
		[--btn-outline-color:${getVariableBgValue('white', theme)}] 
		[--btn-outline-border-hover:${getVariableBgValue('gray-100', theme)}] 
		[--btn-outline-text-color:${getVariableBgValue('white', theme)}] 
		[--btn-outline-text-color-hover:${getVariableBgValue('gray-100', theme)}]
		hover-bg-gray-900/30 active-bg-gray-900/50`
		: appearance === "both"
			? `dark-[--btn-outline-color:${getVariableBgValue('white', theme)}] 
			dark-[--btn-outline-border-hover:${getVariableBgValue('gray-100', theme)}] 
			dark-[--btn-outline-text-color:${getVariableBgValue('white', theme)}] 
			dark-[--btn-outline-text-color-hover:${getVariableBgValue('gray-100', theme)}]`
			: ""
		}`;
	return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark} 
	[--btn-focus-outline-color:var(--btn-outline-border-hover)]`;
};


const genNeutralSoftGhost = ({
	appearance,
	variant,
	theme
}: { variant: "soft" | "ghost"; appearance: Appearance, theme: object }) => {
	return variant === "soft"
		? `${genBtnNeutralSoft(appearance, theme)}`
		: `${genBtnNeutralGhost(appearance, theme)}`;
};

const genBtnNeutralGhost = (appearance: Appearance, theme: object) => {
	const lightV = `${appearance === "light" || appearance === "both"
		? `[--btn-soft-bg-color-hover:rgba(${getVariableBgValue("gray-900", theme,true)},.9)]
		 [--btn-soft-bg-color-press:rgba(${getVariableBgValue("gray-900", theme,true)},.8)]
		 [--btn-soft-text-color:${getVariableBgValue("gray-900", theme)}]
		hover-text-white
		`: ""
		}`;
	const darkV = `${appearance === "dark"
		? `
		[--btn-soft-bg-color-hover:rgba(${getVariableBgValue("white", theme,true)},.9)]
		 [--btn-soft-bg-color-press:rgba(${getVariableBgValue("white", theme,true)},.6)]
		 [--btn-soft-text-color:${getVariableBgValue("white", theme)}]
		hover-text-gray-900`
		: appearance === "both"
			? `
			dark-[--btn-soft-bg-color-hover:rgba(${getVariableBgValue("white", theme,true)},.9)]
		 dark-[--btn-soft-bg-color-press:rgba(${getVariableBgValue("white", theme,true)},.6)] 
		 dark-[--btn-soft-text-color:${getVariableBgValue("white", theme)}]
		 dark-hover-text-gray-900`
			: ""
		}`;

	return `bg-transparent ${lightV} ${darkV}
	[--btn-focus-outline-color:var(--btn-soft-bg-color-hover)]`;
};

const genBtnNeutralSoft = (appearance: Appearance, theme: object) => {
	const lightV = `${appearance === "light" || appearance === "both"
		? `
		 [--btn-soft-bg-color:rgba(${getVariableBgValue("gray-50", theme, true)},1)]
		 [--btn-soft-bg-color-hover:rgba(${getVariableBgValue("gray-950", theme, true)},1)]
		 [--btn-soft-bg-color-press:rgba(${getVariableBgValue("gray-900", theme, true)},1)]
		 [--btn-soft-text-color:${getVariableBgValue("gray-900", theme)}]
		 hover-text-white`
		: ""
		}`;
	const darkV = `${appearance === "dark"
		? `
		 [--btn-soft-bg-color:rgba(${getVariableBgValue("white", theme, true)},.4)]
		 [--btn-soft-bg-color-hover:rgba(${getVariableBgValue("white", theme, true)},1)]
		 [--btn-soft-bg-color-press:rgba(${getVariableBgValue("gray-50", theme, true)},1)]
		 [--btn-soft-text-color:${getVariableBgValue("white", theme)}]
		 hover-text-gray-900`
		: appearance === "both"
			? `
		 dark-[--btn-soft-bg-color:rgba(${getVariableBgValue("white", theme, true)},.4)]
		 dark-[--btn-soft-bg-color-hover:rgba(${getVariableBgValue("white", theme, true)},1)]
		 dark-[--btn-soft-bg-color-press:rgba(${getVariableBgValue("gray-50", theme, true)},1)]
		 dark-[--btn-soft-text-color:${getVariableBgValue("white", theme)}]
		 dark-hover-text-gray-900`
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
	appearance, theme
}: {
	color: string;
	gradientShades: GradientBtn;
	appearance: Appearance;
	theme: object
}) => {
	if (color === "neutral")
		return `${genBtnVariantSolidNeutralGradient({ appearance })}`;
	const { bgShadeFrom, borderShade, hoverShadeFrom, hoverShadeTo, bgShadeTo, dark, useLightForBoth } = gradient;

	const btnvariantLight = `${appearance === "light" || appearance === "both"
		? `[--btn-gradient-border-color:${getVariableBgValue(`${color}-${borderShade}`, theme)}] 
		[--btn-gradient-color-from:${getVariableBgValue(`${color}-${bgShadeFrom}`, theme)}] 
		[--btn-gradient-color-to:${getVariableBgValue(`${color}-${bgShadeTo}`, theme)}] 
		[--btn-gradient-color-from:${getVariableBgValue(`${color}-${hoverShadeFrom}`, theme)}] 
		[--btn-gradient-color-to:${getVariableBgValue(`${color}-${hoverShadeTo}`, theme)}] 
		 `
		: ""
		} `;

	const variantDark = dark ? `${appearance === "dark"
		? `
		[--btn-gradient-border-color:${getVariableBgValue(`${color}-${dark.borderShade}`, theme)}] 
		[--btn-gradient-color-from:${getVariableBgValue(`${color}-${dark.bgShadeFrom}`, theme)}] 
		[--btn-gradient-color-to:${getVariableBgValue(`${color}-${dark.bgShadeTo}`, theme)}] 
		[--btn-gradient-hover-color-from:${getVariableBgValue(`${color}-${dark.hoverShadeFrom}`, theme)}] 
		[--btn-gradient-hover-color-to:${getVariableBgValue(`${color}-${dark.hoverShadeTo}`, theme)}]
		`
		: appearance === "both"
			? `${getShortcutsIfNotSame({
				val1: `${borderShade}`,
				val2: `${dark?.borderShade}`,
				shortcuts: `[--btn-gradient-border-color:${getVariableBgValue(`${color}-${dark.borderShade}`, theme)}]`,
			})} 
            ${getShortcutsIfNotSame({
				val1: `${bgShadeFrom}`,
				val2: `${dark?.bgShadeFrom}`,
				shortcuts: `[--btn-gradient-color-from:${getVariableBgValue(`${color}-${dark.bgShadeFrom}`, theme)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${bgShadeTo}`,
				val2: `${dark?.bgShadeTo}`,
				shortcuts: `[--btn-gradient-color-to:${getVariableBgValue(`${color}-${dark.bgShadeTo}`, theme)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverShadeFrom}`,
				val2: `${dark?.hoverShadeFrom}`,
				shortcuts: `[--btn-gradient-hover-color-from:${getVariableBgValue(`${color}-${dark.hoverShadeFrom}`, theme)}]`,
			})}
            ${getShortcutsIfNotSame({
				val1: `${hoverShadeTo}`,
				val2: `${dark?.hoverShadeTo}`,
				shortcuts: `[--btn-gradient-hover-color-to:${getVariableBgValue(`${color}-${dark.hoverShadeFrom}`, theme)}]`,
			})}
             `
			: ""
		}` : '';
	return `${btnvariantLight} ${useLightForBoth ? "" : variantDark
		}`;
};