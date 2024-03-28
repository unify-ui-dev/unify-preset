import type { Soft, Subtle, OutlineVariant, SolidShade, ColorShade, BorderPrefix, BorderVariant } from "@/types"

export type BaseDividerC = {
    light?: ColorShade,
    dark?: ColorShade
}

export type AccordionItemBordered = {
    prefix?: BorderPrefix,
    border?: BorderVariant
}

export type Accordion = {
    grayDivider?: BaseDividerC,
    colorDivider?: BaseDividerC,
    itemWithBorder?: AccordionItemBordered
    itemWithBorderColor?: AccordionItemBordered
    solid?: SolidShade,
    solidGray?: SolidShade,
    soft?: Soft,
    softActive?:Soft,
    subtle?: Subtle
    subtleActive?:Subtle,
    outline?: OutlineVariant,
    graySoft?: Soft,
    graySoftActive?: Soft,
    neutralSoft?: Soft,
    graySubtle?: Subtle,
    graySubtleActive?: Subtle,
    neutralSubtle?: Subtle
}