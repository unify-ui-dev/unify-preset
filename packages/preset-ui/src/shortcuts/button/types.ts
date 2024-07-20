import type {
	RingColorShades,
	ColorShade,
	formOutline,
	TextSize,
	RingBase,
	BaseVariant,
} from "@/types";






export type GhostSoftBase = {
	bgShade?: ColorShade;
	bgOpacity?: number;
	hoverBgOpacity: number;
	hoverBgShade: ColorShade;
	pressBgShade: ColorShade;
	pressOpacity: number;
	textShade: ColorShade;
};

export type BtnGhostOrSoft = GhostSoftBase & {
	dark?: GhostSoftBase;
};

export type BtnSizeBase = {
	height?: number | string;
	px?: number | string;
	textSize?: TextSize;
};

export type BtnSizes = {
	xs?: BtnSizeBase;
	sm?: BtnSizeBase;
	md?: BtnSizeBase;
	lg?: BtnSizeBase;
	xl?: BtnSizeBase;
};

export type BtnIconBase = { size?: number | string; textSize?: TextSize };
export type BtnIconSizes = {
	xs?: BtnIconBase;
	sm?: BtnIconBase;
	md?: BtnIconBase;
	lg?: BtnIconBase;
	xl?: BtnIconBase;
};

type BaseSoligGradientBtn = {
	borderShade: ColorShade;
	bgShadeFrom: ColorShade;
	bgShadeTo: ColorShade;
	hoverShadeFrom: ColorShade;
	hoverShadeTo: ColorShade;
};

export type GradientBtn = BaseSoligGradientBtn & {
	useLightForBoth?: boolean;
	dark?: BaseSoligGradientBtn;
};

export type SolidBtnShadeBase = {
	bgShade: ColorShade;
	hoverBgShade: ColorShade;
	pressBgShade: ColorShade;
};
export type SolidBtnShade = SolidBtnShadeBase & {
	dark?: SolidBtnShadeBase;
};
type BaseBtnWhite = {
	bg: string;
	hoverBg: string;
	pressBg: string;
	textColor: string;
};
export type BtnWhite = BaseBtnWhite & {
	dark?: BaseBtnWhite;
};


export type BtnSolidVariants = BaseVariant<SolidBtnShade>;
export type BtnSoftVariants = BaseVariant<BtnGhostOrSoft>;
export type BtnGhostVariants = BaseVariant<BtnGhostOrSoft>;
export type BtnGradientVariants = BaseVariant<GradientBtn>;
export type BtnOutlineVariants = BaseVariant<formOutline>

export type Button = {
	ringBase?: RingBase;
	sizes?: BtnSizes;
	iconSizes?: BtnIconSizes;
	btnWhite?: BtnWhite;
	ring?: RingColorShades;
	ringGray?: RingColorShades;

	solidVariants?: BtnSolidVariants,
	outlineVariants?: BtnOutlineVariants,
	softVariants?: BtnSoftVariants,
	ghostVariants?: BtnGhostVariants,
	gradientVariants?: BtnGradientVariants
};