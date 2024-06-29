import type {
	Soft,
	Subtle,
	OutlineVariant,
	BaseColor,
	ColorShade,
	BorderPrefix,
	BorderVariant,
} from "@/types";

export type BaseDividerC = {
	light?: ColorShade;
	dark?: ColorShade;
};

export type AccordionItemBordered = {
	prefix?: BorderPrefix;
	border: BorderVariant;
};

export type Accordion = {
	grayDivider?: BaseDividerC;
	colorDivider?: BaseDividerC;
	itemWithBorder?: AccordionItemBordered;
	solid?: BaseColor;
	solidGray?: BaseColor;
	soft?: Soft;
	softActive?: Soft;
	subtle?: Subtle;
	subtleActive?: Subtle;
	outline?: OutlineVariant;
	graySoft?: Soft;
	graySoftActive?: Soft;
	neutralSoft?: Soft;
	graySubtle?: Subtle;
	graySubtleActive?: Subtle;
	neutralSubtle?: Subtle;
};
