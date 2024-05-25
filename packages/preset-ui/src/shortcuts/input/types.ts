import type { ColorShade, SolidShade } from "@/types";

export type InputBaseSize = {
	padding?: {
		x?: number | string;
		y?: number | string;
	};
	textSize?: "xs" | "sm" | "base" | "lg" | "xl";
};

export type InputOutline = {
	light?: ColorShade;
	dark?: ColorShade;
};

type inputBorderBase = {
	color?: string;
	light?: ColorShade;
	dark?: ColorShade;
};

export type Input = {
	borderSize?: number;
	focusBorderSize?: number;
	textColor?: {
		light?: ColorShade;
		dark?: ColorShade;
	};
	placeHolder?: {
		light?: ColorShade;
		dark?: ColorShade;
	};
	size?: {
		"2xs"?: InputBaseSize;
		xs?: InputBaseSize;
		sm?: InputBaseSize;
		md?: InputBaseSize;
		lg?: InputBaseSize;
		xl?: InputBaseSize;
	};
	solidGray?: SolidShade;
	lightGray?: SolidShade;
	highGray?: SolidShade;
	higherGray?: SolidShade;
	border?: inputBorderBase;
	borderLight?: inputBorderBase;
	borderHigh?: inputBorderBase;
	horderHigher?: inputBorderBase;
	focusGray?: InputOutline;
	focusColor?: InputOutline;
};