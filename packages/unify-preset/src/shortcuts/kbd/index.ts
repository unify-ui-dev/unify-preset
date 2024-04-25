import type { SharedVariant, UiConfig } from "@/types"
import { getConfigValue } from "@/utils"
import { genVariantOutline, genVariantSoft, genVariantSolid, genVariantSubtle } from "../helpers"
import { helperDefaultValues } from "../helpers"
import { defaultBadgeSizes } from "./const"
import type { Kbd } from "./types"
import { isValidColor } from "@/utils/colors-utils"
import type { Shortcut } from "unocss"

const getKdbShortcuts = ({ kdb: kbd, sharedConfig, uiConfig }: { kdb?: Kbd, sharedConfig?: SharedVariant, uiConfig: UiConfig }) => {
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
        'kbd-xs': `py-${getConfigValue(xs?.py)} px-${getConfigValue(xs?.px)} text-${xs?.textSize}`,
        'kbd-sm': `py-${getConfigValue(sm?.py)} px-${getConfigValue(sm?.px)} text-${sm?.textSize}`,
        'kbd-md': `py-${getConfigValue(md?.py)} px-${getConfigValue(md?.px)} text-${md?.textSize}`,
        'kbd-lg': `py-${getConfigValue(lg?.py)} px-${getConfigValue(lg?.px)} text-${lg?.textSize}`,
        'kbd-xl': `py-${getConfigValue(xl?.py)} px-${getConfigValue(xl?.px)} text-${xl?.textSize}`,
    }

    const dynamicKbd: Shortcut[] = [
        [/^kbd-solid(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: graySolid })}`
        }, { autocomplete: ['kbd-solid', 'kbd-solid-$colors'] }],
        [/^kbd-outline(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantOutline({ color, appearance, outlineColor: outline, outlineGray: grayOutline })}`
        }, { autocomplete: ['kbd-outline', 'kbd-outline-$colors'] }],
        [/^kbd-subtle(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSubtle({ color, appearance, subtle, graySubtle })}`
        }, { autocomplete: ['kbd-subtle', 'kbd-subtle-$colors'] }],
        [/^kbd-soft(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSoft({ color, appearance, soft, graySoft })}`
        }, { autocomplete: ['kbd-soft', 'kbd-soft-$colors'] }],
    ]
    return [
        kbds,
        ...dynamicKbd
    ]
}

export { getKdbShortcuts, type Kbd }
