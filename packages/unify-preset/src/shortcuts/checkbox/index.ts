import type { SharedFormConfig, UiConfig } from "@/types"
import { genFocusVisibleRing, getRingBase } from "../shortcut_helper"
import type { Checkbox } from "./types"
import { checkboxCongig } from "./const"
import { getChecboxBase } from "./helper"


const getFormCheckboxShortcuts = ({ input, formConfig, uiConfig }: { input?: Checkbox, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {

    const appearance = uiConfig.appearance

    const ring = input?.ring || formConfig?.ring || checkboxCongig.ringConfig
    const ringGray = input?.ring || formConfig?.grayRing || checkboxCongig.ringGrayConfig
    const ringSize = input?.ringBase || formConfig?.ringBase || checkboxCongig.ringBase

    const baseUtilities = `disabled-op50 disabled-cursor-not-allowed ${getRingBase(appearance, ringSize.size, ringSize.offset)}`
    const checkboxes = {
        
    }


    const dynamicCheckboxes: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^form-checkbox(-(\S+))?$/, ([, , color = 'primary']) => `${baseUtilities} ${getChecboxBase(appearance, color)} ${genFocusVisibleRing(color, appearance, ring, ringGray)}`],
    ]
    return [
        checkboxes,
        ...dynamicCheckboxes
    ]
}

export { getFormCheckboxShortcuts, Checkbox }