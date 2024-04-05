import type { Appearance, BaseTypoColor, BgGradientTo, GradientText } from "@/types";
import { getShortcutsIfNotSame } from "@/utils";


export const genTextColor = (appearance: Appearance, baseTypoColor: BaseTypoColor) => {
    const { light, dark } = baseTypoColor
    const lightVar = `
        ${appearance === "light" || appearance === "both" ? `text-${light}` : ""}
    `
    const darkVar = `
        ${appearance === "dark" ? `text-${dark}` : appearance === "both" ? `
        ${getShortcutsIfNotSame(
        {
            val1: light,
            val2: dark,
            shortcuts: `dark-text-${dark}`
        })}` : ""}
    `
    return `${lightVar} ${darkVar}`
}

export const genGratientText = (gradient: GradientText, bgGradientTo: BgGradientTo, appearance: Appearance) => {
    const { light, dark } = gradient
    const lightVar = `
        ${appearance === "light" || appearance === "both" ? `from-${light.colorFrom} to-${light.colorTo}` : ""}
    `
    const darkVar = `
        ${appearance === "dark" ? `from-${dark.colorFrom} to-${dark.colorTo}` : appearance === "both" ? `dark-from-${dark.colorFrom} dark-to-${dark.colorTo}` : ""}
    `
    return `text-transparent bg-clip-text bg-gradient-${bgGradientTo} ${lightVar} ${darkVar}`
}