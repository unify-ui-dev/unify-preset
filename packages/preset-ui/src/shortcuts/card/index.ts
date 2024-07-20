import type { Appearance, BaseUI } from "@/types";
import { genVariantWhiteBlack, } from "../helpers";
import { helperDefaultValues } from "../helpers";
import type { Card } from "./types";

const getCardShortcuts = (
	globalElement?: BaseUI,
	uiConfig?: { appearance?: Appearance },
) => {
	const appearance = uiConfig?.appearance || "both";
	const body = Object.assign({},helperDefaultValues.uiBodyColors,globalElement?.body)

	const cards = {
		"card-body": `${genVariantWhiteBlack({
			appearance, colors: {
				white: `${body.default?.color_shade}`,
				black: `${body.default?.dark}`
			}
		})}`,
		"card-body-inverse": `${genVariantWhiteBlack({
			appearance,
			colors: {
				white: `${body.defaultReverse?.color_shade}`,
				black: `${body.defaultReverse?.dark}`
			}
		})}`,
		"card-light-high": `${genVariantWhiteBlack({
			appearance,
			colors: {
				white: `${body["light-high"]?.color_shade}`,
				black: `${body["light-high"]?.dark}`
			}
		})}`,
	};

	return [cards];
};

export { getCardShortcuts, type Card };
