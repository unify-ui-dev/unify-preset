import type { Soft, Subtle, OutlineVariant, BaseColor } from "@/types";

export type Alert = {
	padding?: number | string;
	solid?: BaseColor;
	solidGray?: BaseColor;
	soft?: Soft;
	subtle?: Subtle;
	outline?: OutlineVariant;
	outlineGray?: OutlineVariant;
	graySoft?: Soft;
	neutralSoft?: Soft;
	graySubtle?: Subtle;
};
