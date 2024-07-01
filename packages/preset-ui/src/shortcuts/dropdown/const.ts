import type { BgBodyUi, BaseColor } from "@/types";

const bgGray: BaseColor = {
	shade: "100",
	dark: {
		shade: "900",
	},
};
const innerBgGray: BaseColor = {
	shade: '200',
	dark: {
		shade: "800",
	},
};

const subInnerBgGray: BaseColor = {
	shade: "300",
	dark: {
		shade: "700",
	},
};


const whiteBg: BgBodyUi = {
	default: {
		color_shade: "white",
		dark: "gray-950"
	}
}

export const dropdownDefault = {
	whiteBg,
	bgGray,
	innerBgGray,
	subInnerBgGray,
};
