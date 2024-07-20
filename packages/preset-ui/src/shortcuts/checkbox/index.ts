import type { UiConfig } from "@/types";
import { getRingOffsetBg } from "../shortcut_helper";
import type { Checkbox } from "./types";
import { getChecboxBase } from "./helper";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getFormCheckboxShortcuts = ({ uiConfig }: { uiConfig: UiConfig }) => {
	const appearance = uiConfig.appearance;

	const baseUtilities = `disabled-op50 disabled-cursor-not-allowed outline-0 outline-transparent focus-visible:ring-1 focus-visible:ring-current focus:ring-0 focus:ring-transparent focus:ring-offset-transparent ${getRingOffsetBg(
		appearance,
	)} focus-visible:ring-offset-2`;

	const dynamicCheckboxes: Shortcut[] = [
		[
			/^form-input-checkbox(-(\S+))?$/,
			([, , color = "primary"], { theme }) => {
				if (isValidColor(color, theme))
					return `${baseUtilities} ${getChecboxBase(appearance, color)}`;
			},
			{ autocomplete: ["form-input-checkbox", "form-input-checkbox-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
		],
	];
	return [...dynamicCheckboxes];
};

export { getFormCheckboxShortcuts, type Checkbox };
