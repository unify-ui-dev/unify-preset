import type { Appearance, RingColorShades } from "@/types";
import { getConfigValue } from "../utils";

export const getBackgroundOpacity = (opacity?: number) =>
	typeof opacity === "number" ? `/${opacity}` : "";

export const getRealOpacityValue = (opacity: number) => typeof opacity === 'number' ? `${opacity / 100}` : '1';

export const getRingBase = (
	appearance: Appearance,
	size?: number | string,
	offset?: number | string,
) => {
	const lightV = `${appearance === "light" || appearance === "both" ? "ring-offset-white" : ""
		}`;
	const darkV = `${appearance === "dark"
		? "ring-offset-gray-950"
		: appearance === "both"
			? "dark-ring-offset-gray-950"
			: ""
		}`;

	return `ring-${getConfigValue(
		size,
	)} ring-transparent ring-offset-${getConfigValue(
		offset || 4,
	)} ${lightV} ${darkV}`;
};

export const getRingOffsetBg = (appearance: Appearance) => {
	const lightV = `${appearance === "light" || appearance === "both"
		? "focus-visible:ring-offset-white"
		: ""
		}`;
	const darkV = `${appearance === "dark"
		? "focus-visible:ring-offset-gray-950"
		: appearance === "both"
			? "dark:focus-visible:ring-offset-gray-950"
			: ""
		}`;
	return `${lightV} ${darkV}`;
};

export const genFocusVisibleOutline = (
	color: string,
	appearance: Appearance,
	focusRing: RingColorShades,
) => {
	if (color === "neutral")
		return `${genVariantFocusVisibleOutlineBlack(appearance)}`;

	const isCurrent = color === "current";
	const ringLight = `${appearance === "light" || appearance === "both"
		? `focus-visible-outline-${color}${!isCurrent ? `-${focusRing.light}` : ""
		}`
		: ""
		}`;

	const ringDark = `${appearance === "dark"
		? `focus-visible-outline-${color}${!isCurrent ? `-${focusRing.dark}` : ""
		}`
		: appearance === "both"
			? `dark-focus-visible-outline-${color}${!isCurrent ? `-${focusRing.dark}` : ""
			}`
			: ""
		}`;
	return `${ringLight} ${ringDark}`;
};

const genVariantFocusVisibleOutlineBlack = (appearance: Appearance) => {
	const ringLight = `${appearance === "light" || appearance === "both"
		? "focus-visible-outline-gray-900"
		: ""
		}`;
	const ringDark = `${appearance === "dark"
		? "focus-visible-outline-white"
		: appearance === "both"
			? "dark-focus-visible-outline-white"
			: ""
		}`;
	return `${ringLight} ${ringDark}`;
};
