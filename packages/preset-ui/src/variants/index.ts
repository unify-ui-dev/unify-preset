import { browserVariants, dataStateVariants } from "@unifydev/unify-variant";
import type { Variant } from "unocss";
import type { Theme } from "@unocss/preset-uno";

export const getAllVariants = (prefixState?: string) => {
	const variants = [
		dataStateVariants({
			prefix: prefixState,
			variants:
				"visible|hidden|active|inactive|open|close|resize|minimize|maximaze|opened|closed|maximazed|resized|copied",
			selector: "data-state",
		}),
		browserVariants({
			variants: {
				"meter-inner-el": "::-webkit-meter-inner-element",
				"meter-optimum-val": "::-webkit-meter-optimum-value",
				"metter-bar": "::-webkit-meter-bar",
				"moz-meter-bar": "::-moz-meter-bar",

				"range-slider-thumb": "::-webkit-slider-thumb",
				"moz-range-thumb": "::-moz-range-thumb",
				"slider-runnable-track": "::-webkit-slider-runnable-track",
				"moz-range-track": "::-moz-range-track",

				"w-progress-bar": "::-webkit-progress-bar",
				"w-progress-value": "::-webkit-progress-value",
				"m-progress-bar": "::-moz-progress-bar",
				"w-indeterminate-p-value": ":indeterminate::-webkit-progress-value",
			},
		}),
	] as Variant<Theme>[];

	return variants;
};
