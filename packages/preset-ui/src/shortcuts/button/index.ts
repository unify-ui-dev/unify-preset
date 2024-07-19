import type { BtnGhostOrSoft, BtnGhostVariants, BtnGradientVariants, BtnIconBase, BtnOutlineVariants, BtnSizeBase, BtnSoftVariants, Button, GradientBtn, SolidBtnShade } from "./types";
import { genBtnVariantOutline, genBtnVariantSolid, genBtnVariantSoft, genBtnVariantGhost, genBtnVariantWhite, genBtnVariantSolidGradient, } from "./helpers";
import { getConfigValue } from "@/utils";
import { btnCongig } from "./const";

import type { SemanticColorNames, SharedFormConfig, UiConfig, formOutline } from "@/types";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";
import { genBtnGradientBase, genBtnOutlineBase, genBtnSoftBase, genBtnVariantSolidBase } from "./baseHelpers";

const getBtnSizeInfo = (sizeVariant: BtnSizeBase) => {
	return `h-${getConfigValue(sizeVariant?.height)} px-${getConfigValue(
		sizeVariant.px,
	)} text-${sizeVariant.textSize}`;
};
const getBtnIconSizeInfo = (sizeVariant: BtnIconBase) => {
	return `truncate justify-center size-${getConfigValue(
		sizeVariant.size,
	)} text-${sizeVariant.textSize}`;
};

