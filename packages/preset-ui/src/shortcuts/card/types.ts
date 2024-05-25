import type { OutlineVariant, Soft, SolidShade, Subtle } from "@/types";

export type Card = {
	solid?: SolidShade;
	outline?: OutlineVariant;
	softGray?: Soft;
	subtleGray?: Subtle;
	innerSolid?: SolidShade;
	subInner?: SolidShade;
};
