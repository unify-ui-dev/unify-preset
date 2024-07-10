import type { RingColorShades, RingBase, formOutline } from "@/types";
import type {
	BtnSizes,
	BtnGhostOrSoft,
	SolidBtnShade,
	BtnIconSizes,
	BtnWhite,
	GradientBtn,
	BtnSolidVariants,
	BtnSoftVariants,
	BtnGhostVariants,
	BtnGradientVariants,
	BtnOutlineVariants,
	Button,
} from "./types";

const ghostConfig: BtnGhostOrSoft = {
	hoverBgShade: "100",
	hoverBgOpacity: 50,
	pressBgShade: "100",
	pressOpacity: 70,
	textShade: "900",
	dark: {
		hoverBgShade: "600",
		hoverBgOpacity: 30,
		pressOpacity: 25,
		pressBgShade: "600",
		textShade: "300",
	},
};
const ghostGrayCongif: BtnGhostOrSoft = {
	hoverBgShade: "200",
	hoverBgOpacity: 40,
	pressBgShade: "200",
	pressOpacity: 75,
	textShade: "800",
	dark: {
		hoverBgShade: "800",
		hoverBgOpacity: 40,
		pressBgShade: "900",
		pressOpacity: 20,
		textShade: "100",
	},
};

const softConfig: BtnGhostOrSoft = {
	bgShade: "50",
	hoverBgShade: "400",
	hoverBgOpacity: 60,
	pressOpacity: 40,
	pressBgShade: "400",
	textShade: "800",
	dark: {
		bgShade: "600",
		bgOpacity: 15,
		hoverBgShade: "600",
		hoverBgOpacity: 30,
		pressOpacity: 25,
		pressBgShade: "600",
		textShade: "300",
	},
};
const softGrayConfig: BtnGhostOrSoft = {
	bgShade: "50",
	hoverBgShade: "200",
	hoverBgOpacity: 75,
	pressBgShade: "200",
	pressOpacity: 80,
	textShade: "800",
	dark: {
		bgShade: "600",
		bgOpacity: 20,
		hoverBgShade: "600",
		hoverBgOpacity: 40,
		pressBgShade: "600",
		pressOpacity: 25,
		textShade: "100",
	},
};


const btnOutline: formOutline = {
	borderSize: 1,
	borderShade: "300",
	hoverBorderShade: "400",
	activeBorderShade: "300",
	textShade: "800",
	hoverTextShade: "900",
	dark: {
		borderShade: "400",
		hoverBorderShade: "300",
		activeBorderShade: "500",
		textShade: "300",
		hoverTextShade: "400",
	},
};

const btnGrayOutline: formOutline = {
	borderSize: 1,
	borderShade: "500",
	hoverBorderShade: "600",
	activeBorderShade: "700",
	textShade: "800",
	hoverTextShade: "900",
	dark: {
		borderShade: "500",
		hoverBorderShade: "600",
		activeBorderShade: "700",
		textShade: "300",
		hoverTextShade: "400",
	},
};

const btnSizes: BtnSizes = {
	xs: {
		height: 6,
		px: 2.5,
		textSize: "sm",
	},
	sm: {
		height: 8,
		px: 3.5,
		textSize: "sm",
	},
	md: {
		height: 9.5,
		px: 4,
		textSize: "base",
	},
	lg: {
		height: 10.5,
		px: 5,
		textSize: "base",
	},
	xl: {
		height: 12,
		px: 6,
		textSize: "base",
	},
};

const btnIconSizes: BtnIconSizes = {
	xs: {
		size: 6,
		textSize: "sm",
	},
	sm: {
		size: 8,
		textSize: "sm",
	},
	md: {
		size: 9.5,
		textSize: "base",
	},
	lg: {
		size: 10.5,
		textSize: "base",
	},
	xl: {
		size: 12,
		textSize: "base",
	},
};

const ringBase: RingBase = {
	size: 2,
	offset: 2,
};
const ringConfig: RingColorShades = {
	light: "600",
	dark: "600",
};
const ringGrayConfig: RingColorShades = {
	light: "300",
	dark: "700",
};

const solidShade: SolidBtnShade = {
	bgShade: "600",
	hoverBgShade: "700",
	pressBgShade: "800",
};


const defaultBtnWhite: BtnWhite = {
	bg: "white",
	textColor: "gray-900",
	hoverBg: "gray-50",
	pressBg: "gray-100",
	dark: {
		bg: "gray-950",
		textColor: "white",
		hoverBg: "gray-900/70",
		pressBg: "gray-800",
	},
};

const btnGradient: GradientBtn = {
	borderShade: "600",
	bgShadeFrom: "600",
	bgShadeTo: "500",
	hoverShadeTo: "600",
	hoverShadeFrom: "700",
	dark: {
		borderShade: "600",
		bgShadeFrom: "600",
		bgShadeTo: "500",
		hoverShadeTo: "500",
		hoverShadeFrom: "700",
	},
};


const solidVariants: BtnSolidVariants = {
	base: {
		primary: solidShade,
		secondary: solidShade,
		accent: solidShade,
		info: solidShade,
		warning: solidShade,
		danger: solidShade,
		success: solidShade,
		gray: solidShade,
	},
	global: solidShade
}
const softVariants: BtnSoftVariants = {
	base: {
		primary: softConfig,
		secondary: softConfig,
		accent: softConfig,
		info: softConfig,
		warning: softConfig,
		danger: softConfig,
		success: softConfig,
		gray: softGrayConfig,
	},
	global: softConfig
}
const ghostVariants: BtnGhostVariants = {
	base: {
		primary: ghostConfig,
		secondary: ghostConfig,
		accent: ghostConfig,
		info: ghostConfig,
		warning: ghostConfig,
		danger: ghostConfig,
		success: ghostConfig,
		gray: ghostGrayCongif,
	},
	global: ghostConfig
}
const gradientVariants: BtnGradientVariants = {
	global: btnGradient
}
const outlineVariants: BtnOutlineVariants = {
	base: {
		primary: btnOutline,
		secondary: btnOutline,
		accent: btnOutline,
		info: btnOutline,
		warning: btnOutline,
		danger: btnOutline,
		success: btnOutline,
		gray: btnGrayOutline,
	},
	global: btnOutline
}

export const btnCongig: Button = {
	solidVariants,
	softVariants,
	ghostVariants,
	gradientVariants,
	outlineVariants,
	sizes: btnSizes,
	iconSizes: btnIconSizes,
	ring: ringConfig,
	ringGray: ringGrayConfig,
	btnWhite: defaultBtnWhite,
	ringBase,
};
