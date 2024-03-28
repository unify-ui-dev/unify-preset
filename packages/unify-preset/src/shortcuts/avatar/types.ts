import type { OutlineVariant, VariantSizeBoth, Soft, SolidShade, Subtle } from "@/types"

export type Avatar = {
    sizes?: VariantSizeBoth,
    placeHolderSolid?:SolidShade,
    placeHolderSolidGray:SolidShade,
    placeHolderSoft?: Soft,
    placeHoldersubtle?: Subtle
    placeHolderOutline?: OutlineVariant,
    placeHolderOutlineGray?:OutlineVariant,
    placeHoldergraySoft?: Soft,
    placeHoldergraySubtle?: Subtle,
}