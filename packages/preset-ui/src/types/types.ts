import type {
	Appearance,
	ColorShade,
	RingColorShades,
	BaseUI,
	SharedVariant,
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

export type SharedUiConfig = {
	globalElement?: SharedVariant;
	form?: SharedFormConfig;
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
	ui?: SharedUiConfig;
	components?: Components;
	baseUi?: BaseUI;
};
