import type { Appearance, ColorShade } from "@/types";

export const genDividerY = ({
	color,
	appearance,
	divider,
	colorDivider,
}: {
	color: string;
	appearance: Appearance;
	divider: { light?: ColorShade; dark?: ColorShade };
	colorDivider: { light?: ColorShade; dark?: ColorShade };
}) => {
	const { light, dark } = color === "gray" ? divider : colorDivider;
	const lightVar = `${
		appearance === "light" || appearance === "both"
			? `divide-${color}-${light}`
			: ""
	}`;
	const darkVar = `${
		appearance === "dark"
			? `divide-${color}-${dark}`
			: appearance === "both"
				? `dark-divide-${color}-${dark}`
				: ""
	} `;
	return `${lightVar} ${darkVar}`;
};
