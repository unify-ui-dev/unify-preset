import type { OutlineVariant, SizeVariants, Soft, SolidShade, Subtle } from "@/types"

export type Badge = {
    sizes?: SizeVariants,
    solid?:SolidShade,
    graySolid?:SolidShade,
    
    soft?: Soft,
    graySoft?: Soft,
    neutralSoft?: Soft,

    subtle?: Subtle
    graySubtle:Subtle,
    
    outline?: OutlineVariant,
    grayOutline?:OutlineVariant,
}