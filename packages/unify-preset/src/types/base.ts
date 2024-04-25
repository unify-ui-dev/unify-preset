export type ColorShade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950"
export type Appearance = "light" | "dark" | "both"

export type UiConfig = { appearance: Appearance }
export type TextSizes = "xs" | "sm" | "base" | "lg" | "xl" | "2xl"

type BorderPosition = "b" | "t" | "l" | "r" | "x" | "y"
export type BorderPrefix = "border" | `border-${BorderPosition}`

type GradientDirection = "tr" | "t" | "tl" | "b" | "bl" | "br" | "l" | "lt" | "lb" | "r" | "rt" | "rb"
export type BgGradientTo = `to-${GradientDirection}`

type BaseGradientText = {
    colorFrom: string,
    colorTo: string,
}
export type GradientText = {
    light: BaseGradientText,
    dark: BaseGradientText
}


export type BaseTypoColor = {
    light: string,
    dark: string
}
export type TextTypoColor = {
    title: BaseTypoColor,
    subTitle: BaseTypoColor,
    text: BaseTypoColor,
    subText: BaseTypoColor
}

export type BorderVariant = { borderSize?: number | string, light?: ColorShade, dark?: ColorShade }
export type SizeVariants = {
    xs?: { py?: number | string, px?: number | string, textSize?: TextSizes },
    sm?: { py?: number | string, px?: number | string, textSize?: TextSizes },
    md?: { py?: number | string, px?: number | string, textSize?: TextSizes },
    lg?: { py?: number | string, px?: number | string, textSize?: TextSizes },
    xl?: { py?: number | string, px?: number | string, textSize?: TextSizes }
}

export type RingBase = {
    offset?: number | string
    size?: number | string,
}

export type RingColorShades = {
    useLightForBoth?: boolean,
    light?: ColorShade
    dark?: ColorShade
}

export type SoftBase = {
    bgShade?: ColorShade,
    bgOpacity?: number,
    textShade?: ColorShade
}

export type Soft = {
    useLightForBoth?: boolean,
    light?: SoftBase,
    dark?: SoftBase
}

export type SolidShadeBase = {
    bgShade?: ColorShade,
    textShade?: ColorShade,
}


export type SolidShade = {
    useLightForBoth?: boolean
    light?: SolidShadeBase
    dark?: SolidShadeBase
}

export type SubtleBase = {
    borderShade?: ColorShade,
    borderOpacity?: number | string
} & SoftBase
export type Subtle = {
    useLightForBoth?: boolean
    borderWidth?: number | string
    light?: SubtleBase
    dark?: SubtleBase
}

export type OutlineBase = {
    borderShade?: ColorShade,
    textShade?: ColorShade,
}

export type OutlineVariant = {
    useLightForBoth?: boolean
    borderSize?: number | string,
    light?: OutlineBase
    dark?: OutlineBase
}


type BaseBlurColor = {
    color: string,
    opacity: number
}
export type BgBackdropBlur = {
    useLightForBoth?:boolean
    blur: "lg" | "xl" | "2xl" | "3xl"
    light: BaseBlurColor,
    dark: BaseBlurColor,
}

export type SharedVariant = {
    solid?: SolidShade,
    solidGray?: SolidShade
    ghost?: Soft,
    soft?: Soft,
    softActive?: Soft,
    softGray?: Soft,
    graySoftActive?: Soft,
    outlineGray?: OutlineVariant,
    subtle?: Subtle,
    subtleActive?: Subtle,
    subtleGray?: Subtle,
    graySubtleActive?: Subtle,

    outline?: OutlineVariant,
    outlineLight?: OutlineVariant,
    outlineHigh?: OutlineVariant,
    outlineHigher?: OutlineVariant,
    outlineLightGray?: OutlineVariant,
    outlineHighGray?: OutlineVariant,
    outlineHigherGray?: OutlineVariant,
}


type BaseColor = {
    useLightForBoth?:boolean
    light?: ColorShade,
    dark?: ColorShade
}


export type BorderUI = {
    borderSize?: number | string
    high?: BaseColor,
    higher?: BaseColor,
    light?: BaseColor,
    default?: BaseColor
    bgBackdropBlur?:BgBackdropBlur
}

export type BgUI = {
    grayHigh?: SolidShade,
    grayHigher?: SolidShade,
    grayLight?: SolidShade,
    gray?: SolidShade
}
export type BaseUI = {
    bodyColor?: TextTypoColor,
    bodyColorReverse?: TextTypoColor
    bodyNeutral?: TextTypoColor,
    bodyBg?: { light: string, dark: string }
    bodyBgInverse?: { light: string, dark: string }
    borderGray?: BorderUI,
    borderColor?: BorderUI
    grayBg?: BgUI
}