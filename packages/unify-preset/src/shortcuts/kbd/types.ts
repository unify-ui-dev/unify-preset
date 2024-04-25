import type { OutlineVariant, SizeVariants, Soft, SolidShade, Subtle } from "@/types"

export type Kbd = {
    sizes?: SizeVariants,
    solid?:SolidShade,
    graySolid?:SolidShade,
    
    soft?: Soft,
    graySoft?: Soft,

    subtle?: Subtle
    graySubtle:Subtle,
    
    outline?: OutlineVariant,
    grayOutline?:OutlineVariant,
}