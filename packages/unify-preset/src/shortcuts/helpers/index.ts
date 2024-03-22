import type { appearance, colorPaletteProvider, elementOutline, soft, solidShade, subtle } from "@/types"
import { getConfigValue } from "@/utils"

import { defaultSubtle, defaultSubtleGray, generalSoftNeutral, getOutlineELement } from "./defaultValue"

export const genVariantSolid = ({ color, appearance, colorPaletteProvider: colorMode, solidShades }: { solidShades: solidShade, color: string, appearance: appearance, colorPaletteProvider: colorPaletteProvider }) => {
    const { light, dark } = solidShades
    const variantLight = `${appearance === "light" || appearance === "both" ?
        colorMode === "default" ?
            `bg-${color}-${light?.bgShade} text-white` :
            `bg-${color} text-white`
        : ""} `

    const variantDark = `${appearance === "dark" ?
        colorMode === "default" ?
            `bg-${color}-${dark?.bgShade} text-white` :
            `bg-${color} text-white`
        : appearance === "both" ?
            colorMode === "default" ?
                `dark-bg-${color}-${dark?.bgShade}` :
                `dark-bg-${color}` : ""}`
    return `${variantLight} ${variantDark}`
}
export const genVariantOutline = ({ color, appearance, colorPaletteProvider: colorMode, outline }: { color: string, appearance: appearance, colorPaletteProvider: colorPaletteProvider, outline: elementOutline }) => {
    const { borderSize, light, dark } = outline
    const borderSize_ = borderSize ? borderSize : 1
    const variantLight = `${appearance === "light" || appearance === "both" ?
        colorMode === "default" ?
            `bg-transparent border-${color}-${light?.borderShade} text-${color}-${light?.textShade}` :
            `bg-transparent border-${color} text-${color}`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        colorMode === "default" ?
            `bg-transparent border-${color}-${dark?.borderShade} text-${color}-${dark?.textShade}` :
            `bg-transparent border-${color}`
        : appearance === "both" ?
            colorMode === "default" ?
                `dark-border-${color}-${dark?.borderShade} dark-text-${color}-${dark?.textShade}` :
                `dark-border-${color}` : ""}`
    return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`
}
export const genVariantOutlineGray = ({ appearance, outline = getOutlineELement }: { appearance: appearance, outline: elementOutline }) => {
    return `${genVariantOutline({ color: "gray", appearance, colorPaletteProvider: "default", outline })}`
}

export const genVariantSoft = ({ color, colorPaletteProvider: colorMode, soft, appearance }: { color: string, appearance: appearance, colorPaletteProvider: colorPaletteProvider, soft: soft }) => {
    const { light, dark } = soft

    const variantLight = `${appearance === "light" || appearance === "both" ?
        colorMode === "default" ?
            `bg-${color}-${light?.bgShade}/${getConfigValue(light?.bgOpacity)}  text-${color}-${light?.textShade}` :
            `bg-${color}/${getConfigValue(dark?.bgOpacity)}  text-${color}`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        colorMode === "default" ?
            `bg-${color}-${dark?.bgShade}/${getConfigValue(dark?.bgOpacity)} text-${color}-${dark?.textShade}` :
            `bg-${color}/${getConfigValue(dark?.bgOpacity)} text-${color}`
        : appearance === "both" ?
            colorMode === "default" ?
                `dark-bg-${color}-${dark?.bgShade}/${getConfigValue(dark?.bgOpacity)} dark-text-${color}-${dark?.textShade}` :
                `dark-bg-${color}/${getConfigValue(dark?.bgOpacity)}` : ""}`
    return `${variantLight} ${variantDark}`
}
export const genVariantSoftGray = ({ appearance, soft }: { appearance: appearance, soft: soft }) => {
    return `${genVariantSoft({ color: "gray", colorPaletteProvider: "default", appearance, soft })}`
}

export const genVariantSoftNeutral = ({ appearance, soft = generalSoftNeutral }: { appearance: appearance, soft: soft }) => {
    return `${genVariantSoft({ color: "gray", colorPaletteProvider: "default", soft, appearance })}`
}


export const genVariantSubtle = ({ color, appearance, colorPaletteProvider: colorMode, subtle }: { color: string, appearance: appearance, colorPaletteProvider: colorPaletteProvider, subtle: subtle }) => {

    const { borderWidth, light, dark } = subtle

    const variantLight = `${appearance === "light" || appearance === "both" ?
        colorMode === "default" ?
            ` border-${color}-${light?.borderShade}/${getConfigValue(light?.borderOpacity)}` :
            `border-${color}/${getConfigValue(light?.borderOpacity)}`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        colorMode === "default" ?
            `border-${color}-${dark?.borderShade}/${getConfigValue(dark?.borderOpacity)}` :
            `border-${color}/${getConfigValue(dark?.borderOpacity)}`
        : appearance === "both" ?
            colorMode === "default" ?
                `dark-border-${color}-${dark?.borderShade}/${getConfigValue(dark?.borderOpacity)}` :
                `dark-border-${color}/${getConfigValue(dark?.borderOpacity)}` : ""}`
    return `${genVariantSoft({ color, appearance, colorPaletteProvider: colorMode, soft: { light: { bgShade: light?.bgShade, bgOpacity: light?.bgOpacity, textShade: light?.textShade }, dark: { bgShade: dark?.bgShade, bgOpacity: dark?.bgOpacity, textShade: dark?.textShade } } })} border-${getConfigValue(borderWidth)} ${variantLight} ${variantDark}`
}

export const genVariantSubtleGray = ({ appearance, subtle = defaultSubtleGray }: { appearance: appearance, subtle: subtle }) => {
    const { borderWidth, light, dark } = subtle
    const variantLight = `${appearance === "light" || appearance === "both" ?
        ` border-gray-${light?.borderShade}/${getConfigValue(light?.borderOpacity)}`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        `border-gray-${dark?.borderShade}/${getConfigValue(dark?.borderOpacity)}`
        : appearance === "both" ?
            `dark-border-gray-${dark?.borderShade}/${getConfigValue(dark?.borderOpacity)}` : ""}`
    return `${genVariantSoftGray({ appearance, soft: { light, dark } })} border-${getConfigValue(borderWidth)} ${variantLight} ${variantDark}`
}

export const genVariantSolidNeutral = ({ appearance }: { appearance: appearance }) => {
    const variantLight = `${appearance === "light" || appearance === "both" ?
        "bg-gray-900 text-white" : ""} `

    const variantDark = `${appearance === "dark" ?
        "bg-gray-50 text-gray-900"
        : appearance === "both" ?
            "dark-bg-gray-50 dark-text-gray-900" : ""}`
    return `${variantLight} ${variantDark}`
}


export const genVariantSolidGray = ({ appearance, shades }: { appearance: appearance, shades: solidShade }) => {
    const { light, dark } = shades
    const variantLight = `${appearance === "light" || appearance === "both" ?
        `bg-gray-${light?.bgShade} text-${light?.textShade}` : ""} `

    const variantDark = `${appearance === "dark" ?
        `bg-gray-${dark?.bgShade} text-gray-${dark?.textShade}`
        : appearance === "both" ?
            `dark-bg-gray-${dark?.bgShade} dark-text-gray-${dark?.textShade}` : ""}`
    return `${variantLight} ${variantDark}`
}

export const genVariantOutlineNeutral = ({ appearance, outline }: { appearance: appearance, outline: elementOutline }) => {
    const { borderSize } = outline
    const borderSize_ = borderSize ? borderSize : 1
    const variantLight = `${appearance === "light" || appearance === "both" ?
        `bg-transparent border-gray-800/40 text-gray-800` :
        ""}`

    const variantDark = `${appearance === "dark" ?
        `bg-transparent border-white  text-white` :
        appearance === "both" ?

            `dark-border-white dark-text-white` : ""}`
    return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`
}


export const genVariantSubtleNeutral = ({ appearance, subtle = defaultSubtle }: { appearance: appearance, subtle: subtle }) => {

    const { borderWidth, light, dark } = subtle
    const variantLight = `${appearance === "light" || appearance === "both" ?
        ` border-gray-900/${getConfigValue(light?.borderOpacity)} text-gray-900`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        `border-gray-800/${getConfigValue(dark?.borderOpacity)} text-white`
        : appearance === "both" ?
            `dark-border-gray-white/${getConfigValue(dark?.borderOpacity)} dark-text-white` : ""}`
    return `${genVariantSoftNeutral({ appearance, soft: { light, dark } })} border-${getConfigValue(borderWidth)} ${variantLight} ${variantDark}`
}