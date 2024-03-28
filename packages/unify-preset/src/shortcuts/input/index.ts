import type { SharedFormConfig, UiConfig } from "@/types"
import { genVariantFocusRing } from "../shortcut_helper"
import { defRingBase, defaultInput } from "./const"
import { getInputGrayVariant, getInputBorder, getInputOutlineFocus, getPlaceHolder, getTextColor, getInputRingBase } from "./helper"
import type { Input } from "./types"


const getFormInputShortcuts = ({ input, formConfig, uiConfig }: { input?: Input, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {
    const { size, solidGray, borderSize, outline, focusColor, focusGray, ring, ringGray, textColor, placeHolder, focusOutlineSize } = input || defaultInput
    const appearance = uiConfig.appearance
    const _2xs = size?.["2xs"]
    const xs = size?.xs
    const sm = size?.sm
    const md = size?.md
    const lg = size?.lg
    const xl = size?.xl

    const useRing = input?.useRing || formConfig?.useRingForAll || defaultInput.useRing

    const ringBase = input?.ringBase || formConfig?.ringBase || defRingBase
    const inputs = {
        'form-input': `transition-colors ease-linear duration-200 ${getTextColor({ appearance, textColor })} ${getPlaceHolder({ appearance, placeHolder: placeHolder })} `,
        'form-input-gray': `${getInputGrayVariant({ appearance, shades: { light: solidGray?.light, dark: solidGray?.dark } })}`,
        'form-input-2xs': `px-${_2xs?.padding?.x} py-${_2xs?.padding?.y} text-${_2xs?.textSize}`,
        'form-input-xs': `px-${xs?.padding?.x} py-${xs?.padding?.y} text-${xs?.textSize}`,
        'form-input-sm': `px-${sm?.padding?.x} py-${sm?.padding?.y} text-${sm?.textSize}`,
        'form-input-md': `px-${md?.padding?.x} py-${md?.padding?.y} text-${md?.textSize}`,
        'form-input-lg': `px-${lg?.padding?.x} py-${lg?.padding?.y} text-${lg?.textSize}`,
        'form-input-xl': `px-${xl?.padding?.x} py-${xl?.padding?.y} text-${xl?.textSize}`,
    }


    const inputOutline_ = `b-${borderSize} focus-b-transparent focus-outline focus-outline-${focusOutlineSize} ${getInputBorder({ appearance, shades: { light: outline?.light || "200", dark: outline?.dark || "800" } })} `
    const dynamicInputs: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^form-input-outline(-(\S+))?$/, ([, , color = 'primary']) => {
            const fColor = color === "gray" ? focusGray : focusColor
            return `${inputOutline_} ${getInputOutlineFocus({ color, appearance, shades: { light: `${fColor?.light}`, dark: `${fColor?.dark}` } })} ${useRing ? `${genVariantFocusRing(color, appearance, ring, ringGray)}` : ""}`
        }],
        [/^form-input-ring(-(\S+))?$/, ([, , color = 'primary']) => `${getInputRingBase(appearance, ringBase.size, ringBase.offset)} ${genVariantFocusRing(color, appearance, ring, ringGray)}`],
    ]
    return [
        inputs,
        ...dynamicInputs
    ]
}

export { getFormInputShortcuts, Input }