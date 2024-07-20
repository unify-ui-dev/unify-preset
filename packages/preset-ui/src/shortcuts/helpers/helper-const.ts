import type { OutlineVariant, Soft, Subtle, BgUI, BorderUI, RingBase, RingColorShades, BgBodyUi, BaseColor, ElSizeVariants, CardSizeVariant, TextTypos, } from "@/types";
import { BaseVariants } from "../ui/types";


export const uiSizeVariants: ElSizeVariants = {
	xs: { py: 0.5, px: 1, textSize: "xs" },
	sm: { py: 0.5, px: 1.5, textSize: "xs" },
	md: { py: 1, px: 2, textSize: "sm" },
	lg: { py: 1, px: 2.5, textSize: "sm" },
	xl: { py: 1.25, px: 3, textSize: "base" },
}

export const cardSizeVariants: CardSizeVariant = {
	xs: { padding: 2.5, textSize: "xs" },
	sm: { padding: 3, textSize: "sm" },
	md: { padding: 4, textSize: "base" },
	lg: { padding: 6, textSize: "base" },
	xl: { padding: 8, textSize: "base" },
}

const defaultSolidShades: BaseColor = {
	shade: "600",
	textColor: "white",
	dark: {
		shade: "500"
	}
};

const defaultSolidGrayShades: BaseColor = {
	shade: "100",
	textColor: "gray-700",
	dark: {
		shade: "900",
		textColor: "gray-300"
	}
};

const defaultSubtle: Subtle = {
	borderWidth: 1,
	bgShade: "50",
	borderShade: "600",
	borderOpacity: 25,
	textShade: "800",
	dark: {
		bgShade: "600",
		bgOpacity: 15,
		borderShade: "500",
		borderOpacity: 40,
		textShade: "300",
	},
};
const generalSoft: Soft = defaultSubtle;


const defaultSubtleGray: Subtle = {
	borderWidth: 1,
	bgShade: "50",
	borderShade: "400",
	borderOpacity: 30,
	textShade: "800",
	dark: {
		bgShade: "600",
		bgOpacity: 20,
		borderShade: "500",
		borderOpacity: 40,
		textShade: "300",
	},
};

const generalSoftGray: Soft = defaultSubtleGray;


const defaultOutlineELement: OutlineVariant = {
	borderSize: 1,
	shade: "600",
	textShade: "600",
	dark: {
		shade: "500",
		textShade: "500",
	},
};

const defaultOutlineGrayELement: OutlineVariant = {
	borderSize: 1,
	shade: "200",
	textShade: "700",
	dark: {
		shade: "800",
		textShade: "300",
	},
};

const defaultTypoGray = {
	title: {
		light: "gray-900",
		dark: "white",
	},
	subTitle: {
		light: "gray-800",
		dark: "gray-50",
	},
	text: {
		light: "gray-700",
		dark: "gray-300",
	},
	subText: {
		light: "gray-600",
		dark: "gray-400",
	},
};

const textTypoColorReverse = {
	title: {
		light: "white",
		dark: "gray-900",
	},
	subTitle: {
		light: "gray-50",
		dark: "gray-800",
	},
	text: {
		light: "gray-300",
		dark: "gray-700",
	},
	subText: {
		light: "gray-400",
		dark: "gray-600",
	},
};

const defaultTypoNeutral = {
	title: {
		light: "gray-950",
		dark: "white",
	},
	subTitle: {
		light: "gray-900",
		dark: "white",
	},
	text: {
		light: "gray-700",
		dark: "gray-300",
	},
	subText: {
		light: "gray-600",
		dark: "gray-400",
	},
};





const uiBodyColors: BgBodyUi = {
	default: { color_shade: "white", dark: "gray-950" },
	defaultReverse: { color_shade: "gray-950", dark: "white" },
	"light-high": { color_shade: "white", dark: "gray-900" }
}

const uiBackground: BgUI = {
	nm: {
		shade: "100",
		dark: { shade: "900" }
	},
	high: {
		shade: "200",
		dark: { shade: "800" }
	},
	higher: {
		shade: "100",
		dark: { shade: "900" },
	},
	light: {
		shade: "50",
		dark: { shade: "950" }
	},
	lighter: {
		shade: "50",
		dark: { shade: "900" }
	},
	nm_light: {
		shade: "100",
		dark: { shade: "950" }
	},
	light_nm: {
		shade: "50",
		dark: { shade: "900" }
	},
};


const bdrUI: BorderUI = {
	light: {
		shade: "50",
		dark: { shade: "950" },
	},
	lighter: {
		shade: "100",
		dark: { shade: "950" }
	},
	lightest: {
		shade: "50",
		dark: { shade: "900" }
	},
	nm: {
		shade: "100",
		dark: { shade: "900" },
	},
	high: {
		shade: "200",
		dark: { shade: "800" },
	},
	higher: {
		shade: "300",
		dark: { shade: "700" },
	},
	highest: {
		shade: "400",
		dark: { shade: "600" }
	}
};

const ringBase: RingBase = {
	size: 2,
	offset: 2,
};

const ringConfig: RingColorShades = {
	light: "600",
	dark: "500",
};
const ringGrayConfig: RingColorShades = {
	light: "200",
	dark: "800",
};

const textTypo: TextTypos = {
	"x-body": "text-10px",
	"xs-body": "text-xs",
	body: "text-base",
	"x-title": "text-lg sm-text-xl md-text-2xl",
	title: "text-3xl sm-text-4xl/snug lg-text-5xl",
	"l-title": "text-3xl/tight md-text-4xl/tight xl-text-5xl/tight",
	"xl-title": "text-3xl/tight lg-text-4xl/tight xl-text-5xl/tight",
	'2xl-title': "text-3xl/tight md-text-4xl/tight xl-text-6xl/tight"
}

export const helperDefaultValues = {
	ringBase,
	ringConfig,
	ringGrayConfig,
	defaultOutlineELement,
	defaultOutlineGrayELement,
	defaultSolidGrayShades,
	defaultSolidShades,
	defaultSubtle,
	defaultSubtleGray,
	generalSoft,
	generalSoftGray,
	defaultTypoGray,
	textTypoColorReverse,
	defaultTypoNeutral,
	bgSoligUI: uiBackground,
	bdrUI,
	uiBodyColors,
	textTypo
};

export const globalUiConfig: BaseVariants = {
	variants: {
		solid: {
			base: {
				gray: helperDefaultValues.defaultSolidGrayShades
			},
			global: helperDefaultValues.defaultSolidShades,
		},
		soft: {
			base: {
				gray: helperDefaultValues.generalSoftGray,
			},
			global: helperDefaultValues.generalSoft
		},
		subtle: {
			base: {
				gray: helperDefaultValues.defaultSubtleGray
			},
			global: helperDefaultValues.defaultSubtle
		},
		outline: {
			base: {
				gray: helperDefaultValues.defaultOutlineGrayELement
			},
			global: helperDefaultValues.defaultOutlineELement
		}
	},
	size: uiSizeVariants,
	cardSize: cardSizeVariants,

}