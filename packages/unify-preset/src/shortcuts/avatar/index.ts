import type { Appearance, SharedVariant } from "@/types"
import { getConfigValue } from "@/utils"
import { genVariantOutline, genVariantSoft, genVariantSolid, genVariantSubtle } from "../helpers"
import { helperDefaultValues } from "../helpers"

import type { Avatar } from "./types"



const getAvatarShortcuts = (avatar?: Avatar, sharedConfig?: SharedVariant, uiConfig?: { appearance?: Appearance }) => {

    const { xs, sm, md, xl, lg } = avatar?.sizes || { xs: 6.5, sm: 8, md: 9.5, lg: 10.5, xl: 12 }

    const solid = avatar?.placeHolderSolid || sharedConfig?.solid || helperDefaultValues.defaultSolidShades
    const soft = avatar?.placeHolderSoft || sharedConfig?.soft || helperDefaultValues.generalSoft
    const subtle = avatar?.placeHoldergraySubtle || sharedConfig?.subtle || helperDefaultValues.defaultSubtle
    const outline = avatar?.placeHolderOutline || sharedConfig?.outline || helperDefaultValues.defaultOutlineELement

    const solidGray = avatar?.placeHolderSolidGray || sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades
    const softGray = avatar?.placeHoldergraySoft || sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const outlineGray = avatar?.placeHolderOutlineGray || sharedConfig?.outlineGray || helperDefaultValues.defaultOutlineGrayELement
    const subtleGray = avatar?.placeHoldergraySubtle || sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray



    const appearance = uiConfig?.appearance || "both"

    const avatars = {
        'avatar': "relative",
        'avatar-fit-none': "object-none",
        'avatar-fit-fill': "object-fill",
        'avatar-fit-cover': "object-cover",
        'avatar-fit-contain': "object-contain",
        'avatar-fit-scale-down': "object-scale-down",
        'avatar-xs': `size-${getConfigValue(xs)}`,
        'avatar-sm': `size-${getConfigValue(sm)}`,
        'avatar-md': `size-${getConfigValue(md)}`,
        'avatar-lg': `size-${getConfigValue(lg)}`,
        'avatar-xl': `size-${getConfigValue(xl)}`,
        'avatar-placeholder': "flex items-center justify-center truncate",
        'avatar-placeholder-xs': `size-${getConfigValue(xs)} text-xs`,
        'avatar-placeholder-sm': `size-${getConfigValue(sm)} text-sm`,
        'avatar-placeholder-md': `size-${getConfigValue(md)} text-sm`,
        'avatar-placeholder-lg': `size-${getConfigValue(lg)} text-base`,
        'avatar-placeholder-xl': `size-${getConfigValue(xl)} text-base`,
    }

    const dynamicaAvatar: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^avatar-placeholder-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, colorShades: solid, grayShades: solidGray })}`],
        [/^avatar-placeholder-outline(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantOutline({ color, appearance, outlineColor: outline, outlineGray: outlineGray })}`],
        [/^avatar-placeholder-subtle(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSubtle({ color, appearance, subtle, graySubtle: subtleGray })}`],
        [/^avatar-placeholder-soft(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSoft({ color, appearance, soft, graySoft: softGray })}`],
    ]

    return [
        avatars,
        ...dynamicaAvatar
    ]
}

export { getAvatarShortcuts, Avatar }
