import type {
	ColorShade,
	BorderPrefix,
} from "@/types";

export type BaseDividerC = {
	shade: ColorShade;
	dark?: ColorShade;
};

export type AccordionItemBordered = {
	prefix?: BorderPrefix;
	border: { shade: ColorShade, dark?: { shade: ColorShade } };
};

export type Accordion = {
	grayDivider?: BaseDividerC;
	colorDivider?: BaseDividerC;
	itemWithBorder?: AccordionItemBordered;
};
