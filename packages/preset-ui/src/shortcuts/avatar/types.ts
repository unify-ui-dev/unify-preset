import type {
	OutlineVariant,
	VariantSizeBoth,
	Soft,
	BaseColor,
	Subtle,
} from "@/types";

export type Avatar = {
	sizes?: VariantSizeBoth;
	placeHolderSolid?: BaseColor;
	placeHolderSolidGray: BaseColor;
	placeHolderSoft?: Soft;
	placeHoldersubtle?: Subtle;
	placeHolderOutline?: OutlineVariant;
	placeHolderOutlineGray?: OutlineVariant;
	placeHoldergraySoft?: Soft;
	placeHoldergraySubtle?: Subtle;
};
