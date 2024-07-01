import type { Preset } from "unocss";
import { getAllRules } from "./rules";

/**
 * Preset BG
 * @returns 
 */
function presetBg(): Preset {
	const rules = getAllRules();
	return {
		name: "preset-bg",
		rules,
	};
}

export { presetBg };
