import type { OutlineVariant, Soft, BaseColor, Subtle } from "@/types";

export type Card = {
	solid?: BaseColor;
	outline?: OutlineVariant;
	softGray?: Soft;
	subtleGray?: Subtle;
	innerSolid?: BaseColor;
	subInner?: BaseColor;
};
