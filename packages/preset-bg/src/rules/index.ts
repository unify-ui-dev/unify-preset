
import type { Rule, RuleContext } from "unocss";
import type { Theme } from "@unocss/preset-uno";
import { gridSquareSizes, gridRecSizes } from "./const";
import { getVariableBgValue } from "./helpers";
import type { variantSize } from "./types";


export const getAllRules = () => {
	const rules = [
		[
			"ui-grid-dotted",
			{
				"--dotsize": "1px",
				"background-image": "radial-gradient(currentColor var(--dotsize), var(--bg-grid-dotted) var(--dotsize))",
				"background-size": 'var(--unify-ui-grid-width) var(--unify-ui-grid-height)',
			},
		],
		[
			/^ui-grid-dotted-bg-(.*)$/,
			([, body]: string[], { theme }: RuleContext<Theme>) => {
				return {
					"--bg-grid-dotted": `${getVariableBgValue(body, theme)}`,
				};
			},
			{ autocomplete: "ui-grid-dotted-bg-$colors" },
		],
		[
			"ui-radial-gradient",
			{
				background: 'radial-gradient(125% 125% at 50% 10%, var(--unify-radial-bg) 40%, currentColor 100%)'
			},
		],
		[
			/^ui-radial-gradient-bg-(.*)$/,
			([, body]: string[], { theme }: RuleContext<Theme>) => {
				return {
					"--unify-radial-bg": `${getVariableBgValue(body, theme)}`,
				};
			},
			{ autocomplete: "ui-radial-gradient-bg-$colors" },
		],
		[
			"ui-grid",
			{
				"--unify-grid-color": 'currentColor',
				"background-image": `linear-gradient(to right, var(--unify-grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--unify-grid-color) 1px, transparent 1px)`,
				"background-size": 'var(--unify-ui-grid-width) var(--unify-ui-grid-height)',
			},
		],
		[
			"ui-striped-overlay-mask",
			{
				"mask-image": `radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)`
			},
		],
		[
			/^ui-grid-w-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({ "--unify-ui-grid-width": `${gridRecSizes[d as variantSize]?.width}px` }),
			{ autocomplete: 'ui-grid-w-(xs|sm|md|lg|xl|2xl)' }
		],
		[
			/^ui-grid-h-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({ "--unify-ui-grid-height": `${gridRecSizes[d as variantSize]?.height}` }),
			{ autocomplete: 'ui-grid-h-(xs|sm|md|lg|xl|2xl)' }
		],
		[
			/^ui-grid-square-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({
				"--unify-ui-grid-width": `${gridSquareSizes[d as variantSize]}px`,
				"--unify-ui-grid-height": `${gridSquareSizes[d as variantSize]}px`
			}),
			{ autocomplete: 'ui-grid-size-(xs|sm|md|lg|xl|2xl)' }
		],
		[
			/^ui-grid-rec-(xs|sm|md|lg|xl|2xl)$/,
			([, d]) => ({
				"--unify-ui-grid-width": `${gridRecSizes[d as variantSize]?.width}px`,
				"--unify-ui-grid-height": `${gridRecSizes[d as variantSize]?.height}px`
			}),
			{ autocomplete: 'ui-grid-rec-(xs|sm|md|lg|xl|2xl)' }
		],

	] as Rule<Theme>[];

	return rules;
};
