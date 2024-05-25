import type { RingBase, RingColorShades } from "@/types";

const ringBase: RingBase = {
	size: 2,
	offset: 4,
};

const ringConfig: RingColorShades = {
	light: "600",
	dark: "500",
};
const ringGrayConfig: RingColorShades = {
	light: "200",
	dark: "800",
};

export const checkboxCongig = {
	ringConfig,
	ringGrayConfig,
	ringBase,
};
