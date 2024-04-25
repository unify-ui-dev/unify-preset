import type { UiConfig } from "@/types"
import { defaultInput } from "./const"
import { getInputGrayVariant, getInputBorder, getInputOutlineFocus, getPlaceHolder, getTextColor } from "./helper"
import type { Input } from "./types"
import { isValidColor } from "@/utils/colors-utils"
import type { Shortcut } from "unocss"


const getFormInputShortcuts = ({ input, uiConfig }: { input?: Input, uiConfig: UiConfig }) => {
    const { size, solidGray, highGray, lightGray, higherGray, borderSize, outline, focusColor, focusGray, textColor, placeHolder, focusOutlineSize } = input || defaultInput
    const appearance = uiConfig.appearance
    const _2xs = size?.["2xs"]
    const xs = size?.xs
    const sm = size?.sm
    const md = size?.md
    const lg = size?.lg
    const xl = size?.xl

    const inputs = {
        'form-input': `transition-colors ease-linear duration-200 wfull  ${getTextColor({ appearance, textColor })} ${getPlaceHolder({ appearance, placeHolder: placeHolder })} `,
        'form-input-gray': `${getInputGrayVariant({ appearance, shades: { light: solidGray?.light, dark: solidGray?.dark } })}`,
        'form-input-high-gray': `${getInputGrayVariant({ appearance, shades: { light: highGray?.light, dark: highGray?.dark } })}`,
        'form-input-higher-gray': `${getInputGrayVariant({ appearance, shades: { light: higherGray?.light, dark: higherGray?.dark } })}`,
        'form-input-light-gray': `${getInputGrayVariant({ appearance, shades: { light: lightGray?.light, dark: lightGray?.dark } })}`,

        'form-input-2xs': `px-${_2xs?.padding?.x} py-${_2xs?.padding?.y} text-${_2xs?.textSize}`,
        'form-input-xs': `px-${xs?.padding?.x} py-${xs?.padding?.y} text-${xs?.textSize}`,
        'form-input-sm': `px-${sm?.padding?.x} py-${sm?.padding?.y} text-${sm?.textSize}`,
        'form-input-md': `px-${md?.padding?.x} py-${md?.padding?.y} text-${md?.textSize}`,
        'form-input-lg': `px-${lg?.padding?.x} py-${lg?.padding?.y} text-${lg?.textSize}`,
        'form-input-xl': `px-${xl?.padding?.x} py-${xl?.padding?.y} text-${xl?.textSize}`,
    }
    const inputOutline_ = `b-${borderSize} outline-none focus-outline-0 outline-offset-0 focus-b-${focusOutlineSize} ${getInputBorder({ appearance, shades: { light: outline?.light || "200", dark: outline?.dark || "800" } })} `
    const dynamicInputs: Shortcut[] = [
        [/^form-input-outline(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
            const fColor = color === "gray" ? focusGray : focusColor
            if (isValidColor(color, theme)) return `${inputOutline_} ${getInputOutlineFocus({ color, appearance, shades: { light: `${fColor?.light}`, dark: `${fColor?.dark}` } })}`
        }, { autocomplete: ['form-input-outline', 'form-input-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
    ]
    return [
        inputs,
        ...dynamicInputs
    ]
}

export { getFormInputShortcuts, type Input }