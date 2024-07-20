import type { UiConfig } from "@/types";
import { getRingOffsetBg } from "../shortcut_helper";
import { getRadioBase } from "./helper";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getFormRadioShortcuts = ({ uiConfig }: { uiConfig: UiConfig }) => {
	const appearance = uiConfig.appearance;

	const baseUtilities = `disabled-op50 disabled-cursor-not-allowed outline-0 outline-transparent focus-visible:ring-2 focus-visible:ring-current focus:ring-0 focus:ring-transparent focus:ring-offset-transparent ${getRingOffsetBg(
		appearance,
	)}
    focus-visible:ring-offset-2`;

	const dynamicRadio: Shortcut[] = [
		[
			/^form-input-radio(-(\S+))?$/,
			([, , color = "primary"], { theme }) => {
				if (isValidColor(color, theme))
					return `${baseUtilities} ${getRadioBase(appearance, color)}`;
			},
			{ autocomplete: ["form-input-radio", "form-input-radio-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
		],
	];
	return [...dynamicRadio];
};

export { getFormRadioShortcuts };
