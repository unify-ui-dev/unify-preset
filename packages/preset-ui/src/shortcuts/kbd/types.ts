import type {
	OutlineVariant,
	ElSizeVariants,
	Soft,
	BaseColor,
	Subtle,
} from "@/types";

export type Kbd = {
	sizes?: ElSizeVariants;
	solid?: BaseColor;
	graySolid?: BaseColor;

	soft?: Soft;
	graySoft?: Soft;

	subtle?: Subtle;
	graySubtle: Subtle;

	outline?: OutlineVariant;
	grayOutline?: OutlineVariant;
};
