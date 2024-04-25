import type { SharedFormConfig, UiConfig } from "@/types"
import { genFocusVisibleRing, getRingBase } from "../shortcut_helper"
import type { Checkbox } from "./types"
import { getChecboxBase } from "./helper"
import { helperDefaultValues } from "../helpers"
import type { Shortcut } from "unocss"
import { isValidColor } from "@/utils/colors-utils"
import { checkboxCongig } from "./const"


const getFormCheckboxShortcuts = ({ checkbox, formConfig, uiConfig }: { checkbox?: Checkbox, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {

    const appearance = uiConfig.appearance

    const ring = checkbox?.ring || formConfig?.ring || checkboxCongig.ringConfig || helperDefaultValues.ringConfig
    const ringGray = checkbox?.ring || formConfig?.grayRing ||checkboxCongig.ringGrayConfig  || helperDefaultValues.ringGrayConfig
    const ringBase = checkbox?.ringBase || formConfig?.ringBase || checkboxCongig.ringBase || helperDefaultValues.ringBase

    const baseUtilities = `disabled-op50 disabled-cursor-not-allowed ${getRingBase(appearance, ringBase.size, ringBase.offset)} focus:ring-0 outline-0 focus-outline-none`

    const dynamicCheckboxes: Shortcut[] = [
        [/^form-checkbox(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
            if (isValidColor(color, theme)) return `${baseUtilities} ${getChecboxBase(appearance, color)} ${genFocusVisibleRing(color, appearance, ring, ringGray)}`
        },{autocomplete:['form-checkbox','form-checkbox-(primary|secondary|accent|success|warning|info|danger|gray|neutral)']}],
    ]
    return [
        ...dynamicCheckboxes
    ]
}

export { getFormCheckboxShortcuts, type Checkbox }