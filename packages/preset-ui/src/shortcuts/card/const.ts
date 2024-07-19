import type { BaseColor } from "@/types";

const cardGray: BaseColor = {
	shade: "100",
	textColor: "700",
	dark: {
		shade: "900",
		textColor: "300",
	},
};
const cardInnerGray: BaseColor = {
	shade: "200",
	textColor: "800",
	dark: {
		shade: "800",
		textColor: "200",
	},
};

const cardSubInnerGray: BaseColor = {
	shade: "300",
	textColor: "800",
	dark: {
		shade: "700",
		textColor: "100",
	},
};

export const cardDefault = {
	cardGray,
	cardInnerGray,
	cardSubInnerGray,
};
