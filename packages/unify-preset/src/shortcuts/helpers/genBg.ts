import type { Appearance, BorderVariant, BorderPrefix, ColorShade, OutlineVariant, Soft, SolidShade, Subtle } from "@/types"
import { getConfigValue } from "@/utils"

import { helperDefaultValues } from "./helper-const"


const getTextColorSolid = (color: "white" | "gray", shades: { light: ColorShade, dark: ColorShade }) => {
    const light = color === "white" ? 'white' : `gray-${shades.light}`
    const dark = color === "white" ? "white" : `gray-${shades.dark}`
    return { light, dark }
}
export const genVariantSolid = ({ color, appearance, solidShades, graySolid }: { solidShades: SolidShade, graySolid: SolidShade, color: string, appearance: Appearance }) => {
    if (color === "neutral") {
        return `${genVariantSolidNeutral({ appearance })}`
    }
    const { light, dark } = color === "gray" ? graySolid : solidShades

    const textColor = getTextColorSolid(color === "gray" ? "gray" : "white", { light: graySolid.light?.textShade || "700", dark: graySolid.dark?.textShade || "300" })
    const variantLight = `${appearance === "light" || appearance === "both" ?
        `bg-${color}-${light?.bgShade} text-${textColor.light}` : ""} `

    const variantDark = `${appearance === "dark" ? `bg-${color}-${dark?.bgShade} text-${textColor.dark}`
        : appearance === "both" ? `dark-bg-${color}-${dark?.bgShade} dark-text-${textColor.dark}` : ""}`
    return `${variantLight} ${variantDark}`
}

const genOutlineNeutral = ({ appearance, border, prefix = "border" }: { prefix?: BorderPrefix, appearance: Appearance, border: BorderVariant }) => {
    const { borderSize } = border
    const borderSize_ = borderSize ? borderSize : 1
    const variantLight = `${appearance === "light" || appearance === "both" ? `${prefix}-gray-900` : ""}`

    const variantDark = `${appearance === "dark" ? `${prefix}-white` : appearance === "both" ? `dark-${prefix}-white` : ""}`
    return `${prefix}-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`
}
export const genOutline = ({ color, appearance, border, colorBorder, prefix = "border" }: { prefix?: BorderPrefix, color: string, appearance: Appearance, border: BorderVariant, colorBorder: BorderVariant }) => {
    if (color === "neutral") return `${genOutlineNeutral({ appearance, border, prefix })}`
    const { light, dark, borderSize } = color === "gray" ? border : colorBorder

    const borderSize_ = borderSize ? borderSize : 1
    const variantLight = `${appearance === "light" || appearance === "both" ? `${prefix}-${color}-${light}` : ""}`

    const variantDark = `${appearance === "dark" ? `${prefix}-${color}-${dark}` : appearance === "both" ? `dark-${prefix}-${color}-${dark}` : ""}`
    return `${prefix}-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`
}

export const genVariantOutline = ({ color, appearance, outline, grayOutline }: { color: string, appearance: Appearance, outline: OutlineVariant, grayOutline: OutlineVariant }) => {
    const { borderSize, light, dark } = color === "gray" ? grayOutline : outline
    const borderSize_ = borderSize ? borderSize : 1
    if (color === "neutral") return `${genVariantOutlineNeutral({ appearance, outline: { borderSize: borderSize_ } })}`

    const variantLight = `${appearance === "light" || appearance === "both" ?
        `bg-transparent text-${color}-${light?.textShade}`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        `bg-transparent text-${color}-${dark?.textShade}` :
        appearance === "both" ?
            `dark-text-${color}-${dark?.textShade}` : ""}`
    const getBorder = { borderSize: borderSize_, light: light?.borderShade, dark: dark?.borderShade }
    const getBorderValue = genOutline({ color, appearance, prefix: "border", border: getBorder, colorBorder: getBorder })

    return `${getBorderValue}  ${variantLight} ${variantDark}`
}


export const genVariantSoft = ({ color: color_, soft, graySoft, appearance }: { color: string, appearance: Appearance, soft: Soft, graySoft: Soft }) => {
    const color = color_ === "neutral" ? "gray" : color_
    const { light, dark } = color === "gray" ? graySoft : soft

    const variantLight = `${appearance === "light" || appearance === "both" ?
        `bg-${color}-${light?.bgShade}/${getConfigValue(light?.bgOpacity)}  text-${color}-${light?.textShade}` : ""}`

    const variantDark = `${appearance === "dark" ?
        `bg-${color}-${dark?.bgShade}/${getConfigValue(dark?.bgOpacity)} text-${color}-${dark?.textShade}` :
        appearance === "both" ?
            `dark-bg-${color}-${dark?.bgShade}/${getConfigValue(dark?.bgOpacity)} dark-text-${color}-${dark?.textShade}` : ""}`
    return `${variantLight} ${variantDark}`
}





