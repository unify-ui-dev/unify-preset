import type { AccordionItemBordered, BaseDividerC } from "./types";

const defaultDividerGray: BaseDividerC = {
	shade: "200",
	dark: "800",
};

const defaultDividerColor: BaseDividerC = {
	shade: "600",
	dark: "500",
};

const itemWithBorderGray: AccordionItemBordered = {
	prefix: "border-b",
	border: {
		shade: "200",
		dark: { shade: "800" },
	},
};

const itemWithBorder: AccordionItemBordered = {
	prefix: "border-b",
	border: {
		shade: "600",
		dark: { shade: "500" },
	},
};

export const defaultAcValues = {
	defaultDividerGray,
	defaultDividerColor,
	itemWithBorderGray,
	itemWithBorder,
};
