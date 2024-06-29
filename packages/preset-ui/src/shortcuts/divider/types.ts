import { ColorShade } from "@/types";

export type DividerShadeBase = {
	shade: ColorShade;
	dark?: ColorShade;
};
export type Divider = {
	grayShades?: DividerShadeBase;
	shades?: DividerShadeBase;
};
