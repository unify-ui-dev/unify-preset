import type { BtnIconBase, BtnSizeBase, Button } from "./types"
import { genBtnVariantOutline, genBtnVariantSolid, genBtnVariantSoft, genBtnVariantGhost, genBtnVariantWhite, genBtnVariantSolidGradient } from "./helpers"
import { getConfigValue } from "@/utils"
import { btnCongig } from "./const"
import { genVariantFocusRing, getRingBase } from "../shortcut_helper"

import type { SharedFormConfig, UiConfig } from "@/types"

const getBtnSizeIngo = (sizeVariant: BtnSizeBase) => {
    return `h-${getConfigValue(sizeVariant.height)} px-${getConfigValue(sizeVariant.px)} text-${sizeVariant.textSize}`
}
const getBtnIconSizeIngo = (sizeVariant: BtnIconBase) => {
    return `truncate justify-center size-${getConfigValue(sizeVariant.size)} text-${sizeVariant.textSize}`
}

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
        'btn': `flex items-center disabled-opacity-50 disabled-cursor-not-allowed disabled-hover-opacity-70 outline-0 outline-transparent focus-outline-offset-2`,
        'btn-xs': `${getBtnSizeIngo(xs as BtnSizeBase)}`,
        'btn-sm': `${getBtnSizeIngo(sm as BtnSizeBase)}`,
        'btn-md': `${getBtnSizeIngo(md as BtnSizeBase)}`,
        'btn-lg': `${getBtnSizeIngo(lg as BtnSizeBase)}`,
        'btn-xl': `${getBtnSizeIngo(xl as BtnSizeBase)}`,
        'btn-icon-xs': `${getBtnIconSizeIngo(iconXs as BtnIconBase)}`,
        'btn-icon-sm': `${getBtnIconSizeIngo(iconSm as BtnIconBase)}`,
        'btn-icon-md': `${getBtnIconSizeIngo(iconMd as BtnIconBase)}`,
        'btn-icon-lg': `${getBtnIconSizeIngo(iconLg as BtnIconBase)}`,
        'btn-icon-xl': `${getBtnIconSizeIngo(iconXl as BtnIconBase)}`,
        'btn-white': `${genBtnVariantWhite({ solid: btnWhite, appearance })}`
    }

    const getRing = (color: string) => useRing ? `btn-focus-ring-${color}` : ''

    const dynamicBtns: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^btn-focus-ring(-(\S+))?$/, ([, , color = 'primary']) => `${getRingBase(appearance, ringBase.size, ringBase.offset)} ${genVariantFocusRing(color, appearance, focusRing, focusRingGray)}`],
        [/^btn-solid(-(\S+))?$/, ([, , color = 'primary']) => `${getRing(color)} ${genBtnVariantSolid({ color, solid: solidShade, graySolid, appearance })}`],
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
