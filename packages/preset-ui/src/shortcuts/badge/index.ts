import type { Appearance, SharedVariant, ElSizeBase } from "@/types";
import { genVariantOutline, genVariantSoft, genUiBackground, genVariantSubtle, uiSizeVariants, genUiSizes, } from "../helpers";
import { helperDefaultValues } from "../helpers";
import type { Badge } from "./types";
import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";

const getBadgeShortcuts = (
	badge?: Badge,
	sharedConfig?: SharedVariant,
	uiConfig?: { appearance?: Appearance },
) => {
	const { xs, sm, md, xl, lg } = badge?.sizes || uiSizeVariants;
	const solidShades =
		badge?.solid ||
		sharedConfig?.solid ||
		helperDefaultValues.defaultSolidShades;
	const soft =
		badge?.soft || sharedConfig?.soft || helperDefaultValues.generalSoft;
	const subtle =
		badge?.subtle || sharedConfig?.subtle || helperDefaultValues.defaultSubtle;
	const outline =
		badge?.outline ||
		sharedConfig?.outline ||
		helperDefaultValues.defaultOutlineELement;

	const graySolid =
		badge?.graySolid ||
		sharedConfig?.solidGray ||
		helperDefaultValues.defaultSolidGrayShades;
	const graySubtle =
		badge?.graySubtle ||
		sharedConfig?.subtleGray ||
		helperDefaultValues.defaultSubtleGray;
	const graySoft =
		badge?.graySoft ||
		sharedConfig?.softGray ||
		helperDefaultValues.generalSoftGray;
	const grayOutline =
		badge?.grayOutline ||
		sharedConfig?.outlineGray ||
		helperDefaultValues.defaultOutlineGrayELement;

	const appearance = uiConfig?.appearance || "both";
	const badges = {
		"badge-xs": `${genUiSizes(xs as ElSizeBase)}`,
		"badge-sm": `${genUiSizes(sm as ElSizeBase)}`,
		"badge-md": `${genUiSizes(md as ElSizeBase)}`,
		"badge-lg": `${genUiSizes(lg as ElSizeBase)}`,
		"badge-xl": `${genUiSizes(xl as ElSizeBase)}`,
	};

	const dynamicBadges: Shortcut[] = [
		[
			/^badge-solid(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? graySolid : solidShades;
					return `${genUiBackground({ color, appearance, colorShades })}`;
				}
			},
			{
				autocomplete: [
					"badge-solid",
					"badge-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
		[
			/^badge-outline(-(\S+))?$/,
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
					"badge-outline",
					"badge-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
		[
			/^badge-subtle(-(\S+))?$/,
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
					"badge-subtle",
					"badge-subtle-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
		[
			/^badge-soft(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				const soft_ = color === "gray" ? graySoft : soft
				if (isValidColor(color, theme))
					return `${genVariantSoft({ color, appearance, soft: soft_ })}`;
			},
			{
				autocomplete: [
					"badge-soft",
					"badge-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",
				],
			},
		],
	];
	return [badges, ...dynamicBadges];
};

export { getBadgeShortcuts, type Badge };
