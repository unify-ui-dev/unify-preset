import type { ElSizeBase } from "@/types";
import { uiSizeVariants, genUiSizes, } from "../helpers";

import type { Badge } from "./types";

const getBadgeShortcuts = (
	badge?: Badge,
) => {
	const { xs, sm, md, xl, lg } = Object.assign({}, uiSizeVariants, badge?.sizes);

	const badges = {
		"badge-xs": `${genUiSizes(xs as ElSizeBase)}`,
		"badge-sm": `${genUiSizes(sm as ElSizeBase)}`,
		"badge-md": `${genUiSizes(md as ElSizeBase)}`,
		"badge-lg": `${genUiSizes(lg as ElSizeBase)}`,
		"badge-xl": `${genUiSizes(xl as ElSizeBase)}`,
	};
	return [badges];
};

export { getBadgeShortcuts, type Badge };
