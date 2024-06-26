import type { Appearance, SharedVariant } from "@/types";

import {
	genOutline,
	genVariantOutline,
	genVariantSoft,
	genUiBackground,
	genVariantSubtle,
} from "../helpers";
import { helperDefaultValues } from "../helpers";

import type { Accordion } from "./types";
import { genDividerY } from "./helper";
import { defaultAcValues } from "./const";
import { getConfigValue } from "@/utils";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getAccordionShortcuts = (
	accordion?: Accordion,
	sharedConfig?: SharedVariant,
	uiConfig?: { appearance?: Appearance },
) => {
	const solidShade =
		accordion?.solid ||
		sharedConfig?.solid ||
		helperDefaultValues.defaultSolidShades;
	const soft =
		accordion?.soft || sharedConfig?.soft || helperDefaultValues.generalSoft;
	const subtle =
		accordion?.subtle ||
		sharedConfig?.subtle ||
		helperDefaultValues.defaultSubtle;
	const outline =
		accordion?.outline ||
		sharedConfig?.outline ||
		helperDefaultValues.defaultOutlineELement;

	const solidGray =
		accordion?.solidGray ||
		sharedConfig?.solidGray ||
		helperDefaultValues.defaultSolidGrayShades;
	const graySoft =
		accordion?.graySoft ||
		sharedConfig?.softGray ||
		helperDefaultValues.generalSoftGray;
	const graySubtle =
		accordion?.graySubtle ||
		sharedConfig?.subtleGray ||
		helperDefaultValues.defaultSubtleGray;
	const grayOutline =
		accordion?.outline ||
		sharedConfig?.outlineGray ||
		helperDefaultValues.defaultOutlineGrayELement;



	const appearance = uiConfig?.appearance || "both";

	const grayDivider =
		accordion?.grayDivider || defaultAcValues.defaultDividerGray;
	const itemWithBorder =
		accordion?.itemWithBorder || defaultAcValues.itemWithBorderGray;

	const dynamicAccordions: Shortcut[] = [
		[
			/^accordion-wrapper(-(\S+))?$/,
			([, , size = 4]) => `flex flex-col gap-y-${getConfigValue(size)}`,
			{ autocomplete: ["accordion-wrapper", "accordion-wrapper-<num>"] },
		],
		[
			/^accordion-solid(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? solidGray : solidShade;
					return `${genUiBackground({ color, appearance, colorShades })}`;
				}
			},
			{ autocomplete: ["accordion-solid", "accordion-solid-$colors"] },
		],
		[
			/^accordion-outline(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantOutline({
						color,
						appearance,
						outlineColor: outline,
						outlineGray: grayOutline,
					})}`;
			},
			{ autocomplete: ["accordion-outline", "accordion-outline-$colors"] },
		],
		[
			/^accordion-subtle(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantSubtle({
						color,
						appearance,
						subtle,
						graySubtle,
					})}`;
			},
			{ autocomplete: ["accordion-subtle", "accordion-subtle-$colors"] },
		],
		[
			/^accordion-soft(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				const soft_ = color === "gray" ? graySoft : soft
				if (isValidColor(color, theme))
					return `${genVariantSoft({ color, appearance, soft: soft_ })}`;
			},
			{ autocomplete: ["accordion-soft", "accordion-soft-$colors"] },
		],
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
