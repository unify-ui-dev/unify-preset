import type { BaseColor, BaseVariant, CardSizeVariant, ElSizeVariants, OutlineVariant, Soft, Subtle } from "@/types"

export type GlobalSolidUi = BaseVariant<BaseColor>
export type GlobalOutlineUi = BaseVariant<OutlineVariant>
export type GlobalSubtleUi = BaseVariant<Subtle>
export type GlobalSoftUi = BaseVariant<Soft>

export type BaseVariants = {
    variants?: {
        solid?:GlobalSolidUi,
        subtle?: GlobalSubtleUi,
        soft?: GlobalSoftUi,
        outline?: GlobalOutlineUi
    },
    size?: ElSizeVariants,
    cardSize?: CardSizeVariant
}