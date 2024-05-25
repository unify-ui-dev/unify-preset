import type { Soft, Subtle, OutlineVariant, SolidShade } from "@/types";

export type Alert = {
	padding?: number | string;
	solid?: SolidShade;
	solidGray?: SolidShade;
	soft?: Soft;
	subtle?: Subtle;
	outline?: OutlineVariant;
	outlineGray?: OutlineVariant;
	graySoft?: Soft;
	neutralSoft?: Soft;
	graySubtle?: Subtle;
};
