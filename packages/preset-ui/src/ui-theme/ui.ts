import { getBrice } from "@/colors/genColor";
import { themeColors } from "@/colors/getPreconfigColors";
import { uiColorFormat } from "@/types";
import type { Theme } from "@unocss/preset-uno";

const getWhite = (format: uiColorFormat): string => {
    const formats = {
        rgb: 'rgb(255,255,255, <alpha-value>)',
        hex: '',
        oklch: 'oklch(1 0 0)',
        hsl: 'hsl(0 0% 100%)'
    };
    return formats[format as keyof typeof formats] ?? '#ffffff';
};

export const getUiTheme = (colorMode: uiColorFormat, colorPrefix?: string, defineColor?: boolean) => {
    const colors = defineColor ?
        {
            dark: getBrice(colorMode, "gray-950", colorPrefix),
            white: getWhite(colorMode),
            ...themeColors(colorMode, colorPrefix)
        } : {};
    const theme: Theme = {
        colors: {
            bg: {
                DEFAULT: getBrice(colorMode, "bg", "none"),
                surface: getBrice(colorMode, "bg-surface", "none"),
                subtle: {
                    DEFAULT: getBrice(colorMode, "bg-subtle", "none"),
                    elevated: getBrice(colorMode, "bg-surface-elevated", "none"),
                },
                muted: getBrice(colorMode, "bg-muted", "none"),
                input: {
                    DEFAULT: getBrice(colorMode, "bg-input", "none"),
                    gray: getBrice(colorMode, "bg-input-gray", "none"),
                }
            },
            fg: {
                DEFAULT: getBrice(colorMode, "fg", "none"),
                title: getBrice(colorMode, "fg-title", "none"),
                subtitle: getBrice(colorMode, "fg-subtitle", "none"),
                muted: getBrice(colorMode, "fg-muted", "none"),
                input: getBrice(colorMode, "fg-input", "none"),
            },
            border: {
                DEFAULT: getBrice(colorMode, "border", "none"),
                light: getBrice(colorMode, "border-light", "none"),
                subtle: getBrice(colorMode, "border-subtle", "none"),
                strong: getBrice(colorMode, "border-strong", "none"),
                emphasis: getBrice(colorMode, "border-emphasis", "none"),
                input: getBrice(colorMode, "border-input", "none"),
            },
            card: {
                DEFAULT: getBrice(colorMode, "card", "none"),
                elevated: getBrice(colorMode, "card-elevated", "none"),
                surface: getBrice(colorMode, "card-surface", "none"),
                gray: getBrice(colorMode, "card-gray", "none"),
            },
            popover: {
                DEFAULT: getBrice(colorMode, "popover", "none"),
                surface: getBrice(colorMode, "popover-surface", "none"),
                elevated: getBrice(colorMode, "popover-elevated", "none"),
                gray: getBrice(colorMode, "popover-gray", "none"),
            },
            ...colors
        }
    };
    return theme
}