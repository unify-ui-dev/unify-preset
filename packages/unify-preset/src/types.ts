import { Components } from "./shortcuts/types"


export type colorShade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950"
export type appearance = "light" | "dark" | "both"
export type colorPaletteProvider = "default" | "cssVar"

export type focusRing = {
    offset?: number | string
    size?: number | string,
    lightShade?: colorShade
    darkShade?: colorShade
}

export type softBase = {
    bgShade?: colorShade,
    bgOpacity?: number | string,
    textShade?: colorShade
}

export type soft = {
    light?: softBase,
    dark?: softBase
}

export type solidShadeBase = {
    bgShade?: colorShade,
    textShade?: colorShade,
}
export type solidShade = {
    light?: solidShadeBase
    dark?: solidShadeBase
}

export type subtleBase = {
    borderShade?: colorShade,
    borderOpacity?: number | string
} & softBase
export type subtle = {
    borderWidth?: number | string
    light?: subtleBase
    dark?: subtleBase
}

export type elementSizes = {
    xs?: { py?: number | string, px?: number | string },
    sm?: { py?: number | string, px?: number | string },
    md?: { py?: number | string, px?: number | string },
    lg?: { py?: number | string, px?: number | string },
    xl?: { py?: number | string, px?: number | string }
}

export type elementSizeBoth = {
    xs?: number | string,
    sm?: number | string,
    md?: number | string,
    lg?: number | string,
    xl?: number | string
}

export type elementOutlineBase = {
    borderShade?: colorShade,
    textShade?: colorShade,
}

export type elementOutline = {
    borderSize?: number | string,
    light?: elementOutlineBase
    dark?: elementOutlineBase
}

export type sharedElement = {
    solid?: solidShade,
    solidGray?: solidShade
    ghost?: soft,
    soft?: soft,
    subtle?: subtle,
    softGray?: soft,
    softNeutral?: soft,
    outline?: elementOutline,
    outlineGray?: elementOutline
    subtleGray?: subtle,
    subtleNeutral?: subtle,
}

export type sharedConfig = {
    element?: sharedElement,
    form?: {
        focusRing?: focusRing
    }
}


export type formOutlineBase = {
    borderShade?: colorShade,
    hoverBorderShade?: colorShade,
    activeBorderShade?: colorShade,
    textShade?: colorShade,
    hoverTextShade?: colorShade
}

export type formOutline = {
    borderSize?: number | string,
    light?: formOutlineBase,
    dark?: formOutlineBase
}


export type unifyUI = {
    appearance?: appearance,
    prefixState?: string,
    sharedConfig?: sharedConfig,
    colorModeProvider?: colorPaletteProvider ,
    components: Components
}