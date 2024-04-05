import type { Appearance, ColorShade, RingColorShades, BaseUI, SharedVariant, RingBase } from "."
import type { Components } from "@/shortcuts/types"

export type VariantSizeBoth = {
    xs?: number | string,
    sm?: number | string,
    md?: number | string,
    lg?: number | string,
    xl?: number | string
}

export type SharedFormConfig = {
    useRingForAll?: boolean
    ringBase?: RingBase
    ring: RingColorShades,
    grayRing: RingColorShades,
}

export type SharedConfig = {
    element?: SharedVariant,
    form?: SharedFormConfig,
}

export type formOutlineBase = {
    borderShade?: ColorShade,
    hoverBorderShade?: ColorShade,
    activeBorderShade?: ColorShade,
    textShade?: ColorShade,
    hoverTextShade?: ColorShade
}

export type formOutline = {
    useLightForBoth?: boolean,
    borderSize?: number | string,
    light?: formOutlineBase,
    dark?: formOutlineBase
}



export type UnifyUIConfig = {
    appearance?: Appearance,
    prefixState?: string,
    sharedConfig?: SharedConfig,
    components?: Components,
    globalElement?: BaseUI
}