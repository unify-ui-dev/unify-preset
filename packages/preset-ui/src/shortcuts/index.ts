import type { Preset, StaticShortcutMap } from "unocss";
import { flexillaShortcuts } from "./flexilla-utils";
import type { Components } from "./types";
import { getBtnShortcuts } from "./button";
import { getBadgeShortcuts } from "./badge";
import type {
	Appearance,
	BaseUI,
	SharedFormConfig,
	SharedVariant,
} from "../types";
import { getAlertShortcuts } from "./alert";
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
import { getDropdownShortcuts } from "./dropdown";
import { getMeterShortcuts } from "./meter";
import { getRangeSlideShortcuts } from "./range";
import { getProgressBarShortcuts } from "./progress";
import { getSwitchShortcuts } from "./switch";

export const getAllShortcut = ({
	components,
	globalElement: sharedElementVariant,
	baseUI,
	form,
	appearance,
}: {
	components?: Components;
	globalElement?: SharedVariant;
	baseUI?: BaseUI;
	form?: SharedFormConfig;
	appearance: Appearance;
}) => {
	const generalShortcuts = getGeneralShortcuts({
		sharedConfig: sharedElementVariant,
		globalElement: baseUI,
		uiConfig: { appearance: appearance || "both" },
	});

	const button = getBtnShortcuts({
		button: components?.button,
		uiConfig: { appearance },
		formConfig: form,
	});
	const badge = getBadgeShortcuts(components?.badge, sharedElementVariant, {
		appearance,
	});

	const accordion = getAccordionShortcuts(
		components?.accordion,
		sharedElementVariant,
		{ appearance },
	);
	const alert = getAlertShortcuts(components?.alert, sharedElementVariant, {
		appearance,
	});
	const aspectRatio = getAspectRatioShortcuts();
	const avatar = getAvatarShortcuts(components?.avatar, sharedElementVariant, {
		appearance,
	});
	const card = getCardShortcuts(
		components?.card,
		sharedElementVariant,
		baseUI,
		{ appearance },
	);
	const checkbox = getFormCheckboxShortcuts({ uiConfig: { appearance } });
	const divider = getDividerShortcuts({
		divider: components?.divider,
		appearance,
	});
	const dropdown = getDropdownShortcuts({
		dropdown: components?.drodpown,
		sharedConfig: sharedElementVariant,
		baseUI: baseUI,
		uiConfig: { appearance },
	});
	const inputForm = getFormInputShortcuts({
		input: components?.input,
		uiConfig: { appearance },
	});
	const kbd = getKdbShortcuts({
		kdb: components?.kbd,
		sharedConfig: sharedElementVariant,
		uiConfig: { appearance },
	});

	const meter = getMeterShortcuts();
	const progress = getProgressBarShortcuts();
	const radio = getFormRadioShortcuts({ uiConfig: { appearance } });
	const range = getRangeSlideShortcuts();
	const switchShortcuts = getSwitchShortcuts({ appearance });
	const shortcuts = [
		...[flexillaShortcuts],
		...generalShortcuts,
		...accordion,
		...alert,
		...aspectRatio,
		...avatar,
		...badge,
		...button,
		...card,
		...checkbox,
		...divider,
		...dropdown,
		...inputForm,
		...kbd,
		...meter,
		...progress,
		...radio,
		...range,
		...switchShortcuts,
	] as Exclude<Preset["shortcuts"], undefined | StaticShortcutMap>;
	return shortcuts;
};
