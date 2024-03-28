import type { Appearance, SharedVariant } from "@/types"

import { genOutline, genVariantOutline, genVariantSoft, genVariantSolid, genVariantSubtle } from "../helpers"
import { helperDefaultValues } from "../helpers"

import type { Accordion } from "./types"
import { genDividerY } from "./helper"
import { defaultAcValues } from "./const"
import { getConfigValue } from "@/utils"



const getAccordionShortcuts = (accordion?: Accordion, sharedConfig?: SharedVariant, uiConfig?: { appearance?: Appearance }) => {
    const solidShade = accordion?.solid || sharedConfig?.solid || helperDefaultValues.defaultSolidShades
    const soft = accordion?.soft || sharedConfig?.soft || helperDefaultValues.generalSoft
    const subtle = accordion?.subtle || sharedConfig?.subtle || helperDefaultValues.defaultSubtle
    const outline = accordion?.outline || sharedConfig?.outline || helperDefaultValues.defaultOutlineELement

    const solidGray = accordion?.solidGray || sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades
    const graySoft = accordion?.graySoft || sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const graySubtle = accordion?.graySubtle || sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray
    const grayOutline = accordion?.outline || sharedConfig?.outlineGray || helperDefaultValues.defaultOutlineGrayELement

    const softActive = accordion?.softActive || sharedConfig?.softActive || helperDefaultValues.generalSoft
    const subtleActive = accordion?.subtleActive || sharedConfig?.subtleActive || helperDefaultValues.defaultSubtle
    const graySoftActive = accordion?.graySoftActive || sharedConfig?.graySoftActive || helperDefaultValues.generalSoftGrayActive
    const graySubtleActive = accordion?.graySubtleActive || sharedConfig?.graySubtleActive || helperDefaultValues.defaultSubtleGrayActive


    const appearance = uiConfig?.appearance || "both"

    const grayDivider = accordion?.grayDivider || defaultAcValues.defaultDividerGray
    const coloredDivider = accordion?.colorDivider || defaultAcValues.defaultDividerColor
    const itemWithBorder = accordion?.itemWithBorderColor || defaultAcValues.itemWithBorderGray
    const itemWithBorderColor = accordion?.itemWithBorderColor || defaultAcValues.itemWithBorder
    const accordions = {
        
    }

    const dynamicAccordions: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^accordion-wrapper(-(\S+))?$/, ([, , size = 4]) => `relative flex flex-col gap-y-${getConfigValue(size)}`],
        [/^accordion-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, solidShades: solidShade, graySolid: solidGray })}`],
        [/^accordion-outline(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantOutline({ color, appearance, outline, grayOutline })}`],
        [/^accordion-subtle(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSubtle({ color, appearance, subtle, graySubtle })}`],
        [/^accordion-soft(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSoft({ color, appearance, soft, graySoft })}`],
        [/^accordion-wrapper-joined(-(\S+))?$/, ([, , color = 'gray']) => `divide-y ${genDividerY({ color: color, appearance, divider: grayDivider, colorDivider: coloredDivider })}`],
        [/^accordion-item-border-bottom(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ appearance, color, prefix: itemWithBorder.prefix, border: { ...itemWithBorder.border }, colorBorder: { ...itemWithBorderColor.border } })})}`],
        [/^accordion-item-soft-active(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSoft({ color, appearance, soft: softActive, graySoft: graySoftActive })}`],
        [/^accordion-item-subtle-active(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSubtle({ color, appearance, subtle: subtleActive, graySubtle: graySubtleActive })}`],
    ]

    return [
        accordions,
        ...dynamicAccordions
    ]
}

export { getAccordionShortcuts, Accordion }
