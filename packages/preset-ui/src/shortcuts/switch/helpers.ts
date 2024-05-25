import type { Appearance } from "@/types";

export const getInderteminSwitch = (appearance: Appearance) =>
	`${
		appearance === "both"
			? "dark:indeterminate:bg-current dark:indeterminate:border-transparent"
			: appearance === "dark"
				? "indeterminate:bg-current indeterminate:border-transparent"
				: ""
	}`;
