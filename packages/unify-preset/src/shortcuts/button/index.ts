import type { Button } from "./types"
import { genBtnVariantOutline, genBtnVariantSolid, genBtnVariantSoft, genBtnVariantGhost, genBtnVariantWhite, genBtnVariantSolidGradient } from "./helpers"
import { getConfigValue } from "@/utils"
import { btnCongig } from "./const"
import { genVariantFocusRing, getRingBase } from "../shortcut_helper"

import type { SharedFormConfig, UiConfig } from "@/types"


const getBtnShortcuts = ({ button, uiConfig, formConfig }: { button?: Button, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {
    const { xs, sm, md, xl, lg } = button?.size || btnCongig.btnSizes
    const { xs: iconXs, sm: iconSm, md: iconMd, lg: iconLg, xl: iconXl } = button?.btnIcon || btnCongig.btnIconSizes
    const solidShade = button?.solidShade || btnCongig.solidShade
    const graySolid = button?.solidShadeGray || btnCongig.graySolidShade
    const ghost = button?.ghost || btnCongig.ghostConfig, grayGhost = button?.grayGhost || btnCongig.ghostGrayCongif
    const soft = button?.soft || btnCongig.softConfig, graySoft = button?.graySoft || btnCongig.softGrayConfig

    const grayGradient = button?.grayGradient || btnCongig.solidGradientGray, gradient = button?.gradient || btnCongig.solidGradient

    const outlineBtn = button?.outline || btnCongig.btnOutline, outlineBtnGray = button?.outlineGray || btnCongig.btnGrayOutline
    const btnWhite = button?.btnWhite || btnCongig.defaultBtnWhite

    const appearance = uiConfig.appearance

    const useRing = button?.useRing || formConfig?.useRingForAll || btnCongig.useRing

    const focusRing = button?.ring || formConfig?.ring || btnCongig.ringConfig,
        focusRingGray = button?.ringGray || formConfig?.ring || btnCongig.ringGrayConfig
    const ringBase = button?.ringBase || formConfig?.ringBase || btnCongig.ringBase


    const btns = {
        'btn': `flex items-center disabled-opacity-50 disabled-cursor-not-allowed disabled-hover-opacity-70 focus-outline-offset-2 ${getRingBase(appearance, ringBase.size, ringBase.offset)}`,
        'btn-xs': `h-${getConfigValue(xs?.height)} px-${getConfigValue(xs?.px)} text-${xs?.textSize}`,
        'btn-sm': `h-${getConfigValue(sm?.height)} px-${getConfigValue(sm?.px)} text-${sm?.textSize}`,
        'btn-md': `h-${getConfigValue(md?.height)} px-${getConfigValue(md?.px)} text-${md?.textSize}`,
        'btn-lg': `h-${getConfigValue(lg?.height)} px-${getConfigValue(lg?.px)} text-${lg?.textSize}`,
        'btn-xl': `h-${getConfigValue(xl?.height)} px-${getConfigValue(xl?.px)} text-${xl?.textSize}`,
        'btn-icon-xs': `truncate justify-center size-${getConfigValue(iconXs?.size)} text-${iconXs?.textSize}`,
        'btn-icon-sm': `truncate justify-center size-${getConfigValue(iconSm?.size)} text-${iconSm?.textSize}`,
        'btn-icon-md': `truncate justify-center size-${getConfigValue(iconMd?.size)} text-${iconMd?.textSize}`,
        'btn-icon-lg': `truncate justify-center size-${getConfigValue(iconLg?.size)} text-${iconLg?.textSize}`,
        'btn-icon-xl': `truncate justify-center size-${getConfigValue(iconXl?.size)} text-${iconXl?.textSize}`,
        'btn-white': `${genBtnVariantWhite({ solid: btnWhite, appearance })}`
    }

    const getRing = (color: string) => useRing ? `btn-focus-ring-${color}` : ''

    const dynamicBtns: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^btn-focus-ring(-(\S+))?$/, ([, , color = 'primary']) => `${genVariantFocusRing(color, appearance, focusRing, focusRingGray)}`],
        [/^btn-solid(-(\S+))?$/, ([, , color = 'primary']) => `${getRing(color)} ${genBtnVariantSolid({ color, solid: solidShade, graySolid, appearance })} `],
        [/^btn-outline(-(\S+))?$/, ([, , color = 'primary']) => `${getRing(color)} ${genBtnVariantOutline({ color, appearance, outlineBtn, outlineBtnGray })}`],
        [/^btn-soft(-(\S+))?$/, ([, , color = 'primary']) => `${getRing(color)} ${genBtnVariantSoft({ color, appearance, ghostOrSoft: soft, graySoft })}`],
        [/^btn-ghost(-(\S+))?$/, ([, , color = 'primary']) => `${getRing(color)} ${genBtnVariantGhost({ color, appearance, ghost: ghost, grayGhost })}`],
        [/^btn-gradient-solid(-(\S+))?$/, ([, , color = 'primary']) => `${getRing(color)} ${genBtnVariantSolidGradient({ color, gradient, grayGradient, appearance })}`],
        // [/^btn-gradient-soft(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantSoft({ color, appearance, ghostOrSoft: soft, graySoft })}`],
        // [/^btn-gradient-ghost(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantGhost({ color, appearance, ghost: ghost, grayGhost })}`],
        // [/^btn-gradient-outline(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantOutline({ color, appearance, outlineBtn, outlineBtnGray })}`],

    ]

    return [
        btns,
        ...dynamicBtns
    ]
}

export { getBtnShortcuts, Button }
