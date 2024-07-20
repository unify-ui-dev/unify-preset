import type { Appearance, BaseColor, BaseUI, BorderPrefix, TextVariantBase } from "@/types";
import { genTextColor, genVariantWhiteBlack, genOutline, genUiBackground } from "../helpers";
import { helperDefaultValues } from "../helpers";
import { isValidColor } from "@/utils/colors-utils";
import type { Shortcut } from "unocss";


const getGeneralShortcuts = ({ uiConfig, globalElement, }: { globalElement?: BaseUI; uiConfig: { appearance: Appearance }; }) => {
	const { appearance } = uiConfig;
	const bg = Object.assign({}, helperDefaultValues.bgSoligUI, globalElement?.bg)
	const border = Object.assign({}, helperDefaultValues.bdrUI, globalElement?.border)
	const textTypo = Object.assign({}, helperDefaultValues.textTypo, globalElement?.textTypo)
	const typoGray = Object.assign({}, helperDefaultValues.defaultTypoGray, globalElement?.textColor)
	const typoGrayReverse = Object.assign({}, helperDefaultValues.textTypoColorReverse, globalElement?.textColorReverse);

	const typoNeutral = Object.assign({}, helperDefaultValues.defaultTypoNeutral, globalElement?.textNeutral)
	const bodyBgUi = Object.assign({}, helperDefaultValues.uiBodyColors, globalElement?.body)

	const utils: Record<string, string> = {
		// bg
		"bg-body": `${genVariantWhiteBlack({ appearance, colors: { white: `${bodyBgUi.default?.color_shade}`, black: `${bodyBgUi.default?.dark}` } })}`,
		"bg-body-reverse": `${genVariantWhiteBlack({ appearance, colors: { white: `${bodyBgUi.defaultReverse?.color_shade}`, black: `${bodyBgUi.defaultReverse?.dark}` } })}`,
		"bg-body-light-high": `${genVariantWhiteBlack({ appearance, colors: { white: `${bodyBgUi["light-high"]?.color_shade}`, black: `${bodyBgUi["light-high"]?.dark}` } })}`,

		// typo
		"text-title": `${genTextColor(appearance, typoGray.title)}`,
		"text-title-reverse": `${genTextColor(appearance, typoGrayReverse.title)}`,
		"text-sub-title": `${genTextColor(appearance, typoGray.subTitle)}`,
		"text-sub-title-reverse": `${genTextColor(
			appearance,
			typoGrayReverse.subTitle,
		)}`,
		"text-body": `${genTextColor(appearance, typoGray.text)}`,
		"text-body-reverse": `${genTextColor(appearance, typoGrayReverse.text)}`,
		"text-text-reverse": `${genTextColor(appearance, typoGrayReverse.text)}`,
		"text-sub-body": `${genTextColor(appearance, typoGray.subText)}`,
		"text-sub-body-reverse": `${genTextColor(
			appearance,
			typoGrayReverse.subText,
		)}`,
		"text-title-neutral": `${genTextColor(appearance, typoNeutral.title)}`,
		"text-sub-title-neutral": `${genTextColor(
			appearance,
			typoNeutral.subTitle,
		)}`,
		"text-body-neutral": `${genTextColor(appearance, typoNeutral.text)}`,
		"text-sub-body-neutral": `${genTextColor(appearance, typoNeutral.subText)}`,

		//gradient
		"text-gradient": "text-transparent bg-clip-text",

		//flex
		"d-flex-justify-center": "flex justify-center",
		"d-flex-justify-start": "flex justify-start",
		"d-flex-justify-end": "flex justify-end",
		"d-flex-items-start": "flex items-start",
		"d-flex-items-center": "flex items-center",
		"d-flex-items-end": "flex items-end",
		"d-flex-between": "flex justify-between",
		"d-flex-place-center": "flex justify-center items-center",

		// pseudo before and after 
		"before-empty": "before-absolute before-content-empty",
		"after-empty": "after-absolute after-content-empty",
		"before-after-empty": "before-absolute before-content-empty after-absolute after-content-empty",
		"before-0-x": "before-empty before-inset-x-0",
		"before-0-y": "before-empty before-inset-y-0",
		'before-0': "before-empty before-inset-0",
		"after-0-x": "after-empty after-inset-x-0",
		"after-0-y": "after-empty after-inset-y-0",
		'after-0': "after-empty after-inset-0",
		"before-after-0-x": "before-empty before-inset-x-0 after-empty inset-x-0",
		"before-after-0-y": "before-empty before-inset-y-0 after-empty inset-y-0",
		'before-after-0': "before-empty after-empty before-inset-0 after-inset-0"
	};


	const dynamicUtils: Shortcut[] = [
		[
			/^bg-(light_nm|light|nm_light|nm|high|higher)(-(\S+))?$/,
			([, type, , color = "gray"], { theme }) => {
				const uiBg = bg[type as "light" | "nm" | "light_nm" | "nm_light" | "high" | "higher"] as BaseColor
				if (["light", "nm", "high", "higher", "highest"].includes(type) && isValidColor(color, theme))
					return `${genUiBackground({
						color, appearance, colorShades: { shade: uiBg.shade, ignoreTextColor: true, dark: uiBg.dark }
					})}`;
			},
			{ autocomplete: ["bg-(light_nm|light|nm_light|nm|high|higher)", "bg-(light_nm|light|nm_light|nm|high|higher)-$colors"] },
		],
		[
			/^(txt|ui-text)-(xs-body|x-body|body|x-title|title|l-title)$/,
			([, size]) => {
				if (["xs-body", "x-body", "body", "x-title", "title", "l-title"].includes(size)) {
					return `${textTypo[size as TextVariantBase]}`
				}
			},
			{ autocomplete: ["(txt|ui-text)-(xs-body|x-body|body|x-title|title|l-title)"] },
		],

		[/^bdr-(light|nm|high|higher|highest)(-(\S+))?$/,
			([, type, , color = "gray"], { theme }) => {
				const bdr_ = border[type as "light" | "nm" | "high" | "higher" | "highest"] as BaseColor
				if (["light", "nm", "high", "higher", "highest"].includes(type) && isValidColor(color, theme))
					return `${genOutline({
						color,
						appearance,
						border: bdr_,
					})}`;
			},
			{ autocomplete: ["bdr-(light|nm|high|higher|highest)-$colors", "bdr_<directions>-(light|nm|high|higher|highest)-$colors"] },
		],
		[/^bdr_(x|y|l|r|t|b)-(light|nm|high|higher|highest)(-(\S+))?$/,
			([, position, type, , color = "gray"], { theme }) => {
				if (["light", "nm", "high", "higher", "highest"].includes(type) && isValidColor(color, theme)) {
					const borderPosition = `border-${position}` as BorderPrefix
					const bdr_ = border[type as "light" | "nm" | "high" | "higher" | "highest"] as BaseColor
					return `${genOutline({
						color,
						appearance,
						border: bdr_,
						prefix: borderPosition
					})}`;
				}
			},
		],
	];

	return [utils, ...dynamicUtils];
};
export { getGeneralShortcuts };
