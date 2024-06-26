import type { Appearance, SharedVariant } from "@/types";
import { getConfigValue } from "@/utils";
import {
	genVariantOutline,
	genVariantSoft,
	genUiBackground,
	genVariantSubtle,
} from "../helpers";
import { helperDefaultValues } from "../helpers";

import type { Alert } from "./types";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getAlertShortcuts = (
	alert?: Alert,
	sharedConfig?: SharedVariant,
	uiConfig?: { appearance?: Appearance },
) => {
	const solidShade =
		alert?.solid ||
		sharedConfig?.solid ||
		helperDefaultValues.defaultSolidShades;
	const soft =
		alert?.soft || sharedConfig?.soft || helperDefaultValues.generalSoft;
	const subtle =
		alert?.subtle || sharedConfig?.subtle || helperDefaultValues.defaultSubtle;
	const outline =
		alert?.outline ||
		sharedConfig?.outline ||
		helperDefaultValues.defaultOutlineELement;

	const graySolid =
		alert?.solidGray ||
		sharedConfig?.solidGray ||
		helperDefaultValues.defaultSolidGrayShades;
	const graySoft =
		alert?.graySoft ||
		sharedConfig?.softGray ||
		helperDefaultValues.generalSoftGray;
	const graySubtle =
		alert?.graySubtle ||
		sharedConfig?.subtleGray ||
		helperDefaultValues.defaultSubtleGray;
	const grayOutline =
		alert?.outline ||
		sharedConfig?.outlineGray ||
		helperDefaultValues.defaultOutlineGrayELement;

	const padding = alert?.padding || 4;

	const appearance = uiConfig?.appearance || "both";

	const alerts = {
		alert: `p-${getConfigValue(padding)}`,
	};

	const dynamicAlerts: Shortcut[] = [
		[
			/^alert-solid(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? graySolid : solidShade;
					return `${genUiBackground({ color, appearance, colorShades })}`;
				}
			},
			{
				autocomplete: [
					"alert-solid",
					"alert-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
		[
			/^alert-outline(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantOutline({
						color,
						appearance,
						outlineColor: outline,
						outlineGray: grayOutline,
					})}`;
			},
			{
				autocomplete: [
					"alert-outline",
					"alert-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
		[
			/^alert-subtle(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantSubtle({
						color,
						appearance,
						subtle,
						graySubtle,
					})}`;
			},
			{
				autocomplete: [
					"alert-subtle",
					"alert-subtle-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
		[
			/^alert-soft(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				const soft_ = color === 'gray'?graySoft : soft
				if (isValidColor(color, theme))
					return `${genVariantSoft({ color, appearance, soft:soft_ })}`;
			},
			{
				autocomplete: [
					"alert-soft",
					"alert-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
	];

	return [alerts, ...dynamicAlerts];
};

export { getAlertShortcuts, type Alert };
