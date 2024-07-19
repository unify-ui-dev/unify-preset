import { SizeBaseVaraint } from "@/types";

export type BaseSwitchInfo = {
	width: number | string;
	height: number | string;
	translateX: number | string;
	indicatorSize: number | string;
	left: number | string;
};

export type SwitchInfo = SizeBaseVaraint<BaseSwitchInfo>
export type switchSize = "sm" | "md" | "lg" | "xl";
