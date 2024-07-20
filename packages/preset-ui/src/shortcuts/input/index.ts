import type { ColorShade, ElSizeBase, UiConfig } from "@/types";
import { InputBg_, InputSizes, InputBdr, focusColor, inputPlaceHolder } from "./const";
import { getInputOutlineFocus, getPlaceHolder } from "./helper";
import type { Input } from "./types";
import { genBorderColor, genUiBackground, genUiSizes } from "../helpers";


const getFormInputShortcuts = ({
	input,
	uiConfig,
}: { input?: Input; uiConfig: UiConfig }) => {
	const appearance = uiConfig.appearance;

	const size = input?.size || InputSizes
	const inpuBg = input?.background || InputBg_
	const inputBdr = input?.border || InputBdr
	const placeHolder = input?.placeHolder || inputPlaceHolder

	const focusBdr = input?.borderFocusColor || focusColor
	const _2xs = size["2xs"]
	const xs = size.xs;
	const sm = size.sm;
	const md = size.md;
	const lg = size.lg;
	const xl = size.xl;

	const borderFocus = `${getInputOutlineFocus({
		color: focusBdr.color,
		appearance,
		border: { shade: focusBdr.shade as ColorShade, dark: focusBdr.dark as ColorShade },
	})}`;

	const inputs = {
		'form-input': `wfull ${borderFocus}`,
		"form-input-gray": `${genUiBackground({
			appearance,
			color: "gray",
			colorShades: { shade: inpuBg.normalGray?.shade as ColorShade, dark: { shade: inpuBg.normalGray?.dark?.shade as ColorShade } },
		})} `,
		"form-input-high-gray": `${genUiBackground({
			appearance,
			color: "gray",
			colorShades: { shade: inpuBg.highGray?.shade as ColorShade, dark: { shade: inpuBg.highGray?.dark?.shade as ColorShade } },
		})} `,
		"form-input-higher-gray": `${genUiBackground({
			appearance,
			color: "gray",
			colorShades: { shade: inpuBg.higherGray?.shade as ColorShade, dark: { shade: inpuBg.higherGray?.dark?.shade as ColorShade } },
		})} `,
		"form-input-light-gray": `${genUiBackground({
			appearance,
			color: "gray",
			colorShades: { shade: inpuBg.lightGray?.shade as ColorShade, dark: { shade: inpuBg.lightGray?.dark?.shade as ColorShade } },
		})} `,

		"form-input-2xs": `${genUiSizes(_2xs as ElSizeBase)}`,
		"form-input-xs": `${genUiSizes(xs as ElSizeBase)}`,
		"form-input-sm": `${genUiSizes(sm as ElSizeBase)}`,
		"form-input-md": `${genUiSizes(md as ElSizeBase)}`,
		"form-input-lg": `${genUiSizes(lg as ElSizeBase)}`,
		"form-input-xl": `${genUiSizes(xl as ElSizeBase)}`,
		"form-input-bordered": `${genBorderColor({ appearance, color: "gray", border: { shade: inputBdr.normal?.shade as ColorShade, dark: inputBdr.normal?.dark } })}`,
		"form-input-bordered-light": `${genBorderColor({ appearance, color: "gray", border: { shade: inputBdr.light?.shade as ColorShade, dark: inputBdr.light?.dark } })}`,
		"form-input-bordered-high": `${genBorderColor({ appearance, color: "gray", border: { shade: inputBdr.high?.shade as ColorShade, dark: inputBdr.high?.dark } })}`,
		"form-input-bordered-higher": `${genBorderColor({ appearance, color: "gray", border: { shade: inputBdr.higher?.shade as ColorShade, dark: inputBdr.higher?.dark } })}`,

		"input-placeholder-light": `${getPlaceHolder({ appearance, placeholder: { shade: placeHolder.light?.shade as ColorShade, dark: placeHolder.light?.dark } })}`,
		"input-placeholder-lighter": `${getPlaceHolder({ appearance, placeholder: { shade: placeHolder.lighter?.shade as ColorShade, dark: placeHolder.lighter?.dark } })}`,
		"input-placeholder-lightest": `${getPlaceHolder({ appearance, placeholder: { shade: placeHolder.lightest?.shade as ColorShade, dark: placeHolder.lightest?.dark } })}`,
	};

	return [inputs];
};

export { getFormInputShortcuts, type Input };
