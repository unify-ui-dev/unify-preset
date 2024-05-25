import type { RingBase, RingColorShades } from "@/types";

export type Checkbox = {
	focusVisibleOutline?: RingColorShades;
	outlineBase?: RingBase;
	size?: {
		sm?: number | string;
		md?: number | string;
		lg?: number | string;
		xl?: number | string;
	};
};
