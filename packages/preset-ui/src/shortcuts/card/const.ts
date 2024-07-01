import type { BaseColor } from "@/types";

const cardGray: BaseColor = {
	shade: "100",
	textShade: "700",
	dark: {
		shade: "900",
		textShade: "300",
	},
};
const cardInnerGray: BaseColor = {
	shade: "200",
	textShade: "800",
	dark: {
		shade: "800",
		textShade: "200",
	},
};

const cardSubInnerGray: BaseColor = {
	shade: "300",
	textShade: "800",
	dark: {
		shade: "700",
		textShade: "100",
	},
};

export const cardDefault = {
	cardGray,
	cardInnerGray,
	cardSubInnerGray,
};
