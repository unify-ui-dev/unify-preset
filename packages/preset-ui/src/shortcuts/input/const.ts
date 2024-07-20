import type { ElSizeVariants, RingBase } from "@/types";
import type { InputBg, InputBorder, InputPlaceHolder } from "./types";

export const defRingBase: RingBase = {
	size: 2,
	offset: 6,
};

export const InputSizes: ElSizeVariants = {
	"2xs": {
		px: 2,
		py: 1,
		textSize: "xs",
	},
	xs: {
		px: 2.5,
		py: 1.5,
		textSize: "xs",
	},
	sm: {
		px: 2.5,
		py: 1.5,
		textSize: "sm",
	},
	md: {
		px: 3,
		py: 2,
		textSize: "sm",
	},
	lg: {
		px: 3.5,
		py: 2.5,
		textSize: "sm",
	},
	xl: {
		px: 3.5,
		py: 2.5,
		textSize: "base",
	},
}

export const InputBg_:InputBg = {
	normalGray: {
		shade: "100",
		ignoreTextColor:true,
		dark: { shade: "900" }
	},
	lightGray: {
		shade: "50",
		ignoreTextColor:true,
		dark: { shade: "950" }
	},
	higherGray: {
		shade: "300",
		ignoreTextColor:true,
		dark: { shade: "700" }
	},
	highGray: {
		shade: "200",
		ignoreTextColor:true,
		dark: { shade: "800" }
	}
}


export const inputPlaceHolder: InputPlaceHolder = {
	light: {
		shade: "600",
		dark: "400"
	},
	lighter: {
		shade: "500",
		dark: "500"
	},
	lightest: {
		shade: "400",
		dark: "600"
	}
}

export const focusColor = {
	color: "primary",
	shade: "600",
	dark: "500",
}
export const InputBdr: InputBorder = {
	normal: {
		shade: "100",
		dark: "900",
	},
	light: {
		shade: "50",
		dark: "950",
	},
	high: {
		shade: "200",
		dark: "800",
	},
	higher: {
		shade: "300",
		dark: "700",
	}
}
