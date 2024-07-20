import { getConfigValue } from "@/utils";

import type { Avatar } from "./types";

const getAvatarShortcuts = (
	avatar?: Avatar
) => {
	const { xs, sm, md, xl, lg } = Object.assign({}, {
		xs: 6.5,
		sm: 8,
		md: 9.5,
		lg: 10.5,
		xl: 12,
	}, avatar?.sizes);

	const avatars = {
		"avatar-fit-none": "object-none",
		"avatar-fit-fill": "object-fill",
		"avatar-fit-cover": "object-cover",
		"avatar-fit-contain": "object-contain",
		"avatar-fit-scale-down": "object-scale-down",
		"avatar-xs": `size-${getConfigValue(xs)}`,
		"avatar-sm": `size-${getConfigValue(sm)}`,
		"avatar-md": `size-${getConfigValue(md)}`,
		"avatar-lg": `size-${getConfigValue(lg)}`,
		"avatar-xl": `size-${getConfigValue(xl)}`,
		"avatar-placeholder": "flex items-center justify-center truncate",
		"avatar-placeholder-xs": `size-${getConfigValue(xs)} text-xs`,
		"avatar-placeholder-sm": `size-${getConfigValue(sm)} text-sm`,
		"avatar-placeholder-md": `size-${getConfigValue(md)} text-sm`,
		"avatar-placeholder-lg": `size-${getConfigValue(lg)} text-base`,
		"avatar-placeholder-xl": `size-${getConfigValue(xl)} text-base`,
	};

	return [avatars];
};
export { getAvatarShortcuts, type Avatar };
