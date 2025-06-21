import type { BaseVariants } from "@/shortcuts/ui/types";
import type {
	Appearance,
	RingBase,
} from ".";
import type { Components } from "@/shortcuts/types";
import { ThingsToExclude, UiButton } from "@/ui/type";

export type uiColorFormat = "rgb" | "hex" | "hsl" | "oklch" | "none"

export type VariantSizeBoth = {
	xs?: number | string;
	sm?: number | string;
	md?: number | string;
	lg?: number | string;
	xl?: number | string;
};

export type SharedFormConfig = {
	ringBase?: RingBase;
};


export type formOutline = {
	borderSize?: number | string;
};



export type UiHelperConfig = {
	variablePrefix?: string,
	colorFormat?: uiColorFormat,
	components?: {
		button?: UiButton
	},
	exclude?: ThingsToExclude,
	appearance?: Appearance,
	defineColor?:boolean
}

export type presetUiConfig = {
	components?: Components;
	baseVariants?: BaseVariants,
	colorFormat?: uiColorFormat;
	appearance?: Appearance,
	uiGen?: UiHelperConfig
};
