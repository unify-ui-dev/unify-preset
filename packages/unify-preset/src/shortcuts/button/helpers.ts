import type { appearance, colorPaletteProvider, colorShade, formOutline } from "@/types"
import { getConfigValue } from "@/utils"
import { generalBtnOuline } from "./const"
import type { btnGhostOrSoft, solidBtnShade } from "./types"

const getTextColorSolid = (colorApply: "white-only" | "gray", colorPaletteProvider: colorPaletteProvider, color: {
    light?: { textShade?: colorShade },
    dark?: { textShade?: colorShade }
}) => {
    const { light: light_, dark: dark_ } = color
    const light = colorApply === "white-only" ? `white` : colorPaletteProvider === "default" ? `gray-${light_?.textShade}` : `${color}-text`
    const dark = colorApply === "white-only" ? `white` : colorPaletteProvider === "default" ? `gray-${dark_?.textShade}` : `${color}-text`

    return { light, dark }
}

// generate btn variants 
export const genBtnVariantSolid = ({ color, solidShade, appearance, colorPaletteProvider }: { color: string, solidShade: solidBtnShade, appearance: appearance, colorPaletteProvider: colorPaletteProvider }) => {
    const { light, dark } = solidShade
    const appliedTextColor = color === "gray" ? "gray" : "white-only"
    const foreText = getTextColorSolid(appliedTextColor, colorPaletteProvider, {
        light: { textShade: solidShade.light?.textShade },
        dark: { textShade: solidShade.dark?.textShade }
    })
    const btnvariantLight = `${appearance === "light" || appearance === "both" ?
        colorPaletteProvider === "default" ?
            `bg-${color}-${light?.bgShade} hover-bg-${color}-${light?.hoverBgShade} active-bg-${color}-${light?.pressBgShade} text-${foreText.light} focus-visible-outline-${color}-${light?.hoverBgShade}` :
            `bg-${color} hover-bg-${color}-hover active-bg-${color}-active focus-visible-outline-${color} text-${foreText.light}`
        : ""} `

    const variantDark = `${appearance === "dark" ?
        colorPaletteProvider === "default" ?
            `bg-${color}-${dark?.bgShade} hover-bg-${color}-${dark?.hoverBgShade} active-bg-${color}-${dark?.pressBgShade} text-${foreText.dark} focus-visible-outline-${color}-${dark?.hoverBgShade}` :
            `bg-${color} hover-bg-${color}-hover active-bg-${color}-active focus-visible-outline-${color} text-${foreText}`
        : appearance === "both" ?
            colorPaletteProvider === "default" ?
                `dark-bg-${color}-${dark?.bgShade} dark-hover-bg-${color}-${dark?.hoverBgShade} dark-active-bg-${color}-${dark?.pressBgShade} dark-focus-visible-outline-${color}-${dark?.hoverBgShade}` :
                `dark-bg-${color} dark-hover-bg-${color}-hover dark-active-bg-${color}-active dark-focus-visible-outline-${color}-active` : ""}`
    return `${btnvariantLight} ${variantDark}`
}

export const genBtnVariantSolidGray = ({ shades, appearance, colorPaletteProvider }: { shades: solidBtnShade, appearance: appearance, colorPaletteProvider: colorPaletteProvider }) => {
    const color = colorPaletteProvider === "default" ? "gray" : "btn-gray"
    return `${genBtnVariantSolid({ color, solidShade: shades, colorPaletteProvider, appearance })}`
}

