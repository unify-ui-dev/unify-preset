import type { Appearance } from "@/types";

export const getRadioBase = (appearance: Appearance, color: string) => {
	const lightV = `${
		appearance === "light" || appearance === "both"
			? `bg-white b b-gray-200 text-${color}-600`
			: ""
	}`;

	const darkV = `${
		appearance === "dark"
			? `text-${color}-600 checked-bg-current checked-b-transparent indeterminate-bg-current indeterminate-b-transparent b bg-gray-950 b-gray-800`
			: appearance === "both"
				? `dark-text-${color}-600 dark-checked-bg-current dark-checked-b-transparent dark-indeterminate-bg-current dark-indeterminate-b-transparent dark-bg-gray-950 dark-b-gray-800`
				: ""
	}`;

	return `${lightV} ${darkV}`;
};
