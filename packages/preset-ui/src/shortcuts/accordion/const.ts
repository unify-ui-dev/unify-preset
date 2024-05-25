import type { AccordionItemBordered, BaseDividerC } from "./types";

const defaultDividerGray: BaseDividerC = {
	light: "200",
	dark: "800",
};

const defaultDividerColor: BaseDividerC = {
	light: "600",
	dark: "500",
};

const itemWithBorderGray: AccordionItemBordered = {
	prefix: "border-b",
	border: {
		borderSize: 1,
		light: "200",
		dark: "800",
	},
};

const itemWithBorder: AccordionItemBordered = {
	prefix: "border-b",
	border: {
		borderSize: 1,
		light: "600",
		dark: "500",
	},
};

export const defaultAcValues = {
	defaultDividerGray,
	defaultDividerColor,
	itemWithBorderGray,
	itemWithBorder,
};
