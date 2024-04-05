import { Appearance, RingColorShades } from "@/types"
import { getConfigValue } from "../utils"
import { btnCongig } from "./button/const"


export const getRingBase = (appearance: Appearance, size?: number | string, offset?: number | string) => {
    const lightV = `${appearance === "light" || appearance === "both" ? "ring-offset-white" : ""}`
    const darkV = `${appearance === "dark" ? "ring-offset-gray-950" : appearance === "both" ? `dark-ring-offset-gray-950` : ""}`

    return `ring-${getConfigValue(size)} ring-transparent ring-offset-${getConfigValue(offset || 4)} ${lightV} ${darkV}`
}
export const genFocusVisibleRing = (color: string, appearance: Appearance, focusRing = btnCongig.ringConfig, focusRingGray: RingColorShades) => {
    if (color === "neutral") {
        return `${genVariantFocusVisibleRingBlack(appearance)}`
    }
    const isCurrent = color === "current"
    const focusRing_ = color === "gray" ? focusRingGray : focusRing
    const ringLight = `${appearance === "light" || appearance === "both" ?
        `focus-visible-ring-${color}${!isCurrent ? `-${focusRing_.light}` : ""}`
        : ""}`

    const ringDark = `${appearance === "dark" ?
        `focus-visible-ring-${color}${!isCurrent ? `-${focusRing_.dark}` : ""}`
        : appearance === "both" ?
            `dark-focus-visible-ring-${color}${!isCurrent ? `-${focusRing_.dark}` : ""}` : ""}`
    return `${ringLight} ${ringDark}`
}



export const genVariantFocusRing = (color: string, appearance: Appearance, ring = btnCongig.ringConfig, ringGray = btnCongig.ringGrayConfig) => {
    if (color === "neutral") return `${genVariantFocusRingBlack(appearance)}`

    const focusRing = color === "gray" ? ringGray : ring
    const ringLight = `${appearance === "light" || appearance === "both" ?
        `focus-visible-ring-${color}-${focusRing.light} focus-ring-${color}-${focusRing.light}`
        : ""}`

    const ringDark = `${appearance === "dark" ?
        `focus-ring-${color}-${focusRing.dark}`
        : appearance === "both" ?
            `focus-visible-ring-${color}-${focusRing.dark}` : ""}`
    return `dark-focus-visible-ring-${color}-${focusRing.dark} ${ringLight} ${ringDark}`
}

const genVariantFocusRingBlack = (appearance: Appearance) => {

    const ringLight = `${appearance === "light" || appearance === "both" ?
        `focus-visible-ring-900 focus-ring-gray-900` : ""}`

    const ringDark = `${appearance === "dark" ?
        `focus-visible-ring-white focus-ring-white`
        : appearance === "both" ?
            `dark-focus-visible-ring-white dark-focus-ring-white` : ""}`
    return `${ringLight} ${ringDark}`
}

const genVariantFocusVisibleRingBlack = (appearance: Appearance) => {
    const ringLight = `${appearance === "light" || appearance === "both" ?
        `focus-visible-ring-900 ring-offset-white` : ""}`

    const ringDark = `${appearance === "dark" ?
        `focus-visible-ring-white`
        : appearance === "both" ?
            `dark-focus-visible-ring-white` : ""}`
    return `${ringLight} ${ringDark}`
}