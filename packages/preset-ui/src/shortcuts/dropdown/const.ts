import type { BgBackdropBlur, SolidShade } from "@/types";
import { WhiteBG } from "./types";

const bgGray: SolidShade = {
	light: {
		bgShade: "100",
		textShade: "700",
	},
	dark: {
		bgShade: "900",
		textShade: "300",
	},
};
const innerBgGray: SolidShade = {
	light: {
		bgShade: "200",
		textShade: "800",
	},
	dark: {
		bgShade: "800",
		textShade: "200",
	},
};

const subInnerBgGray: SolidShade = {
	light: {
		bgShade: "300",
		textShade: "800",
	},
	dark: {
		bgShade: "700",
		textShade: "200",
	},
};

const whiteBlured: BgBackdropBlur = {
	blur: "xl",
	light: {
		color: "white",
		opacity: 60,
	},
	dark: {
		color: "gray-950",
		opacity: 55,
	},
};

const grayBlured: BgBackdropBlur = {
	blur: "xl",
	light: {
		color: "gray-100",
		opacity: 50,
	},
	dark: {
		color: "gray-900",
		opacity: 30,
	},
};

const grayInnerBlured: BgBackdropBlur = {
	blur: "xl",
	light: {
		color: "white",
		opacity: 50,
	},
	dark: {
		color: "gray-800",
		opacity: 40,
	},
};

const whiteBg: WhiteBG = {
	light: "white",
	dark: "gray-950",
};
export const dropdownDefault = {
	whiteBg,
	bgGray,
	innerBgGray,
	subInnerBgGray,
	whiteBlured,
	grayBlured,
	grayInnerBlured,
};