export const genBtnVariantOutline = ({ color, appearance, colorPaletteProvider, outlineBtn }: { color: string, appearance: appearance, colorPaletteProvider: colorPaletteProvider, outlineBtn: formOutline }) => {
    const { borderSize, light, dark } = outlineBtn
    const borderSize_ = borderSize ? borderSize : 1
    const variantLight = `${appearance === "light" || appearance === "both" ?
        colorPaletteProvider === "default" ?
            `bg-transparent border-${color}-${light?.borderShade} hover-border-${color}-${light?.hoverBorderShade} text-${color}-${light?.textShade} hover-text-${color}-${light?.hoverTextShade} focus-visible-outline-${color}-${light?.hoverBorderShade}` :
            `bg-transparent border-${color} hover-border-${color}-hover active-border-${color}-active text-${color}-text hover-text-${color}-text-hover focus-visible-outline-${color}-text`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        colorPaletteProvider === "default" ?
            `bg-transparent border-${color}-${dark?.borderShade} hover-border-${color}-${dark?.hoverBorderShade} text-${color}-${dark?.textShade} hover-text-${color}-${dark?.hoverTextShade} focus-visible-outline-${color}-${dark?.hoverBorderShade}` :
            `bg-transparent border-${color} hover-border-${color}-hover active-border-${color}-active focus-visible-outline-${color}`
        : appearance === "both" ?
            colorPaletteProvider === "default" ?
                `dark-border-${color}-${dark?.borderShade} dark-hover-border-${color}-${dark?.hoverBorderShade} dark-text-${color}-${dark?.textShade} dark-hover-text-${color}-${dark?.hoverTextShade} dark-focus-visible-outline-${color}-${dark?.hoverBorderShade}` :
                `dark-border-${color} dark-hover-border-${color}-hover dark-active-border-${color}-active dark-focus-visible-outline-${color}` : ""}`
    return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`
}
export const genBtnVariantOutlineGray = ({ appearance, outlineBtn, colorPaletteProvider }: { appearance: appearance, outlineBtn: formOutline, colorPaletteProvider: colorPaletteProvider }) => {
    const color = colorPaletteProvider === "default" ? "gray" : "btn-gray-outline"
    return `${genBtnVariantOutline({ color, colorPaletteProvider, appearance, outlineBtn })}`
}

export const genBtnVariantSoftOrGost = ({ color, appearance, colorPaletteProvider, ghostOrSoft }: { color: string, appearance: appearance, colorPaletteProvider: colorPaletteProvider, ghostOrSoft: btnGhostOrSoft }) => {
    const { light, dark } = ghostOrSoft

    const variantLight = `${appearance === "light" || appearance === "both" ?
        colorPaletteProvider === "default" ?
            `bg-${color}-${light?.bgShade}/${getConfigValue(light?.bgOpacity)} hover-bg-${color}-${light?.hoverBgShade}/${getConfigValue(light?.hoverBgOpacity)} active-bg-${color}-${light?.pressBgShade}/${getConfigValue(light?.pressOpacity)} text-${color}-${light?.textShade || 600} focus-visible-outline-${color}-${light?.textShade || 600}` :
            `bg-${color}/${getConfigValue(light?.bgOpacity)} hover-bg-${color}-hover/${getConfigValue(light?.hoverBgOpacity)} active-bg-${color}-active/${getConfigValue(light?.pressOpacity)} text-${color} focus-visible-outline-${color}`
        : ""}`

    const variantDark = `${appearance === "dark" ?
        colorPaletteProvider === "default" ?
            `bg-${color}-${dark?.bgShade}/${getConfigValue(dark?.bgOpacity)} hover-bg-${color}-${dark?.hoverBgShade}/${getConfigValue(dark?.hoverBgOpacity)} active-bg-${color}-${dark?.pressBgShade}/${getConfigValue(dark?.pressOpacity)} text-${color}-${dark?.textShade || 500} focus-visible-outline-${color}-${dark?.textShade || 500}` :
            `bg-${color}/${getConfigValue(dark?.bgOpacity)} hover-bg-${color}-hover/${getConfigValue(dark?.hoverBgOpacity)} active-bg-${color}-active/${getConfigValue(dark?.pressOpacity)} text-${color} focus-visible-outline-${color}`
        : appearance === "both" ?
            colorPaletteProvider === "default" ?
                `dark-bg-${color}-${dark?.bgShade}/${getConfigValue(dark?.bgOpacity)} dark-hover-bg-${color}-${dark?.hoverBgShade}/${getConfigValue(dark?.hoverBgOpacity)} dark-active-bg-${color}-${dark?.pressBgShade}/${getConfigValue(dark?.pressOpacity)} dark-text-${color}-${dark?.textShade || 500} dark-focus-visible-outline-${color}-${dark?.textShade || 500}` :
                `dark-bg-${color}/${getConfigValue(dark?.bgOpacity)} dark-hover-bg-${color}-hover/${getConfigValue(dark?.hoverBgOpacity)} dark-active-bg-${color}-active/${getConfigValue(dark?.pressOpacity)} dark-focus-visible-outline-${color}` : ""}`
    return `${variantLight} ${variantDark}`
}
export const genBtnVariantSoftGhostGray = ({ appearance, ghostOrSoft, colorPaletteProvider, prefix }: { appearance: appearance, ghostOrSoft: btnGhostOrSoft, colorPaletteProvider: colorPaletteProvider, prefix: "soft" | "ghost" }) => {
    const color = colorPaletteProvider === "default" ? "gray" : `btn-gray-${prefix}`
    return `${genBtnVariantSoftOrGost({ appearance, color, colorPaletteProvider, ghostOrSoft })}`
}
export const genBtnVariantGhostSoftNeutral = ({ appearance, ghostOrSoft, prefix, colorPaletteProvider }: { appearance: appearance, ghostOrSoft: btnGhostOrSoft, colorPaletteProvider: colorPaletteProvider, prefix: "soft" | "ghost" }) => {
    const color = colorPaletteProvider === "default" ? "gray" : `btn-neutral-${prefix}`
    return `${genBtnVariantSoftOrGost({ appearance, color, colorPaletteProvider, ghostOrSoft })}`
}

export const genBtnVariantSolidNeutral = ({ appearance, colorPaletteProvider }: { appearance: appearance, colorPaletteProvider: colorPaletteProvider }) => {
    const btnvariantLight = `${appearance === "light" || appearance === "both" ?
        colorPaletteProvider === "default" ?
            "bg-gray-900 hover-bg-gray-950 active-bg-gray-700 text-white focus-visible-outline-gray-900" :
            "bg-gray hover-bg-gray-hover active-bg-gray-active focus-visible-outline-gray"
        : ""} `

    const variantDark = `${appearance === "dark" ?
        colorPaletteProvider === "default" ?
            "bg-gray-50 hover-bg-gray-100 active-bg-white text-gray-900 focus-visible-outline-gray-50" :
            "bg-white hover-bg-gray-hover active-bg-white focus-visible-outline-gray-100"
        : appearance === "both" ?
            colorPaletteProvider === "default" ?
                "dark-bg-gray-50 dark-hover-bg-gray-100 dark-active-bg-white dark-text-gray-900 dark-focus-visible-outline-gray-900" :
                "dark-bg-white dark-hover-bg-gray-hover dark-active-bg-white dark-focus-visible-outline-gray-100" : ""}`
    return `${btnvariantLight} ${variantDark}`
}
export const genBtnVariantOutlineNeutral = ({ appearance, outlineBtn = generalBtnOuline }: { appearance: appearance, outlineBtn?: formOutline }) => {
    const { borderSize } = outlineBtn
    const borderSize_ = borderSize ? borderSize : 1
    const variantLight = `${appearance === "light" || appearance === "both" ?
        `bg-transparent border-gray-800 hover-bg-gray-100/40 active-bg-gray-100/50 text-gray-800 hover-text-gray-900` :
        ""}`

    const variantDark = `${appearance === "dark" ?
        `bg-transparent border-white hover-bg-gray-900/30  text-white` :
        appearance === "both" ?

            `dark-border-white dark-hover-bg-gray-900/30 dark-text-white` : ""}`
    return `border-${getConfigValue(borderSize_)} ${variantLight} ${variantDark}`
}