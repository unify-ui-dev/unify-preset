
import type { Appearance, ColorShade, SolidShade } from "@/types";
import { getConfigValue } from "@/utils";


export const getPlaceHolder = ({ appearance, placeHolder }: {
    appearance: Appearance, placeHolder?: {
        light?: ColorShade,
        dark?: ColorShade
    }
}) => {
    const lightV = `${appearance === "light" || appearance === "both" ?
        `placeholder-text-gray-${placeHolder?.light}` : ""}`

    const darkV = `${appearance === "dark" ? `placeholder-text-gray-${placeHolder?.dark}` :
        appearance === "both" ?
            `dark-placeholder-text-gray-${placeHolder?.dark}` : ""}`
    return `${lightV} ${darkV}`
}

export const getTextColor = ({ appearance, textColor }: {
    appearance: Appearance, textColor?: {
        light?: ColorShade,
        dark?: ColorShade
    }
}) => {
    const lightV = `${appearance === "light" || appearance === "both" ? `text-gray-${textColor?.light}` : ""}`

    const darkV = `${appearance === "dark" ? `text-gray-${textColor?.dark}` :
        appearance === "both" ? `dark-text-gray-${textColor?.dark}` : ""}`
    return `${lightV} ${darkV}`
}

export const getInputBorder = ({ appearance, shades }: { appearance: Appearance, shades: { light: ColorShade, dark: ColorShade } }) => {
    const { light, dark } = shades
    const lightUtilities = `
        ${appearance === "light" || appearance === "both" ? `border-gray-${light} ` : ""}`

    const darkUtilities = `
        ${appearance === "dark" ? `outline-gray-${dark}` :
            appearance === "both" ? `dark-border-gray-${dark}` : ""}`

    return `${lightUtilities} ${darkUtilities}`
}

export const getInputGrayVariant = ({ appearance, shades }: { appearance: Appearance, shades: SolidShade }) => {
    const { light, dark } = shades
    const lightUtilities = `
        ${appearance === "light" || appearance === "both" ? `bg-gray-${light?.bgShade} text-gray-${light?.textShade}` : ""}`

    const darkUtilities = `
        ${appearance === "dark" ? `bg-gray-${dark?.bgShade} text-gray-${dark?.textShade}` :
            appearance === "both" ? `dark-bg-gray-${dark?.bgShade} dark-text-gray-${dark?.textShade}` : ""}`

    return `${lightUtilities} ${darkUtilities}`
}

export const getInputOutlineFocus = ({ color, appearance, shades }: { color: string, appearance: Appearance, shades?: { light: string, dark: string } }) => {
    const lightVariant = `${appearance === "light" ||
        appearance === "both" ? `focus-outline-${color}-${shades?.light}` : ""
        }`
    const darkVariant = `${appearance === "dark" ? `focus-outline-${color}-${shades?.dark}` :
        appearance === "both" ? `dark-focus-outline-${color}-${shades?.dark}` : ""
        }`

    return `focus-outline-offset-0 focus-b-transparent ${lightVariant} ${darkVariant}`
}

export const getInputRingBase = (appearance: Appearance, size?: number | string, offset?: number | string) => {
    const lightV = `${appearance === "light" || appearance === "both" ? "ring-offset-white" : ""}`
    const darkV = `${appearance === "dark" ? "ring-offset-gray-950" : appearance === "both" ? `dark-ring-offset-gray-950` : ""}`

    return ` ring-transparent  focus-ring-${getConfigValue(size)} focus-ring-offset-${getConfigValue(offset || 4)} ${lightV} ${darkV}`
}