import type { SharedVariant, UiConfig } from "@/types"
import { getConfigValue } from "@/utils"
import { genVariantOutline, genVariantSoft, genVariantSolid, genVariantSubtle } from "../helpers"
import { helperDefaultValues } from "../helpers"
import { defaultBadgeSizes } from "./const"
import type { Kdb } from "./types"


const getKdbShortcuts = ({ kdb: kbd, sharedConfig, uiConfig }: { kdb?: Kdb, sharedConfig?: SharedVariant, uiConfig: UiConfig }) => {
    const { xs, sm, md, xl, lg } = kbd?.sizes || defaultBadgeSizes
    const solidShades = kbd?.solid || sharedConfig?.solid || helperDefaultValues.defaultSolidShades
    const soft = kbd?.soft || sharedConfig?.soft || helperDefaultValues.generalSoft
    const subtle = kbd?.subtle || sharedConfig?.subtle || helperDefaultValues.defaultSubtle
    const outline = kbd?.outline || sharedConfig?.outline || helperDefaultValues.defaultOutlineELement

    const graySolid = kbd?.graySolid || sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades
    const graySubtle = kbd?.graySubtle || sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray
    const graySoft = kbd?.graySoft || sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const grayOutline = kbd?.grayOutline || sharedConfig?.outlineGray || helperDefaultValues.defaultOutlineGrayELement


    const appearance = uiConfig.appearance

    const kbds = {
        'kbd': "relative",
        'kbd-xs': `py-${getConfigValue(xs?.py)} px-${getConfigValue(xs?.px)} text-${xs?.textSize}`,
        'kbd-sm': `py-${getConfigValue(sm?.py)} px-${getConfigValue(sm?.px)} text-${sm?.textSize}`,
        'kbd-md': `py-${getConfigValue(md?.py)} px-${getConfigValue(md?.px)} text-${md?.textSize}`,
        'kbd-lg': `py-${getConfigValue(lg?.py)} px-${getConfigValue(lg?.px)} text-${lg?.textSize}`,
        'kbd-xl': `py-${getConfigValue(xl?.py)} px-${getConfigValue(xl?.px)} text-${xl?.textSize}`,
    }

    const dynamicKbd: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^kbd-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, solidShades, graySolid })}`],
        [/^kbd-outline(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantOutline({ color, appearance, outline, grayOutline })}`],
        [/^kbd-subtle(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSubtle({ color, appearance, subtle, graySubtle })}`],
        [/^kbd-soft(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSoft({ color, appearance, soft, graySoft })}`],
    ]

    return [
        kbds,
        ...dynamicKbd
    ]
}

export { getKdbShortcuts, Kdb }
