import type { RingColorShades, ColorShade, formOutline, TextSizes, RingBase } from "@/types"

export type GhostSoftBase = {
    bgShade?: ColorShade,
    bgOpacity?: number | string,
    hoverBgOpacity?: number | string,
    hoverBgShade?: ColorShade,
    pressBgShade?: ColorShade,
    pressOpacity?: number | string,
    textShade?: ColorShade
}

export type BtnGhostOrSoft = {
    light?: GhostSoftBase
    dark?: GhostSoftBase
}


export type BtnSizes = {
    xs?: { height?: number | string, px?: number | string, textSize?: TextSizes },
    sm?: { height?: number | string, px?: number | string, textSize?: TextSizes },
    md?: { height?: number | string, px?: number | string, textSize?: TextSizes },
    lg?: { height?: number | string, px?: number | string, textSize?: TextSizes },
    xl?: { height?: number | string, px?: number | string, textSize?: TextSizes }
}

export type BtnIconSizes = {
    xs?: { size?: number | string, textSize?: TextSizes },
    sm?: { size?: number | string, textSize?: TextSizes },
    md?: { size?: number | string, textSize?: TextSizes },
    lg?: { size?: number | string, textSize?: TextSizes },
    xl?: { size?: number | string, textSize?: TextSizes }
}

type BaseSoligGradientBtn = {
    borderShade:ColorShade,
    bgShadeFrom:ColorShade,
    bgShadeTo:ColorShade,
    hoverShadeFrom:ColorShade,
    hoverShadeTo:ColorShade,
}

export type SolidGradientBtn ={
    light?:BaseSoligGradientBtn,
    dark?:BaseSoligGradientBtn
}


export type SolidBtnShadeBase = {
    bgShade?: ColorShade,
    hoverBgShade?: ColorShade,
    pressBgShade?: ColorShade,
    textShade?: ColorShade,
}
export type SolidBtnShade = {
    light?: SolidBtnShadeBase
    dark?: SolidBtnShadeBase
}
type BaseBtnWhite = {
    bg: string,
    hoverBg: string,
    pressBg: string,
    textColor: string
}
export type BtnWhite = {
    light: BaseBtnWhite,
    dark: BaseBtnWhite
}

export type Button = {
    useRing?:boolean,
    ringBase?:RingBase,
    size?: BtnSizes,
    btnIcon?: BtnIconSizes,

    btnWhite?: BtnWhite

    solidShade?: SolidBtnShade
    solidShadeGray?: SolidBtnShade

    gradient?:SolidGradientBtn,
    grayGradient?:SolidGradientBtn,

    ghost?: BtnGhostOrSoft,
    grayGhost?: BtnGhostOrSoft,

    outline?: formOutline,
    outlineGray?: formOutline,

    soft?: BtnGhostOrSoft,
    graySoft?: BtnGhostOrSoft,

    ring?: RingColorShades,
    ringGray?: RingColorShades,
}