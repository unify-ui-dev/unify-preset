import { getConfigValue } from "@/utils";
import {
	uiSizeVariants
} from "../helpers";
import type { Kbd } from "./types";
import type { Shortcut } from "unocss";

const getKdbShortcuts = ({
	kdb: kbd,
}: { kdb?: Kbd}) => {
	const { xs, sm, md, xl, lg } = kbd?.sizes || uiSizeVariants;

	const kbds = {
		"kbd-xs": `py-${getConfigValue(xs?.py)} px-${getConfigValue(xs?.px)} text-${xs?.textSize}`,
		"kbd-sm": `py-${getConfigValue(sm?.py)} px-${getConfigValue(sm?.px)} text-${sm?.textSize}`,
		"kbd-md": `py-${getConfigValue(md?.py)} px-${getConfigValue(md?.px)} text-${md?.textSize}`,
		"kbd-lg": `py-${getConfigValue(lg?.py)} px-${getConfigValue(lg?.px)} text-${lg?.textSize}`,
		"kbd-xl": `py-${getConfigValue(xl?.py)} px-${getConfigValue(xl?.px)} text-${xl?.textSize}`,
	};

	const dynamicKbd: Shortcut[] = [

	];
	return [kbds, ...dynamicKbd];
};

export { getKdbShortcuts, type Kbd };
