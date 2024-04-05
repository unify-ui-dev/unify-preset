import type { SharedFormConfig, UiConfig } from "@/types"
import { genFocusVisibleRing, getRingBase } from "../shortcut_helper"
import type { Checkbox } from "./types"
import { getChecboxBase } from "./helper"
import { helperDefaultValues } from "../helpers"


const getFormCheckboxShortcuts = ({ input, formConfig, uiConfig }: { input?: Checkbox, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {

    const appearance = uiConfig.appearance

    const ring = input?.ring || formConfig?.ring || helperDefaultValues.ringConfig
    const ringGray = input?.ring || formConfig?.grayRing || helperDefaultValues.ringGrayConfig
    const ringBase = input?.ringBase || formConfig?.ringBase || helperDefaultValues.ringBase

    const baseUtilities = `disabled-op50 disabled-cursor-not-allowed ${getRingBase(appearance, ringBase.size, ringBase.offset)}`
    const checkboxes = {
        
    }


    const dynamicCheckboxes: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^form-checkbox(-(\S+))?$/, ([, , color = 'primary']) => `${baseUtilities} ${getChecboxBase(appearance, color)} focus:ring-0 focus:ring-transparent focus:ring-offset-transparent ${genFocusVisibleRing(color, appearance, ring, ringGray)}`],
    ]
    return [
        checkboxes,
        ...dynamicCheckboxes
    ]
}

export { getFormCheckboxShortcuts, Checkbox }