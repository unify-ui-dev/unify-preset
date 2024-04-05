import { Appearance } from "@/types";

export const getInderteminSwitch = (appearance: Appearance) => `${appearance === "both" ? 'dark:indeterminate:bg-current dark:indeterminate:border-transparent' : appearance === "dark" ? 'indeterminate:bg-current indeterminate:border-transparent' : ""}`

export const getRingOffsetBg = (appearance: Appearance) => {
    const lightV = `${appearance === 'light' || appearance === "both" ? 'focus-visible:ring-offset-white' : ""}`
    const darkV = `${appearance === 'dark' ? 'focus-visible:ring-offset-gray-950' : appearance === "both" ? 'dark:focus-visible:ring-offset-gray-950' : ''}`

    return `${lightV} ${darkV}`
}