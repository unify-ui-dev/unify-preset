import type { ColorShade, BaseColor, ElSizeVariants } from "@/types";


type InputBorderBase = {
	shade: ColorShade;
	dark?: ColorShade;
};

type BasePlaceHolder = {
	shade: ColorShade;
	dark?: ColorShade;
}
export type InputBorder = {
	normal?: InputBorderBase;
	light?: InputBorderBase;
	high?: InputBorderBase;
	higher?: InputBorderBase;
}
export type InputPlaceHolder = {
	light?: BasePlaceHolder,
	lighter?: BasePlaceHolder,
	lightest?: BasePlaceHolder
}
export type Input = {
	placeHolder?: InputPlaceHolder;
	size?: ElSizeVariants;
	background?: {
		normalGray?: BaseColor;
		lightGray?: BaseColor;
		highGray?: BaseColor;
		higherGray?: BaseColor;
	}
	border?: InputBorder,
	bordered?: {
		md?: {
			size: number,
			focus?: number,
		},
		lg?: {
			size: number,
			focus?: number,
		}
	}
	borderFocusColor: {
		color: string,
		shade: ColorShade,
		dark?: ColorShade
	}
};
