import type { SizeVariants } from "@/types";

export const defaultBadgeSizes: SizeVariants = {
	xs: { py: 0.5, px: 1, textSize: "xs" },
	sm: { py: 0.5, px: 1.5, textSize: "xs" },
	md: { py: 1, px: 2, textSize: "sm" },
	lg: { py: 1, px: 2.5, textSize: "sm" },
	xl: { py: 1.25, px: 3, textSize: "base" },
};
