import type { Appearance, UiConfig } from "@/types";
import { defaultInput } from "./const";
import {
	getInputGrayVariant,
	getInputBorder,
	getInputOutlineFocus,
	getPlaceHolder,
	getTextColor,
} from "./helper";
import type { Input, InputOutline } from "./types";
// import { isValidColor } from "@/utils/colors-utils"
import type { Shortcut } from "unocss";

const getBorderedInput = (
	borderedBase: string,
	appearance: Appearance,
	inputFocus?: InputOutline,
) => {
	return `${borderedBase} ${getInputOutlineFocus({
		color: "primary",
		appearance,
		shades: { light: `${inputFocus?.light}`, dark: `${inputFocus?.dark}` },
	})} `;
};
const getFormInputShortcuts = ({
	input,
	uiConfig,
}: { input?: Input; uiConfig: UiConfig }) => {
	const {
		size,
		solidGray,
		highGray,
		lightGray,
		higherGray,
		borderSize,
		border: outline,
		focusColor,
		textColor,
		placeHolder,
		focusBorderSize: focusOutlineSize,
	} = input || defaultInput;
	const appearance = uiConfig.appearance;
	const _2xs = size?.["2xs"];
	const xs = size?.xs;
	const sm = size?.sm;
	const md = size?.md;
	const lg = size?.lg;
	const xl = size?.xl;

	const borderedBase = `b-${borderSize} outline-none outine-offset-0 focus-outline-0 outline-offset-0 focus-b-${focusOutlineSize} ${getInputBorder(
		{
			appearance,
			shades: { light: outline?.light || "200", dark: outline?.dark || "800" },
		},
	)}`;

	const inputs = {
		input: `transition-colors ease-linear duration-200 wfull  ${getTextColor({
			appearance,
			textColor,
		})} ${getPlaceHolder({ appearance, placeHolder: placeHolder })} `,
		"input-gray": `${getInputGrayVariant({
			appearance,
			shades: { light: solidGray?.light, dark: solidGray?.dark },
		})} `,
		"input-high-gray": `${getInputGrayVariant({
			appearance,
			shades: { light: highGray?.light, dark: highGray?.dark },
		})} `,
		"input-higher-gray": `${getInputGrayVariant({
			appearance,
			shades: { light: higherGray?.light, dark: higherGray?.dark },
		})} `,
		"input-light-gray": `${getInputGrayVariant({
			appearance,
			shades: { light: lightGray?.light, dark: lightGray?.dark },
		})} `,

		"input-2xs": `px-${_2xs?.padding?.x} py-${_2xs?.padding?.y} text-${_2xs?.textSize} `,
		"input-xs": `px-${xs?.padding?.x} py-${xs?.padding?.y} text-${xs?.textSize} `,
		"input-sm": `px-${sm?.padding?.x} py-${sm?.padding?.y} text-${sm?.textSize} `,
		"input-md": `px-${md?.padding?.x} py-${md?.padding?.y} text-${md?.textSize} `,
		"input-lg": `px-${lg?.padding?.x} py-${lg?.padding?.y} text-${lg?.textSize} `,
		"input-xl": `px-${xl?.padding?.x} py-${xl?.padding?.y} text-${xl?.textSize} `,
		"input-bordered": `${getBorderedInput(
			borderedBase,
			appearance,
			focusColor,
		)}`,
		"input-bordered-light": ``,
		"input-bordered-high": ``,
		"input-bordered-higher": ``,
	};
	const dynamicInputs: Shortcut[] = [
		// [/^input-bordered-colored(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
		//     const fColor = color === "gray" ? focusGray : focusColor
		//     if (isValidColor(color, theme)) return `${ inputOutline_ } ${ getInputOutlineFocus({ color, appearance, shades: { light: `${fColor?.light}`, dark: `${fColor?.dark}` } }) } `
		// }, { autocomplete: ['form-input-outline', 'form-input-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
	];
	return [inputs, ...dynamicInputs];
};

export { getFormInputShortcuts, type Input };
