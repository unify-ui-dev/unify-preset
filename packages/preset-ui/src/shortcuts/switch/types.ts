export type BaseSwitchInfo = {
	width: number | string;
	height: number | string;
	translateX: number | string;
	indicatorSize: number | string;
	left: number | string;
};

export type SwitchInfo = {
	sm?: BaseSwitchInfo;
	md?: BaseSwitchInfo;
	lg?: BaseSwitchInfo;
	xl?: BaseSwitchInfo;
};
export type switchSize = "sm" | "md" | "lg" | "xl";
