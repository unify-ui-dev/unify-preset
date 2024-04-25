import type { Appearance, SharedVariant } from "@/types"
import { getConfigValue } from "@/utils"
import { genVariantOutline, genVariantSoft, genVariantSolid, genVariantSubtle } from "../helpers"
import { helperDefaultValues } from "../helpers"
import { defaultBadgeSizes } from "./const"
import type { Badge } from "./types"
import type { Shortcut } from "unocss"
import { isValidColor } from "@/utils/colors-utils"

const getBadgeShortcuts = (badge?: Badge, sharedConfig?: SharedVariant, uiConfig?: { appearance?: Appearance }) => {
    const { xs, sm, md, xl, lg } = badge?.sizes || defaultBadgeSizes
    const solidShades = badge?.solid || sharedConfig?.solid || helperDefaultValues.defaultSolidShades
    const soft = badge?.soft || sharedConfig?.soft || helperDefaultValues.generalSoft
    const subtle = badge?.subtle || sharedConfig?.subtle || helperDefaultValues.defaultSubtle
    const outline = badge?.outline || sharedConfig?.outline || helperDefaultValues.defaultOutlineELement

    const graySolid = badge?.graySolid || sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades
    const graySubtle = badge?.graySubtle || sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray
    const graySoft = badge?.graySoft || sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const grayOutline = badge?.grayOutline || sharedConfig?.outlineGray || helperDefaultValues.defaultOutlineGrayELement

    const appearance = uiConfig?.appearance || "both"
    const badges = {
        'badge-xs': `py-${getConfigValue(xs?.py)} px-${getConfigValue(xs?.px)} text-${xs?.textSize}`,
        'badge-sm': `py-${getConfigValue(sm?.py)} px-${getConfigValue(sm?.px)} text-${sm?.textSize}`,
        'badge-md': `py-${getConfigValue(md?.py)} px-${getConfigValue(md?.px)} text-${md?.textSize}`,
        'badge-lg': `py-${getConfigValue(lg?.py)} px-${getConfigValue(lg?.px)} text-${lg?.textSize}`,
        'badge-xl': `py-${getConfigValue(xl?.py)} px-${getConfigValue(xl?.px)} text-${xl?.textSize}`,
    }

    const dynamicBadges: Shortcut[] = [
        [/^badge-solid(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: graySolid })}`
        }, { autocomplete: ['badge-solid', 'badge-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        [/^badge-outline(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantOutline({ color, appearance, outlineColor: outline, outlineGray: grayOutline })}`
        }, { autocomplete: ['badge-outline', 'badge-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        [/^badge-subtle(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSubtle({ color, appearance, subtle, graySubtle })}`
        }, { autocomplete: ['badge-subtle', 'badge-subtle-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
        [/^badge-soft(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSoft({ color, appearance, soft, graySoft })}`
        }, { autocomplete: ['badge-soft', 'badge-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)'] }],
    ]
    return [
        badges,
        ...dynamicBadges
    ]
}

export { getBadgeShortcuts, type Badge }
