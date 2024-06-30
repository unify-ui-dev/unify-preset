export type ColorShade =
	| "50"
	| "100"
	| "200"
	| "300"
	| "400"
	| "500"
	| "600"
	| "700"
	| "800"
	| "900"
	| "950";
export type Appearance = "light" | "dark" | "both";

export type UiConfig = { appearance: Appearance };
export type TextSizes = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

type BorderPosition = "b" | "t" | "l" | "r" | "x" | "y";
export type BorderPrefix = "border" | `border-${BorderPosition}`;


export type BaseTypoColor = {
	light: string;
	dark: string;
};
export type TextTypoColor = {
	title: BaseTypoColor;
	subTitle: BaseTypoColor;
	text: BaseTypoColor;
	subText: BaseTypoColor;
};

export type BorderVariant = BaseColor

export type ElSizeBase = { py: number | string; px: number | string; textSize: TextSizes }
export type ElSizeVariants = {
	'2xs'?: ElSizeBase;
	xs?: ElSizeBase;
	sm?: ElSizeBase;
	md?: ElSizeBase;
	lg?: ElSizeBase;
	xl?: ElSizeBase;
};

export type RingBase = {
	offset?: number | string;
	size?: number | string;
};

export type RingColorShades = {
	useLightForBoth?: boolean;
	light?: ColorShade;
	dark?: ColorShade;
};

export type SoftBase = {
	bgShade: ColorShade;
	bgOpacity?: number;
	textShade: ColorShade;
};

export type Soft = SoftBase & {
	dark?: SoftBase;
};

export type BaseUiShade = {
	shade: ColorShade;
};



type UiSolidBase = {
	bgShade: ColorShade,
	textShade: ColorShade,
}
export type UiSolid = UiSolidBase & {
	dark?: UiSolidBase
}

export type SubtleBase = {
	borderShade: ColorShade;
	borderOpacity: number | string;
} & SoftBase;


export type Subtle = SubtleBase & {
	borderWidth?: number | string;
	dark?: SubtleBase;
};

export type OutlineBase = {
	shade: ColorShade;
	textShade: ColorShade;
};

export type OutlineVariant = OutlineBase & {
	borderSize?: number | string;
	dark?: OutlineBase;
};


export type SharedVariant = {
	solid?: BaseColor;
	solidGray?: BaseColor;
	ghost?: Soft;
	soft?: Soft;
	softActive?: Soft;
	softGray?: Soft;
	graySoftActive?: Soft;
	outlineGray?: OutlineVariant;
	outline?: OutlineVariant,
	subtle?: Subtle;
	subtleActive?: Subtle;
	subtleGray?: Subtle;
	graySubtleActive?: Subtle;
};

type UBaseColor = {
	shade: ColorShade,
	textShade?: ColorShade
}
export type BaseColor = UBaseColor & {
	dark?: UBaseColor
};

type UiColorBaseVariants<T extends object> = {
	light?: T;
	lighter?: T,
	lightest?: T,
	nm?: T;
	high?: T;
	higher?: T;
	highest?: T;
	light_nm?: T,
	nm_light?: T
}

export type BorderUI = UiColorBaseVariants<BaseColor>;

export type BgUI = UiColorBaseVariants<BaseColor>;

export type BaseBodyUi = {
	color_shade: string,
	dark?: string
}

export type BgBodyUi = {
	default?: BaseBodyUi,
	defaultReverse?: BaseBodyUi,
	'light-high'?: BaseBodyUi
}
export type BaseUI = {
	bodyColor?: TextTypoColor;
	bodyColorReverse?: TextTypoColor;
	bodyNeutral?: TextTypoColor;
	body: BgBodyUi,
	border?: BorderUI;
	bg?: BgUI;
};