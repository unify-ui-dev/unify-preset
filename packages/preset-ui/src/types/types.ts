import type { BaseVariants } from "@/shortcuts/ui/types";
import type {
	Appearance,
	ColorShade,
	RingColorShades,
	BaseUI,
	RingBase,
} from ".";
import type { Components } from "@/shortcuts/types";

export type VariantSizeBoth = {
	xs?: number | string;
	sm?: number | string;
	md?: number | string;
	lg?: number | string;
	xl?: number | string;
};

export type SharedFormConfig = {
	ringBase?: RingBase;
	ring: RingColorShades;
	grayRing: RingColorShades;
};


export type formOutlineBase = {
	borderShade: ColorShade;
	hoverBorderShade: ColorShade;
	activeBorderShade: ColorShade;
	textShade: ColorShade;
	hoverTextShade: ColorShade;
};

export type formOutline = formOutlineBase & {
	borderSize?: number | string;
	dark?: formOutlineBase;
};

/**
 * - appearance
 * - prefixDataStateVariant
 * - components
 * - baseUi
 */
export type presetUiConfig = {
	appearance?: Appearance;
	prefixDataStateVariant?: string;
	formShared?: SharedFormConfig;
	components?: Components;
	baseUi?: BaseUI;
	baseVariants?: BaseVariants,
};
