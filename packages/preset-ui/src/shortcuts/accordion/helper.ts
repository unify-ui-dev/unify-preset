import type { Appearance } from "@/types";
import { BaseDividerC } from "./types";

export const genDividerY = ({
	color,
	appearance,
	divider,
}: {
	color: string;
	appearance: Appearance;
	divider: BaseDividerC
}) => {
	const { shade, dark } = divider;
	const lightVar = `${appearance === "light" || appearance === "both"
			? `divide-${color}-${shade}`
			: ""
		}`;
	const darkVar = dark ? `${appearance === "dark"
			? `divide-${color}-${dark}`
			: appearance === "both"
				? `dark-divide-${color}-${dark}`
				: ""
		} ` : '';
	return `${lightVar} ${darkVar}`;
};
