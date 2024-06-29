import type {
	OutlineVariant,
	ElSizeVariants,
	Soft,
	BaseColor,
	Subtle,
} from "@/types";

export type Badge = {
	sizes?: ElSizeVariants;
	solid?: BaseColor;
	graySolid?: BaseColor;

	soft?: Soft;
	graySoft?: Soft;
	neutralSoft?: Soft;

	subtle?: Subtle;
	graySubtle: Subtle;

	outline?: OutlineVariant;
	grayOutline?: OutlineVariant;
};
