import type { DividerShadeBase } from "./types";

export const getDivider = ({
	color,
	appearance,
	shades,
	prefix,
}: {
	prefix: "border" | "before-bg";
	color: string;
	appearance: "dark" | "both" | "light";
	shades: DividerShadeBase;
}) => {
	const { light, dark } = shades;
	const variantLight = `${
		appearance === "light" || appearance === "both"
			? `${prefix}-${color}-${light}`
			: ""
	} `;
	const variantDark = `${
		appearance === "dark"
			? `${prefix}-${color}-${dark}`
			: appearance === "both"
				? `dark-${prefix}-${color}-${dark}`
				: ""
	}`;
	return `${variantLight} ${variantDark}`;
};
