import type { Preset } from "unocss";
import type { presetUiConfig } from "./types";
import { getAllShortcut } from "./shortcuts/";
import { getAllRules } from "./rules";
import { getAllVariants } from "./variants";
import { theme } from "./ui-theme";
import { presetBg } from "@unifydev/preset-bg";

/**
 * presetUI
 * @param config
 * @returns
 */
function presetUI(config?: presetUiConfig): Preset {
	const appearance = config?.appearance || "both";
	const shortcuts = getAllShortcut({
		components: config?.components,
		appearance,
		baseVariants:config?.baseVariants,
		baseUI: config?.baseUi,
		form: config?.formShared,
	});

	const rules = getAllRules(appearance);
	const variants = getAllVariants(config?.prefixDataStateVariant || "fx");

	const presets = [
		presetBg(),
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

export { presetUI, type presetUiConfig };
