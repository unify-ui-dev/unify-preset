import type { Preset, StaticShortcutMap } from "unocss";
import { flexillaShortcuts } from "./flexilla-utils";
import type { Components } from "./types";
import { getBtnShortcuts } from "./button";
import { getBadgeShortcuts } from "./badge";
import type { Appearance, BaseUI, SharedFormConfig, } from "../types";
import { getAspectRatioShortcuts } from "./aspect-ratio";
import { getAvatarShortcuts } from "./avatar";
import { getCardShortcuts } from "./card";
import { getGeneralShortcuts } from "./utilities";
import { getDividerShortcuts } from "./divider";
import { getFormInputShortcuts } from "./input";
import { getKdbShortcuts } from "./kbd";
import { getAccordionShortcuts } from "./accordion";
import { getFormCheckboxShortcuts } from "./checkbox";
import { getFormRadioShortcuts } from "./radio";
import { getMeterShortcuts } from "./meter";
import { getRangeSlideShortcuts } from "./range";
import { getProgressBarShortcuts } from "./progress";
import { getSwitchShortcuts } from "./switch";
import { getUiShortcuts } from "./ui";
import type { BaseVariants } from "./ui/types";

export const getAllShortcut = ({
	components,
	form,
	baseUI,
	baseVariants,
	appearance,
}: {
	components?: Components;
	baseVariants?: BaseVariants,
	baseUI?: BaseUI;
	form?: SharedFormConfig;
	appearance: Appearance;
}) => {
	const generalShortcuts = getGeneralShortcuts({
		globalElement: baseUI,
		uiConfig: { appearance: appearance || "both" },
	});

	const button = getBtnShortcuts({
		button: components?.button,
		uiConfig: { appearance },
		formConfig: form,
	});
	const badge = getBadgeShortcuts(components?.badge);

	const accordion = getAccordionShortcuts(
		components?.accordion,
	);
	const aspectRatio = getAspectRatioShortcuts();
	const avatar = getAvatarShortcuts(components?.avatar);
	const card = getCardShortcuts(
		baseUI,
		{ appearance },
	);
	const checkbox = getFormCheckboxShortcuts({ uiConfig: { appearance } });
	const divider = getDividerShortcuts({
		divider: components?.divider,
		appearance,
	});

	const inputForm = getFormInputShortcuts({
		input: components?.input,
		uiConfig: { appearance },
	});
	const kbd = getKdbShortcuts({ kdb: components?.kbd });

	const meter = getMeterShortcuts();
	const progress = getProgressBarShortcuts();
	const radio = getFormRadioShortcuts({ uiConfig: { appearance } });
	const range = getRangeSlideShortcuts();
	const switchShortcuts = getSwitchShortcuts({ appearance });

	const uiShortcuts = getUiShortcuts(baseVariants, { appearance })
	const shortcuts = [
		...[flexillaShortcuts],
		...generalShortcuts,
		...accordion,
		...aspectRatio,
		...avatar,
		...badge,
		...button,
		...card,
		...checkbox,
		...divider,
		...inputForm,
		...kbd,
		...meter,
		...progress,
		...radio,
		...range,
		...switchShortcuts,
		...uiShortcuts
	] as Exclude<Preset["shortcuts"], undefined | StaticShortcutMap>;
	return shortcuts;
};
