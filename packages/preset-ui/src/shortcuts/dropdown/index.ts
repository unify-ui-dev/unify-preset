import type { Appearance, BaseUI, SharedVariant } from "@/types";
import {
	genVariantOutline,
	genVariantSolid,
	genVariantWhiteBlack,
	genBluredBackground,
} from "../helpers";
import { helperDefaultValues } from "../helpers";
import type { Dropdown } from "./types";
import { dropdownDefault } from "./const";
import { isValidColor } from "@/utils/colors-utils";
import type { Shortcut } from "unocss";

const getDropdownShortcuts = ({
	dropdown,
	sharedConfig,
	baseUI,
	uiConfig,
}: {
	dropdown?: Dropdown;
	sharedConfig?: SharedVariant;
	baseUI?: BaseUI;
	uiConfig?: { appearance?: Appearance };
}) => {
	const outline =
		dropdown?.outline ||
		sharedConfig?.border ||
		helperDefaultValues.defaultOutlineGrayELement;
	const appearance = uiConfig?.appearance || "both";
	const blurWhite = dropdown?.bgWhiteBlured || dropdownDefault.whiteBlured;
	const grayBlured = dropdown?.bgGrayBlured || dropdownDefault.grayBlured;
	const innerGrayBlured =
		dropdown?.bgInnerGrayBlured || dropdownDefault.grayInnerBlured;
	const solid =
		dropdown?.bgColor ||
		sharedConfig?.solid ||
		dropdownDefault.bgGray ||
		helperDefaultValues.defaultSolidGrayShades;
	const gray =
		dropdown?.bgColor ||
		sharedConfig?.solidGray ||
		dropdownDefault.bgGray ||
		helperDefaultValues.defaultSolidGrayShades;
	const innerGray = dropdown?.bgInnerGray || dropdownDefault.innerBgGray;
	const subInnerGray =
		dropdown?.bgSubInnerGray || dropdownDefault.subInnerBgGray;
	const background =
		dropdown?.white ||
		dropdownDefault.whiteBg ||
		baseUI?.bodyBg ||
		helperDefaultValues.bodyBg;
	const backgroundInverse =
		baseUI?.bodyBgInverse || helperDefaultValues.bodyBgInverse;

	const dropdowns = {
		"dropdown-wrapper-body": `${genVariantWhiteBlack({
			appearance,
			colors: background,
		})}`,
		"dropdown-wrapper-body-inverse": `${genVariantWhiteBlack({
			appearance,
			colors: backgroundInverse,
		})}`,
		"dropdown-wrapper-white-blured": `${genBluredBackground({
			backdrop: blurWhite,
			appearance,
		})}`,
		"dropdown-wrapper-gray-blured": `${genBluredBackground({
			backdrop: grayBlured,
			appearance,
		})}`,
		"dropdown-wrapper-gray-inner-blured": `${genBluredBackground({
			backdrop: innerGrayBlured,
			appearance,
		})}`,
	};

	const dynamicDropdowns: Shortcut[] = [
		[
			/^dropdown-wrapper-solid(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? gray : solid;
					return `${genVariantSolid({ color, appearance, colorShades })}`;
				}
			},
			{ autocomplete: ["dropdown", "dropdown-wrapper-solid-$colors"] },
		],
		[
			/^dropdown-wrapper-inner(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? innerGray : solid;
					return `${genVariantSolid({ color, appearance, colorShades })}`;
				}
			},
			{
				autocomplete: [
					"dropdown-wrapper-inner",
					"dropdown-wrapper-inner-$colors",
				],
			},
		],
		[
			/^dropdown-wrapper-sub-inner(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? subInnerGray : solid;
					return `${genVariantSolid({ color, appearance, colorShades })}`;
				}
			},
			{
				autocomplete: [
					"dropdown-wrapper-sub-inner",
					"dropdown-wrapper-sub-inner-$colors",
				],
			},
		],
		[
			/^dropdown-wrapper-outline(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantOutline({
						color,
						appearance,
						outlineColor: outline,
						outlineGray: outline,
					})}`;
			},
			{
				autocomplete: [
					"dropdown-wrapper-outline",
					"dropdown-wrapper-outline-$colors",
				],
			},
		],
	];
	return [dropdowns, ...dynamicDropdowns];
};
export { getDropdownShortcuts, type Dropdown };
