import type { BtnIconBase, BtnSizeBase, Button } from "./types"
import { genBtnVariantOutline, genBtnVariantSolid, genBtnVariantSoft, genBtnVariantGhost, genBtnVariantWhite, genBtnVariantSolidGradient } from "./helpers"
import { getConfigValue } from "@/utils"
import { btnCongig } from "./const"
import { genFocusVisibleRing, getRingBase } from "../shortcut_helper"

import type { SharedFormConfig, UiConfig } from "@/types"
import type { Shortcut } from "unocss"
import { isValidColor } from "@/utils/colors-utils"

const getBtnSizeInfo = (sizeVariant: BtnSizeBase) => {
    return `h-${getConfigValue(sizeVariant.height)} px-${getConfigValue(sizeVariant.px)} text-${sizeVariant.textSize}`
}
const getBtnIconSizeInfo = (sizeVariant: BtnIconBase) => {
    return `truncate justify-center size-${getConfigValue(sizeVariant.size)} text-${sizeVariant.textSize}`
}

const getBtnShortcuts = ({ button, uiConfig, formConfig }: { button?: Button, formConfig?: SharedFormConfig, uiConfig: UiConfig }) => {
    const { xs, sm, md, xl, lg } = button?.size || btnCongig.btnSizes
    const { xs: iconXs, sm: iconSm, md: iconMd, lg: iconLg, xl: iconXl } = button?.btnIcon || btnCongig.btnIconSizes
    const solidShade = button?.solidShade || btnCongig.solidShade
    const graySolid = button?.solidShadeGray || btnCongig.graySolidShade
    const ghost = button?.ghost || btnCongig.ghostConfig
    const grayGhost = button?.grayGhost || btnCongig.ghostGrayCongif
    const soft = button?.soft || btnCongig.softConfig
    const graySoft = button?.graySoft || btnCongig.softGrayConfig
    const grayGradient = button?.grayGradient || btnCongig.solidGradientGray
    const gradient = button?.gradient || btnCongig.solidGradient
    const outlineBtn = button?.outline || btnCongig.btnOutline
    const outlineBtnGray = button?.outlineGray || btnCongig.btnGrayOutline
    const btnWhite = button?.btnWhite || btnCongig.defaultBtnWhite
    const appearance = uiConfig.appearance
    const focusRing = button?.ring || formConfig?.ring || btnCongig.ringConfig
    const focusRingGray = button?.ringGray || formConfig?.ring || btnCongig.ringGrayConfig
    const ringBase = button?.ringBase || formConfig?.ringBase || btnCongig.ringBase


    const btns = {
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        'btn': "flex items-center disabled-opacity-50 disabled-cursor-not-allowed disabled-hover-opacity-70 outline-0 outline-transparent",
        'btn-xs': `${getBtnSizeInfo(xs as BtnSizeBase)}`,
        'btn-sm': `${getBtnSizeInfo(sm as BtnSizeBase)}`,
        'btn-md': `${getBtnSizeInfo(md as BtnSizeBase)}`,
        'btn-lg': `${getBtnSizeInfo(lg as BtnSizeBase)}`,
        'btn-xl': `${getBtnSizeInfo(xl as BtnSizeBase)}`,
        'btn-icon-xs': `${getBtnIconSizeInfo(iconXs as BtnIconBase)}`,
        'btn-icon-sm': `${getBtnIconSizeInfo(iconSm as BtnIconBase)}`,
        'btn-icon-md': `${getBtnIconSizeInfo(iconMd as BtnIconBase)}`,
        'btn-icon-lg': `${getBtnIconSizeInfo(iconLg as BtnIconBase)}`,
        'btn-icon-xl': `${getBtnIconSizeInfo(iconXl as BtnIconBase)}`,
        'btn-white': `${genBtnVariantWhite({ solid: btnWhite, appearance })}`
    }

    const getRing = (color: string) => `${getRingBase(appearance, ringBase.size, ringBase.offset)} ${genFocusVisibleRing(color, appearance, focusRing, focusRingGray)}`

    const dynamicBtns: Shortcut[] = [
        [/^btn-solid(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
            const shades = color === "gray" ? graySolid : solidShade
            if (isValidColor(color, theme)) return `${genBtnVariantSolid({ color, shades: shades, appearance })} ${getRing(color)}`
        }, { autocomplete: ['btn-solid', 'btn-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        [/^btn-outline(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
            const shades = color === 'gray' ? outlineBtnGray : outlineBtn
            if (isValidColor(color, theme)) return `${getRing(color)} ${genBtnVariantOutline({ color, appearance, outlineShades:shades })}`
        }, { autocomplete: ['btn-outline', 'btn-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        [/^btn-soft(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
            const softShades = color === "gray" ? graySoft : soft
            if (isValidColor(color, theme)) return `${getRing(color)} ${genBtnVariantSoft({ color, appearance, ghostOrSoft: softShades })}`
        }, { autocomplete: ['btn-soft', 'btn-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        [/^btn-ghost(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
            const ghostShades = color==="gray" ? grayGhost : ghost
            if (isValidColor(color, theme)) return `${getRing(color)} ${genBtnVariantGhost({ color, appearance, ghost: ghostShades })}`
        }, { autocomplete: ['btn-ghost', 'btn-ghost-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        [/^btn-gradient(-(\S+))?$/, ([, , color = 'primary'], { theme }) => {
            const gradientShades = color === "gray" ? grayGradient : gradient
            if (isValidColor(color, theme)) return `${getRing(color)} ${genBtnVariantSolidGradient({ color, gradientShades, appearance })}`
        }, { autocomplete: ['btn-gradient', 'btn-gradient-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        // [/^btn-radial(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantSoft({ color, appearance, ghostOrSoft: soft, graySoft })}`],
        // [/^btn-ss(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantGhost({ color, appearance, ghost: ghost, grayGhost })}`],
        // [/^btn-metal(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantOutline({ color, appearance, outlineBtn, outlineBtnGray })}`],

    ]

    return [
        btns,
        ...dynamicBtns
    ]
}

export { getBtnShortcuts, type Button }
