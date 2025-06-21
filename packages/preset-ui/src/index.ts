import type { Preset } from "unocss";
import type { presetUiConfig, UiHelperConfig } from "./types";
import { getAllShortcut } from "./shortcuts/";
import { getAllRules } from "./rules";
import { getAllVariants } from "./variants";
import { theme } from "./ui-theme";
import { presetBg } from "@unifydev/preset-bg";
import { ThingsToExclude } from "./ui/type";
import { getAllUIShortcut } from "./ui";
import { getUiTheme } from "./ui-theme/ui";


function presetUIHelper(config?: UiHelperConfig): Preset {
	const colorFormat = config?.colorFormat || "hsl"
	const appearance = config?.appearance || "both"
	const varPrefix = config?.variablePrefix || "c"
	const excluded: ThingsToExclude | undefined = config?.exclude
	const shortcuts = getAllUIShortcut({
		prefix: varPrefix,
		colorFormat,
		components: config?.components,
		appearance: appearance,
		exclude: excluded
	});
	return {
		name: "preset-ui-helper",
		shortcuts,
		theme: getUiTheme(colorFormat, varPrefix, config?.defineColor || true)
	};
}


/**
 * A preset for Unocss which provides the following features:
 * - Generate shortcuts for background, border, text color, and other styles
 * - Generate rules for flexbox, position, size, and other layout styles
 * - Generate variants for border radius, box shadow, and other styles
 * - Generate theme styles for colors
 * - Support for both light and dark appearances
 * @param config - An object with the following properties:
 *   - colorFormat - The format of the color in the shortcut. Default is "hsl".
 *   - appearance - The appearance of the theme. Default is "both".
 *   - prefixDataStateVariant - The prefix of the data-state variant. Default is "fx".
 *   - uiGen - An object with the following properties:
 *     - exclude - An object with the key as variant name and the value as a boolean indicating whether to exclude the variant. Default is empty object.
 *     - components
 */
function presetUI(config?: presetUiConfig): Preset {
	const colorFormat = config?.colorFormat || "hsl"
	const shortcuts = getAllShortcut({
		colorFormat,
		components: config?.components,
		baseVariants: config?.baseVariants,
		appearance: config?.appearance || "both"
	});

	const rules = getAllRules(colorFormat);
	const variants = getAllVariants();

	const presets = [
		presetBg(),
		presetUIHelper({
			variablePrefix: config?.uiGen?.variablePrefix,
			colorFormat,
			appearance: config?.appearance,
			components: config?.uiGen?.components,
			exclude: config?.uiGen?.exclude
		})
	]

	return {
		name: "unify-preset",
		variants,
		shortcuts,
		rules,
		theme,
		presets
	};
}



export { presetUI, type presetUiConfig, type UiHelperConfig };
