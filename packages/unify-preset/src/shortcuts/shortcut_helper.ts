import { getConfigValue } from "../utils"
import { defaultFocusRing, defaultFocusRingGray } from "./button/const"

export const genVariantFocusRing = (color: string, appearance: "dark" | "both" | "light", colorMode: "default" | "cssVar", focusRing = defaultFocusRing) => {
    const { size, offset } = focusRing
    const ringLight = `${appearance === "light" || appearance === "both" ?
        colorMode === "default" ?
            `focus-ring-${color}-${focusRing.lightShade} ring-offset-white` :
            `focus-ring-${color} ring-offset-white`
        : ""}`

    const ringDark = `${appearance === "dark" ?
        colorMode === "default" ?
            `focus-ring-${color}-${focusRing.darkShade} ring-offset-gray-950` :
            `focus-ring-${color} ring-offset-gray-950`
        : appearance === "both" ?
            colorMode === "default" ?
                `dark-focus-ring-${color}-${focusRing.darkShade} dark-ring-offset-gray-950` :
                `dark-focus-ring-${color} dark-ring-offset-gray-950` : ""}`
    return `focus-ring-${getConfigValue(size)} ring-transparent ring-offset-0 focus-ring-offset-${getConfigValue(offset || 6)} ${ringLight} ${ringDark}`
}

export const genVariantFocusRingGray = (appearance: "dark" | "both" | "light", colorMode: "default" | "cssVar", focusRing = defaultFocusRingGray) => {
    const { size, offset } = focusRing
    const ringLight = `${appearance === "light" || appearance === "both" ?
        colorMode === "default" ?
            `focus-ring-gray-${focusRing.lightShade} ring-offset-white` :
            `focus-ring-gray ring-offset-white`
        : ""}`

    const ringDark = `${appearance === "dark" ?
        colorMode === "default" ?
            `focus-ring-gray-${focusRing.darkShade} ring-offset-gray-950` :
            `focus-ring-gray ring-offset-gray-950`
        : appearance === "both" ?
            colorMode === "default" ?
                `dark-focus-ring-gray-${focusRing.darkShade} dark-ring-offset-gray-950` :
                `dark-focus-ring-gray dark-ring-offset-gray-950` : ""}`
    return `focus-ring-${getConfigValue(size)} ring-transparent ring-offset-0 focus-ring-offset-${getConfigValue(offset)} ${ringLight} ${ringDark}`
}

export const genBtnVariantFocusRingBlack = (appearance: "dark" | "both" | "light", colorMode: "default" | "cssVar", focusRing = defaultFocusRing) => {
    const { size, offset } = focusRing
    const ringLight = `${appearance === "light" || appearance === "both" ?
        colorMode === "default" ?
            `focus-ring-gray-900 ring-offset-white` :
            `focus-ring-black ring-offset-white`
        : ""}`

    const ringDark = `${appearance === "dark" ?
        colorMode === "default" ?
            `focus-ring-gray-900 ring-offset-gray-950` :
            `focus-ring-gray ring-offset-gray-950`
        : appearance === "both" ?
            `dark-focus-ring-white dark-ring-offset-gray-950` : ""}`
    return `focus-ring-${getConfigValue(size)} ring-transparent ring-offset-0 focus-ring-offset-${getConfigValue(offset)} ${ringLight} ${ringDark}`
}