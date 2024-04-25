import type { RingColorShades, ColorShade, formOutline, TextSizes, RingBase } from "@/types"

export type GhostSoftBase = {
    bgShade?: ColorShade,
    bgOpacity?: number,
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

export type BtnSizeBase = { height?: number | string, px?: number | string, textSize?: TextSizes }


export type BtnSizes = {
    xs?: BtnSizeBase,
    sm?: BtnSizeBase,
    md?: BtnSizeBase,
    lg?: BtnSizeBase,
    xl?: BtnSizeBase
}

export type BtnIconBase = { size?: number | string, textSize?: TextSizes }
export type BtnIconSizes = {
    xs?: BtnIconBase,
    sm?: BtnIconBase,
    md?: BtnIconBase,
    lg?: BtnIconBase,
    xl?: BtnIconBase
}

type BaseSoligGradientBtn = {
    borderShade: ColorShade,
    bgShadeFrom: ColorShade,
    bgShadeTo: ColorShade,
    hoverShadeFrom: ColorShade,
    hoverShadeTo: ColorShade,
}

export type SolidGradientBtn = {
    useLightForBoth?: boolean,
    light?: BaseSoligGradientBtn,
    dark?: BaseSoligGradientBtn
}


export type SolidBtnShadeBase = {
    bgShade?: ColorShade,
    hoverBgShade?: ColorShade,
    pressBgShade?: ColorShade,
    textShade?: ColorShade,
}
export type SolidBtnShade = {
    useLightForBoth?: boolean,
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
    useRing?: boolean,
    ringBase?: RingBase,
    size?: BtnSizes,
    btnIcon?: BtnIconSizes,

    btnWhite?: BtnWhite

    solidShade?: SolidBtnShade
    solidShadeGray?: SolidBtnShade

    gradient?: SolidGradientBtn,
    grayGradient?: SolidGradientBtn,

    ghost?: BtnGhostOrSoft,
    grayGhost?: BtnGhostOrSoft,

    outline?: formOutline,
    outlineGray?: formOutline,

    soft?: BtnGhostOrSoft,
    graySoft?: BtnGhostOrSoft,

    ring?: RingColorShades,
    ringGray?: RingColorShades,
}