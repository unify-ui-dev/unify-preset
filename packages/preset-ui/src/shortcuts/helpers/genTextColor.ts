import type {
	Appearance,
	BaseTypoColor,
} from "@/types";
import { getShortcutsIfNotSame } from "@/utils";

export const genTextColor = (
	appearance: Appearance,
	baseTypoColor: BaseTypoColor,
) => {
	const { light, dark } = baseTypoColor;
	const lightVar = `
        ${
					appearance === "light" || appearance === "both" ? `text-${light}` : ""
				}
    `;
	const darkVar = `
        ${
					appearance === "dark"
						? `text-${dark}`
						: appearance === "both"
							? `
        ${getShortcutsIfNotSame({
					val1: light,
					val2: dark,
					shortcuts: `dark-text-${dark}`,
				})}`
							: ""
				}
    `;
	return `${lightVar} ${darkVar}`;
};