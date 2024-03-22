import type { button } from "./types"
import { genBtnVariantOutline, genBtnVariantOutlineGray, genBtnVariantSoftOrGost, genBtnVariantSoftGhostGray, genBtnVariantGhostSoftNeutral, genBtnVariantSolid, genBtnVariantSolidNeutral, genBtnVariantSolidGray } from "./helpers"
import { getConfigValue } from "@/utils"
import { defaultBtnGrayOutline, defaultBtnSizes, defaultGraySolidShade, defaultSolidShade, ghostDefaultCongif, ghostGrayDefaultCongif, ghostNeutralDefaultCongif, softDefaultConfig, softGrayDefaultConfig, softNeutralDefaultConfig, defaultBtnOutline } from "./const"
import { genVariantFocusRing, genBtnVariantFocusRingBlack, genVariantFocusRingGray } from "../shortcut_helper"

import type { appearance, colorPaletteProvider } from "@/types"


const getBtnShortcuts = (button?: button, uiConfig?: { appearance?: appearance, colorPaletteProvider?: colorPaletteProvider }) => {
    const { xs, sm, md, xl, lg } = button?.size || defaultBtnSizes
    const solidShade = button?.solidShade || defaultSolidShade
    const solidGrayShade = button?.solidShadeGray || defaultGraySolidShade
    const ghost = button?.ghost || ghostDefaultCongif
    const soft = button?.soft || softDefaultConfig
    const grayGhost = button?.grayGhost || ghostGrayDefaultCongif
    const graySoft = button?.graySoft || softGrayDefaultConfig
    const neutralGhost = button?.neutralGhost || ghostNeutralDefaultCongif
    const neutralSoft = button?.graySoft || softNeutralDefaultConfig
    const outlineBtn = button?.outline || defaultBtnOutline
    const outlineBtnGray = button?.outlineGray || defaultBtnGrayOutline
    const appearance = uiConfig?.appearance || "both"
    const colorPaletteProvider = uiConfig?.colorPaletteProvider || "default"

    const btns = {
        'btn': "flex items-center disabled-opacity-50 disabled-cursor-not-allowed disabled-hover-opacity-70",
        'btn-xs': `h-${getConfigValue(xs?.height)} px-${getConfigValue(xs?.px)}`,
        'btn-sm': `h-${getConfigValue(sm?.height)} px-${getConfigValue(sm?.px)}`,
        'btn-md': `h-${getConfigValue(md?.height)} px-${getConfigValue(md?.px)}`,
        'btn-lg': `h-${getConfigValue(lg?.height)} px-${getConfigValue(lg?.px)}`,
        'btn-xl': `h-${getConfigValue(xl?.height)} px-${getConfigValue(xl?.px)}`,

        'btn-solid-gray': `${genBtnVariantSolidGray({ shades: solidGrayShade, appearance, colorPaletteProvider })}`,
        'btn-solid-neutral': `${genBtnVariantSolidNeutral({ appearance, colorPaletteProvider })}`,
        'btn-ghost-gray': `${genBtnVariantSoftGhostGray({ appearance, ghostOrSoft: grayGhost, prefix:"ghost", colorPaletteProvider })}`,
        'btn-ghost-neutral': `${genBtnVariantGhostSoftNeutral({ appearance, ghostOrSoft: neutralGhost, colorPaletteProvider, prefix:"ghost" })}`,
        'btn-soft-gray': `${genBtnVariantSoftGhostGray({ appearance, ghostOrSoft: graySoft , prefix:"soft", colorPaletteProvider})}`,
        'btn-soft-neutral': `${genBtnVariantGhostSoftNeutral({ appearance, ghostOrSoft: neutralSoft, colorPaletteProvider, prefix:"soft" })}`,
        'btn-outline-gray': `${genBtnVariantOutlineGray({ appearance, outlineBtn: outlineBtnGray, colorPaletteProvider })}`,
        'btn-focus-ring-neutral': `${genBtnVariantFocusRingBlack(appearance, colorPaletteProvider)}`,
        'btn-focus-ring-gray': `${genVariantFocusRingGray(appearance, colorPaletteProvider)}`,
    }

    const dynamicBtns: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^btn-focus-ring(-(\S+))?$/, ([, , color = 'primary']) => `${genVariantFocusRing(color, appearance, colorPaletteProvider)}`],
        [/^btn-solid(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantSolid({ color, solidShade, appearance, colorPaletteProvider })}`],
        [/^btn-outline(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantOutline({ color, appearance, colorPaletteProvider, outlineBtn })}`],
        [/^btn-soft(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantSoftOrGost({ color, appearance, colorPaletteProvider, ghostOrSoft: soft })}`],
        [/^btn-ghost(-(\S+))?$/, ([, , color = 'primary']) => `${genBtnVariantSoftOrGost({ color, appearance, colorPaletteProvider, ghostOrSoft: ghost })}`],
    ]

    return [
        btns,
        ...dynamicBtns
    ]
}

export { getBtnShortcuts, button }