const getBtnShortcuts = ({
	button,
	uiConfig,
	formConfig,
}: { button?: Button; formConfig?: SharedFormConfig; uiConfig: UiConfig }) => {
	const btn = Object.assign({}, btnCongig, button)

	const btnSizes = btn.sizes;
	const btnIconSizes = btn.iconSizes;

	const solidVariants = btn.solidVariants
	const softVariants = btn.softVariants
	const ghostVariants = btn.ghostVariants
	const outlineVariants = btn.outlineVariants
	const gradientVariants = btn.gradientVariants
	const btnWhite = btn.btnWhite;
	const appearance = uiConfig.appearance;
	const ringBase = Object.assign({}, formConfig?.ringBase, btn.ringBase)

	const btnOutlineOnFocus = () =>
		`focus-visible-outline focus-visible-outline-offset-${ringBase.offset} 
		focus-visible-outline-${ringBase.size} 
		focus-visible-outline-[--btn-focus-outline-color]`;
	const btns = {
		btn: "flex items-center disabled-opacity-50 disabled-cursor-not-allowed disabled-hover-opacity-70 outline-0 outline-transparent",
		"btn-xs": `${getBtnSizeInfo(btnSizes?.xs as BtnSizeBase)}`,
		"btn-sm": `${getBtnSizeInfo(btnSizes?.sm as BtnSizeBase)}`,
		"btn-md": `${getBtnSizeInfo(btnSizes?.md as BtnSizeBase)}`,
		"btn-lg": `${getBtnSizeInfo(btnSizes?.lg as BtnSizeBase)}`,
		"btn-xl": `${getBtnSizeInfo(btnSizes?.xl as BtnSizeBase)}`,
		"btn-icon-xs": `${getBtnIconSizeInfo(btnIconSizes?.xs as BtnIconBase)}`,
		"btn-icon-sm": `${getBtnIconSizeInfo(btnIconSizes?.sm as BtnIconBase)}`,
		"btn-icon-md": `${getBtnIconSizeInfo(btnIconSizes?.md as BtnIconBase)}`,
		"btn-icon-lg": `${getBtnIconSizeInfo(btnIconSizes?.lg as BtnIconBase)}`,
		"btn-icon-xl": `${getBtnIconSizeInfo(btnIconSizes?.xl as BtnIconBase)}`,
		"btn-white": `${genBtnVariantWhite({ solid: btnWhite, appearance })}`,
		"btn-solid": `${genBtnVariantSolidBase()} ${btnOutlineOnFocus()}`,
		"btn-outline": `${genBtnOutlineBase()} ${btnOutlineOnFocus()}`,
		"btn-soft": `${genBtnSoftBase({ isGhost: false })} ${btnOutlineOnFocus()}`,
		"btn-ghost": `${genBtnSoftBase({ isGhost: true })} ${btnOutlineOnFocus()}`,
		"btn-gradient": `${genBtnGradientBase()} ${btnOutlineOnFocus()}`
	};

	const dynamicBtns: Shortcut[] = [
		[
			/^btn-solid-(.*)$/,
			([, color], { theme }) => {
				let shades: SolidBtnShade = { bgShade: "500", hoverBgShade: "600", pressBgShade: "700", };
				if (color === 'neutral' || isValidColor(color, theme)) {
					if (solidVariants) {
						const key = color as SemanticColorNames
						if (solidVariants.base && color in solidVariants.base) {
							shades = solidVariants.base[key] as SolidBtnShade;
						} else if (solidVariants.custom && color in solidVariants.custom) {
							shades = solidVariants.custom[key];
						} else { shades = solidVariants['global'] as SolidBtnShade }
						return `${genBtnVariantSolid({ color, appearance, shades, theme })}`;
					}
				}
			},
			{ autocomplete: ["btn-solid", "btn-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
		],
		[
			/^btn-outline-(.*)$/,
			([, color], { theme }) => {
				if (color === 'neutral' || isValidColor(color, theme)) {
					let shades: formOutline = { borderSize: 1, borderShade: "500", textShade: "600", hoverBorderShade: "600", hoverTextShade: "700", activeBorderShade: "600" }
					if (outlineVariants) {
						const key = color as SemanticColorNames
						if (outlineVariants.base && color in outlineVariants.base) {
							shades = outlineVariants.base[key] as formOutline;
						} else if (outlineVariants.custom && color in outlineVariants.custom) {
							shades = outlineVariants.custom[color as keyof BtnOutlineVariants];
						} else { shades = outlineVariants['global'] as formOutline }
						return `${genBtnVariantOutline({
							color, appearance, outlineShades: shades, theme
						})}`;
					}
				}
			},
			{ autocomplete: ["btn-outline", "btn-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
		],
		[
			/^btn-soft-(.*)$/,
			([, color], { theme }) => {
				if (isValidColor(color, theme)) {
					if (softVariants) {
						let shades: BtnGhostOrSoft
						const key = color as SemanticColorNames
						if (softVariants.base && color in softVariants.base) {
							shades = softVariants.base[key] as BtnGhostOrSoft;
						} else if (softVariants.custom && color in softVariants.custom) {
							shades = softVariants.custom[color as keyof BtnSoftVariants];
						} else { shades = softVariants.global as BtnGhostOrSoft }

						return `${genBtnVariantSoft({
							color,
							appearance,
							ghostOrSoft: shades,
							theme
						})}`;
					}
				}
			},
			{ autocomplete: ["btn-soft", "btn-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",] },
		],
		[
			/^btn-ghost-(.*)$/,
			([, color], { theme }) => {
				if (isValidColor(color, theme)) {
					if (ghostVariants) {
						let shades: BtnGhostOrSoft
						const key = color as SemanticColorNames
						if (ghostVariants.base && color in ghostVariants.base) {
							shades = ghostVariants.base[key] as BtnGhostOrSoft;
						} else if (ghostVariants.custom && color in ghostVariants.custom) {
							shades = ghostVariants.custom[color as keyof BtnGhostVariants];
						} else { shades = ghostVariants['global'] as BtnGhostOrSoft }

						return `${genBtnVariantGhost({
							color,
							appearance,
							ghost: shades,
							theme
						})}`;
					}
				}
			},
			{ autocomplete: ["btn-ghost", "btn-ghost-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
		],
		[
			/^btn-gradient-(.*)$/,
			([, color], { theme }) => {

				if (isValidColor(color, theme)) {
					let shades: GradientBtn
					if (gradientVariants) {
						const key = color as SemanticColorNames
						if (gradientVariants.base && color in gradientVariants.base) {
							shades = gradientVariants.base[key] as GradientBtn;
						} else if (gradientVariants.custom && color in gradientVariants.custom) {
							shades = gradientVariants.custom[color as keyof BtnGradientVariants];
						} else { shades = gradientVariants['global'] as GradientBtn }
						return `${genBtnVariantSolidGradient({
							color,
							gradientShades: shades,
							appearance,
							theme
						})}`;
					}
				}
			},
			{ autocomplete: ["btn-gradient", "btn-gradient-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
		],
	];

	return [btns, ...dynamicBtns];
};

export { getBtnShortcuts, type Button };
