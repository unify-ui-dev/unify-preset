import type { focusRing, colorShade, formOutline } from "@/types"


export type ghostSoftBase = {
    bgShade?: colorShade,
    bgOpacity?: number | string,
    hoverBgOpacity?: number | string,
    hoverBgShade?: colorShade,
    pressBgShade?: colorShade,
    pressOpacity?: number | string,
    textShade?: colorShade
}

export type btnGhostOrSoft = {
    light?: ghostSoftBase
    dark?: ghostSoftBase
}



export type btnSizes = {
    xs?: { height?: number | string, px?: number | string },
    sm?: { height?: number | string, px?: number | string },
    md?: { height?: number | string, px?: number | string },
    lg?: { height?: number | string, px?: number | string },
    xl?: { height?: number | string, px?: number | string }
}

export type solidBtnShadeBase = {
    bgShade?: colorShade,
    hoverBgShade?: colorShade,
    pressBgShade?: colorShade,
    textShade?: colorShade,
}
export type solidBtnShade = {
    light?: solidBtnShadeBase
    dark?: solidBtnShadeBase
}

export type button = {
    size?: btnSizes,
    solidShade?: solidBtnShade
    solidShadeGray?: solidBtnShade
    ghost?: btnGhostOrSoft,
    soft?: btnGhostOrSoft,
    outline?: formOutline,
    outlineGray?:formOutline,
    grayOutline?: formOutline,
    graySoft?: btnGhostOrSoft,
    grayGhost?: btnGhostOrSoft,
    neutralSoft?: btnGhostOrSoft,
    neutralGhost?: btnGhostOrSoft,
    focusRing?: focusRing,
}