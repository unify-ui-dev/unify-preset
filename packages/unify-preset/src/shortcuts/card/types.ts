import type { ColorShade, OutlineVariant, SolidShade, Subtle } from "@/types"


export type CardSoft = {
    light?: {
        bgShade?: ColorShade,
        bgOpacity?: number | string
    },
    dark?: {
        bgShade?: ColorShade,
        bgOpacity?: number | string,
    },
}

export type Card = {
    solid?: SolidShade,
    outline?: OutlineVariant,
    softGray?: CardSoft,
    subtleGray?: Subtle,
    innerSolid?:SolidShade,
    subInner?:SolidShade,
}