export const genVariantSubtle = ({ color: color_, appearance, subtle, graySubtle }: { color: string, appearance: Appearance, subtle: Subtle, graySubtle: Subtle }) => {
    const color = color_ === "neutral" ? "gray" : color_
    if (color_ === "neutral") return `${genVariantSubtleNeutral({ appearance, subtle })}`
    const { borderWidth, light, dark } = color === "gray" ? graySubtle : subtle

    const variantLight = `${appearance === "light" || appearance === "both" ?
        ` border-${color}-${light?.borderShade}/${getConfigValue(light?.borderOpacity)}` : ""}`

    const variantDark = `${appearance === "dark" ?
        `border-${color}-${dark?.borderShade}/${getConfigValue(dark?.borderOpacity)}`
        : appearance === "both" ?
            `dark-border-${color}-${dark?.borderShade}/${getConfigValue(dark?.borderOpacity)}` : ""}`
    return `${genVariantSoft({ color, appearance, soft: { light: subtle.light, dark: subtle.dark }, graySoft: { light: graySubtle.light, dark: graySubtle.dark } })}  border-${getConfigValue(borderWidth)} ${variantLight} ${variantDark}`
}



export const genVariantSolidNeutral = ({ appearance }: { appearance: Appearance }) => {
    const variantLight = `${appearance === "light" || appearance === "both" ?
        "bg-gray-900 text-white" : ""} `

    const variantDark = `${appearance === "dark" ?
        "bg-white text-gray-900"
        : appearance === "both" ?
            "dark-bg-white dark-text-gray-900" : ""}`
    return `${variantLight} ${variantDark}`
}

export const genVariantWhiteBlack = ({ appearance, colors }: { appearance: Appearance, colors: { light: string, dark: string } }) => {
    const { light: white, dark } = colors
    const variantLight = `${appearance === "light" || appearance === "both" ?
        `bg-${white}` : ""} `

    const variantDark = `${appearance === "dark" ?
        `bg-${dark}`
        : appearance === "both" ?
            `dark-bg-${dark}` : ""}`
    return `${variantLight} ${variantDark}`
}

export const genVariantOutlineNeutral = ({ appearance, outline }: { appearance: Appearance, outline: OutlineVariant }) => {
    const { borderSize } = outline
    const borderSize_ = borderSize ? borderSize : 1
    const variantLight = `${appearance === "light" || appearance === "both" ? `bg-transparent border-gray-800/40 text-gray-800` : ""}`

    const variantDark = `${appearance === "dark" ? `bg-transparent border-white  text-white` : appearance === "both" ?

        `dark-border-white dark-text-white` : ""}`
    return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`
}


export const genNeutralSoftGhost = (appearance: Appearance, variant: "soft" | "ghost") => {
    return variant === "ghost" ? `${genNeutralGhost(appearance)}` : `${genNeutralSoft(appearance)}`
}

const genNeutralGhost = (appearance: Appearance) => {
    const lightV = `${appearance === "light" || appearance === "both" ? "text-gray-900" : ""}`
    const darkV = `${appearance === "dark" ? "text-white" :
        appearance === "both" ? "dark-text-white" : ""}`

    return `${lightV} ${darkV}`
}

const genNeutralSoft = (appearance: Appearance) => {
    const lightV = `${appearance === "light" || appearance === "both" ? "bg-gray-950/10 text-gray-900" : ""}`
    const darkV = `${appearance === "dark" ? "bg-gray-50/20 text-white" : appearance === "both" ? "dark-bg-gray-50/20 dark-text-gray-950" : ""}`

    return `${lightV} ${darkV}`
}

export const genVariantSubtleNeutral = ({ appearance, subtle = helperDefaultValues["defaultSubtle"] }: { appearance: Appearance, subtle: Subtle }) => {
    const { borderWidth } = subtle
    const variantLight = `${appearance === "light" || appearance === "both" ? `border-gray-900/70 text-gray-900` : ""}`

    const variantDark = `${appearance === "dark" ? `border-gray-800/60 text-white` : appearance === "both" ? `dark-border-gray-white/60 dark-text-white` : ""}`
    return `${genNeutralSoft(appearance)} border-${getConfigValue(borderWidth)} ${variantLight} ${variantDark}`
}