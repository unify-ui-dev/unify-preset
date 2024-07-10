import { toEscapedSelector as e } from "unocss";
import type { Rule, RuleContext } from "unocss";
import type { Theme } from "@unocss/preset-uno";
import type { BarShade, variantSize } from "./types";
import {
	getSizeProgress_Meter,
	getRadius,
	getRangeSize,
	getVariableBgValue,
	getBarShades,
	extractColorAndShades,
} from "./utils";
import type { Appearance, ColorShade } from "@/types";
import { getNextShade, getPrevShade } from "@/utils/colors-utils";

export const getAllRules = (appearance: Appearance) => {
	const rules = [
		[
			"u-fx-popper",
			{
				position: "absolute",
				left: "var(--fx-popper-placement-x)",
				top: "var(--fx-popper-placement-y)",
			},
		],
		[
			"moz-meter",
			{
				height: "var(--metter-bar-height)",
				"border-radius": "var(--metter-bar-radius)",
				"border-style": "none",
				"background-color": "currentColor",
				"background-image": "none",
				transition: "all cubic-bezier(0.4, 0, 0.2, 1) 150ms",
			},
		],
		[
			/^meter-h-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({ "--metter-bar-height": `${getSizeProgress_Meter(d)}` }),
			{ autocomplete: "meter-h-(xs|sm|md|lg|xl|2xl)" },
		],
		[
			/^meter-rounded-(sm|md|lg|xl|full)$/,
			([, d]) => ({ "--metter-bar-radius": `${getRadius(d)}` }),
			{ autocomplete: "meter-rounded-(sm|md|lg|xl|full)" },
		],
		[
			/^range-thumb-size-(xs|sm|md|lg|xl)$/,
			([, d], { variantHandlers }) => {
				if (variantHandlers.length) return;
				return {
					"--range-slide-thumb-size": `${getRangeSize(d as variantSize).size}`,
					"--range-track-height": `${getRangeSize(d as variantSize).track}`,
					"--range-mt": `${getRangeSize(d as variantSize).mt}`,
				};
			},
			{ autocomplete: "range-thumb-size-(xs|sm|md|lg|xl)" },
		],
		[
			/^range-thumb-bg-(.*)$/,
			([, body]: string[], { theme }: RuleContext<Theme>) => {
				return {
					"--range-thumb-bg": `${getVariableBgValue(body, theme)}`,
				};
			},
			{ autocomplete: "range-thumb-bg-$colors" },
		],
		[
			/^switch-checked-thumb-(.*)$/,
			([, body]: string[], { theme }: RuleContext<Theme>) => {
				return {
					"--switch-checked-thumb": `${getVariableBgValue(body, theme)}`,
				};
			},
			{ autocomplete: "switch-checked-thumb-$colors" },
		],
		[
			/^switch-thumb-(.*)$/,
			([, body]: string[], { theme }: RuleContext<Theme>) => {
				return {
					"--switch-thumb": `${getVariableBgValue(body, theme)}`,
				};
			},
			{ autocomplete: "switch-thumb-$colors" },
		],
		[
			/^range-track-bg-(light|gray|high|higher)$/,
			([, name], { rawSelector, theme, variantHandlers }) => {
				if (!["light", "gray", "high", "higher"].includes(name)) return;
				if (variantHandlers.length) return;
				const selector = e(rawSelector);
				return `
${appearance === "light" || appearance === "both"
						? `
${selector}{
    --range-track-bg: ${getVariableBgValue(
							getBarShades(name as BarShade).light,
							theme,
						)}
}`
						: ""
					}
 ${appearance === "dark"
						? `
${selector}{
    --range-track-bg: ${getVariableBgValue(
							getBarShades(name as BarShade).dark,
							theme,
						)}
}`
						: ""
					}
${appearance === "both"
						? `
.dark ${selector}{
    --range-track-bg: ${getVariableBgValue(
							getBarShades(name as BarShade).dark,
							theme,
						)} !important
}`
						: ""
					}`;
			},
			{ autocomplete: "range-track-bg-(light|gray|high|higher)" },
		],
		[
			/^progress-bar-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({
				"--progressbar-height": `${getSizeProgress_Meter(d)}`,
			}),
			{ autocomplete: "progress-bar-(xs|sm|md|lg|xl|2xl)" },
		],
		[
			/^progress-bar-rounded-(sm|md|lg|xl|full)$/,
			([, d]) => ({ "--progress-bar-radius": `${getRadius(d)}` }),
			{ autocomplete: "progress-bar-rounded-(sm|md|lg|xl|full)" },
		],
		[
			/^progress-bar-bg-(light|gray|high|higher)$/,
			([, name], { rawSelector, theme, variantHandlers }) => {
				if (!["light", "gray", "high", "higher"].includes(name)) return;
				if (variantHandlers.length) return;
				const selector = e(rawSelector);
				return `
${appearance === "light" || appearance === "both"
						? `
${selector}{
    --progress-bar-bg: ${getVariableBgValue(
							getBarShades(name as BarShade).light,
							theme,
						)}
}`
						: ""
					}
 ${appearance === "dark"
						? `
${selector}{
    --progress-bar-bg: ${getVariableBgValue(
							getBarShades(name as BarShade).dark,
							theme,
						)}
}`
						: ""
					}
${appearance === "both"
						? `
.dark ${selector}{
    --progress-bar-bg: ${getVariableBgValue(
							getBarShades(name as BarShade).dark,
							theme,
						)}
}`
						: ""
					}`;
			},
			{ autocomplete: "progress-bar-bg-(light|gray|high|higher)" },
		],

		[
			/^moz-progress-(.+)$/,
			([, name], { rawSelector }) => {
				if (!name.includes("bar")) return;
				const selector = e(rawSelector);
				return `
${selector}::-moz-progress-bar{
    transition: all 150ms linear;
    border-radius: var(--progress-bar-radius);
    background-color: currentColor;
    width: 100%;
}
@supports(selector(&::-moz-progress-bar)) {
    ${selector} {
        background-color: var(--progress-bar-bg);
        border-radius: var(--progress-bar-radius);
    }
}`;
			},
		],
		[
			/^unify-internal-btn-solid-base-(.*)$/,
			([, body]: string[], { theme }: RuleContext<Theme>) => {
				const { colorName, shade } = extractColorAndShades(body);
				const shadowBottomColorShades = getNextShade(shade as ColorShade);
				const shadowTopColorShades = getPrevShade(shade as ColorShade);
				const shadowBottom = `${colorName}-${shadowBottomColorShades}`;
				const shadowTop = `${colorName}-${shadowTopColorShades}`;
				return {
					"--btn-solid-top-shadow": `${getVariableBgValue(shadowTop, theme)}`,
					"--btn-solid-bottom-shadow": `${getVariableBgValue(shadowBottom, theme)}`,
				};
			},
		],

	] as Rule<Theme>[];

	return rules;
};
