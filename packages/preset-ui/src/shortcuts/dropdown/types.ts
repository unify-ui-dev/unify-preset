import type { BgBackdropBlur, OutlineVariant, SolidShade } from "@/types";

export type WhiteBG = { light: string; dark: string };

export type Dropdown = {
	white?: WhiteBG;
	bgGray?: SolidShade;
	bgInnerGray?: SolidShade;
	bgSubInnerGray?: SolidShade;
	bgColor?: SolidShade;

	outline?: OutlineVariant;
	bgGrayBlured?: BgBackdropBlur;
	bgInnerGrayBlured?: BgBackdropBlur;
	bgWhiteBlured?: BgBackdropBlur;
};
