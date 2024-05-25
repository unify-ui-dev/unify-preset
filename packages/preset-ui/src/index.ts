import type { Preset } from "unocss";
import type { presetUiConfig } from "./types";
import { getAllShortcut } from "./shortcuts/";
import { getAllRules } from "./rules";
import { getAllVariants } from "./variants";
import { theme } from "./ui-theme";

/**
 * presetUI
 * @param config
 * @returns
 */
function presetUI(config?: presetUiConfig): Preset {
	const appearance = config?.appearance || "both";
	const shortcuts = getAllShortcut({
		components: config?.components,
		sharedElementVariant: config?.ui?.element,
		appearance,
		baseUI: config?.baseUi,
		form: config?.ui?.form,
	});

	const rules = getAllRules(appearance);
	const variants = getAllVariants(config?.prefixDataStateVariant || "fx");

	return {
		name: "unify-preset",
		variants,
		shortcuts,
		rules,
		theme,
	};
}

export { presetUI, type presetUiConfig };
