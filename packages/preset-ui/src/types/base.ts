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
export type SemanticColorNames = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'gray'



export type UiConfig = { appearance: Appearance };

export type SizeVariantBase = "xs" | "sm" | "md" | "lg" | "xl"
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"
export type TextVariantBase = "xs-body" | "x-body" | "body" | "x-title" | "title" | "l-title"
export type FontWeightBase = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "thin" | "light" | "normal" | "black"

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


export type SizeBaseVaraint<T extends object> = {
	'2xs'?: T;
	xs?: T;
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
}

export type ElSizeBase = { py: number | string; px: number | string; textSize: TextSize }
export type CardSizeBase = { padding: number | string; textSize: TextSize }

export type ElSizeVariants = SizeBaseVaraint<ElSizeBase>
export type CardSizeVariant = SizeBaseVaraint<CardSizeBase>

export type RingBase = {
	offset: number;
	size: number;
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


type UBaseColor = {
	shade: ColorShade,
	textColor?: string
}
export type BaseColor = UBaseColor & {
	ignoreTextColor?: boolean,
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

export type BaseVariant<T extends object> = {
	base?: {
		primary?: T;
		secondary?: T;
		accent?: T;
		success?: T;
		warning?: T;
		info?: T;
		danger?: T;
		gray?: T;
	};
	custom?: Record<string, T>;
	global?: T;
};
export type BorderUI = UiColorBaseVariants<{ shade: ColorShade, dark?: { shade: ColorShade } }>;

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




export type TextTypos = {
	'xs-body'?: string,
	'x-body'?: string,
	body?: string,
	'x-title'?: string,
	title?: string,
	'l-title'?: string,
	'xl-title'?:string,
	'2xl-title'?:string,
}

export type BaseUI = {
	textColor?: TextTypoColor;
	textColorReverse?: TextTypoColor;
	textNeutral?: TextTypoColor;
	textTypo?: TextTypos,
	body: BgBodyUi,
	border?: BorderUI;
	bg?: BgUI;
};