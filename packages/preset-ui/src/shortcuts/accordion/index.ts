import type { Appearance } from "@/types";

import {
	genOutline,
} from "../helpers";

import type { Accordion } from "./types";
import { genDividerY } from "./helper";
import { defaultAcValues } from "./const";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getAccordionShortcuts = (
	accordion?: Accordion,
	uiConfig?: { appearance?: Appearance },
) => {
	const appearance = uiConfig?.appearance || "both";

	const grayDivider = Object.assign({}, defaultAcValues.defaultDividerGray, accordion?.grayDivider);
	const itemWithBorder = Object.assign({}, defaultAcValues.itemWithBorderGray, accordion?.itemWithBorder);

	const dynamicAccordions: Shortcut[] = [
		[
			/^accordion-wrapper-joined(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `divide-y ${genDividerY({
						color: color,
						appearance,
						divider: grayDivider,
					})}`;
			},
			{ autocomplete: ["wrapper-joined", "wrapper-joined-$colors"] },
		],
		[
			/^accordion-item-border-bottom(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genOutline({
						appearance,
						color,
						prefix: itemWithBorder.prefix,
						border: { shade: itemWithBorder.border?.shade, dark: itemWithBorder.border?.dark }
					})})}`;
			},
			{
				autocomplete: [
					"accordion-item-border-bottom",
					"accordion-item-border-bottom-$colors",
				],
			},
		],
	];

	return [...dynamicAccordions];
};

export { getAccordionShortcuts, type Accordion };
