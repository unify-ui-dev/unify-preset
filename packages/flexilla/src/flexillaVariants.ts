import { dataStateVariants } from "@unifydev/unify-variant";
import type { Variant } from "unocss";
import type { Theme } from "@unocss/preset-uno";

export const getAllVariants = (prefixState?: string) => {
	const variants = [
		dataStateVariants({
			prefix: prefixState,
			variants:
				"visible|hidden|active|inactive|open|close|opened|closed|resize|minimize|maximaze|opened|closed|maximazed|resized|copied",
			selector: "data-state",
		}),
		dataStateVariants({
			prefix: prefixState,
			variants:
				"active",
			selector: "data-focus",
		}),
		dataStateVariants({
			prefix: prefixState,
			variants:
				"icon|label|description|kbd",
			selector: "slot",
		}),
		dataStateVariants({
			prefix: prefixState,
			variants:
				"x|y",
			selector: "data-ax",
		}),
	] as Variant<Theme>[];

	return variants;
};
