import type { SharedVariant } from "@/types"
import { getConfigValue } from "@/utils"
import { genVariantOutline, genVariantSoft, genVariantSolid, genVariantSubtle } from "../helpers"
import { helperDefaultValues } from "../helpers"

import type { Alert } from "./types"



const getAlertShortcuts = (alert?: Alert, sharedConfig?: SharedVariant, uiConfig?: { appearance?: "both" | "light" | "dark", cssPaletteColor?: "default" | "cssVar" }) => {
    const solidShade = alert?.solid || sharedConfig?.solid || helperDefaultValues.defaultSolidShades
    const soft = alert?.soft || sharedConfig?.soft || helperDefaultValues.generalSoft
    const subtle = alert?.subtle || sharedConfig?.subtle || helperDefaultValues.defaultSubtle
    const outline = alert?.outline || sharedConfig?.outline || helperDefaultValues.defaultOutlineELement

    const graySolid = alert?.solidGray || sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades
    const graySoft = alert?.graySoft || sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const graySubtle = alert?.graySubtle || sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray
    const grayOutline = alert?.outline || sharedConfig?.outlineGray || helperDefaultValues.defaultOutlineGrayELement


    const padding = alert?.padding || 4

    const appearance = uiConfig?.appearance || "both"

    const alerts = {
        'alert': `p-${getConfigValue(padding)}`,
    }

    const dynamicAlerts: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^alert-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance,  solidShades: solidShade, graySolid })}`],
        [/^alert-outline(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantOutline({ color, appearance,  outline, grayOutline })}`],
        [/^alert-subtle(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSubtle({ color, appearance,  subtle, graySubtle })}`],
        [/^alert-soft(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSoft({ color, appearance,  soft, graySoft })}`],
    ]

    return [
        alerts,
        ...dynamicAlerts
    ]
}

export { getAlertShortcuts, Alert }
