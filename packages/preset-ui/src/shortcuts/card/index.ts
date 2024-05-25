import type { Appearance, BaseUI, SharedVariant } from "@/types";
import {
	genVariantOutline,
	genVariantSoft,
	genVariantSolid,
	genVariantSubtle,
	genVariantWhiteBlack,
} from "../helpers";
import { helperDefaultValues } from "../helpers";
import type { Card } from "./types";
import { cardDefault } from "./const";
import { isValidColor } from "@/utils/colors-utils";
import type { Shortcut } from "unocss";

const getCardShortcuts = (
	card?: Card,
	sharedConfig?: SharedVariant,
	globalElement?: BaseUI,
	uiConfig?: { appearance?: Appearance },
) => {
	const soft =
		card?.softGray ||
		sharedConfig?.softGray ||
		helperDefaultValues.generalSoftGray;
	const subtle =
		card?.subtleGray ||
		sharedConfig?.subtleGray ||
		helperDefaultValues.defaultSubtleGray;
	const outline =
		card?.outline ||
		sharedConfig?.border ||
		helperDefaultValues.defaultOutlineGrayELement;

	const appearance = uiConfig?.appearance || "both";

	const solid =
		card?.solid ||
		sharedConfig?.solid ||
		cardDefault.cardGray ||
		helperDefaultValues.defaultSolidGrayShades;

	const gray =
		card?.solid ||
		sharedConfig?.solidGray ||
		cardDefault.cardGray ||
		helperDefaultValues.defaultSolidGrayShades;
	const grayInner = card?.innerSolid || cardDefault.cardInnerGray;
	const subInnerGray = card?.subInner || cardDefault.cardSubInnerGray;

	const background = globalElement?.bodyBg || helperDefaultValues.bodyBg;
	const backgroundInverse =
		globalElement?.bodyBgInverse || helperDefaultValues.bodyBgInverse;

	const cards = {
		"card-body": `${genVariantWhiteBlack({ appearance, colors: background })}`,
		"card-body-inverse": `${genVariantWhiteBlack({
			appearance,
			colors: backgroundInverse,
		})}`,
	};

	const dynamicCard: Shortcut[] = [
		[
			/^card-solid(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? gray : solid;
					return `${genVariantSolid({ color, appearance, colorShades })}`;
				}
			},
			{ autocomplete: ["card-solid", "card-solid-$colors"] },
		],
		[
			/^card-inner(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? grayInner : solid;
					return `${genVariantSolid({ color, appearance, colorShades })}`;
				}
			},
			{ autocomplete: ["card-inner", "card-inner-$colors"] },
		],
		[
			/^card-sub-inner(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme)) {
					const colorShades = color === "gray" ? subInnerGray : solid;
					return `${genVariantSolid({ color, appearance, colorShades })}`;
				}
			},
			{ autocomplete: ["card-sub-inner", "card-sub-inner-$colors"] },
		],
		[
			/^card-subtle(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantSubtle({
						color,
						appearance,
						subtle,
						graySubtle: subtle,
					})}`;
			},
			{ autocomplete: ["card-subtle", "card-subtle-$colors"] },
		],
		[
			/^card-outline(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantOutline({
						color,
						appearance,
						outlineColor: outline,
						outlineGray: outline,
					})}`;
			},
			{ autocomplete: ["card-outline", "card-outline-$colors"] },
		],
		[
			/^card-soft(-(\S+))?$/,
			([, , color = "gray"], { theme }) => {
				if (isValidColor(color, theme))
					return `${genVariantSoft({
						color,
						appearance,
						soft,
						graySoft: soft,
					})}`;
			},
			{ autocomplete: ["card-soft", "card-soft-$colors"] },
		],
	];
	return [cards, ...dynamicCard];
};

export { getCardShortcuts, type Card };
