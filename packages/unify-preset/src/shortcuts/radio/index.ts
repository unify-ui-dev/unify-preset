import type { SharedFormConfig, UiConfig } from "@/types"
import { genFocusVisibleRing, getRingBase } from "../shortcut_helper"
import type { Radio } from "./types"
import { getRadioBase } from "./helper"
import { helperDefaultValues } from "../helpers"


const getFormRadioShortcuts = ({ input, formConfig, uiConfig }: { input?: Radio, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {

    const appearance = uiConfig.appearance

    const ring = input?.ring || formConfig?.ring || helperDefaultValues.ringConfig
    const ringGray = input?.ring || formConfig?.grayRing || helperDefaultValues.ringGrayConfig
    const ringSize = input?.ringBase || formConfig?.ringBase || helperDefaultValues.ringBase

    const baseUtilities = `disabled-op50 disabled-cursor-not-allowed ${getRingBase(appearance, ringSize.size, ringSize.offset)}`
    const checkboxes = {
        
    }


    const dynamicCheckboxes: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^form-radio(-(\S+))?$/, ([, , color = 'primary']) => `${baseUtilities} ${getRadioBase(appearance, color)} focus:ring-0 focus:ring-transparent focus:ring-offset-transparent ${genFocusVisibleRing(color, appearance, ring, ringGray)}`],
    ]
    return [
        checkboxes,
        ...dynamicCheckboxes
    ]
}

export { getFormRadioShortcuts, Radio }