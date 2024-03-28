import type { SharedFormConfig, UiConfig } from "@/types"
import { genFocusVisibleRing, getRingBase } from "../shortcut_helper"
import type { Radio } from "./types"
import { radioCongig } from "./const"
import { getRadioBase } from "./helper"


const getFormRadioShortcuts = ({ input, formConfig, uiConfig }: { input?: Radio, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {

    const appearance = uiConfig.appearance

    const ring = input?.ring || formConfig?.ring || radioCongig.ringConfig
    const ringGray = input?.ring || formConfig?.grayRing || radioCongig.ringGrayConfig
    const ringSize = input?.ringBase || formConfig?.ringBase || radioCongig.ringBase

    const baseUtilities = `disabled-op50 disabled-cursor-not-allowed ${getRingBase(appearance, ringSize.size, ringSize.offset)}`
    const checkboxes = {
        
    }


    const dynamicCheckboxes: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^form-radio(-(\S+))?$/, ([, , color = 'primary']) => `${baseUtilities} ${getRadioBase(appearance, color)} ${genFocusVisibleRing(color, appearance, ring, ringGray)}`],
    ]
    return [
        checkboxes,
        ...dynamicCheckboxes
    ]
}

export { getFormRadioShortcuts, Radio }