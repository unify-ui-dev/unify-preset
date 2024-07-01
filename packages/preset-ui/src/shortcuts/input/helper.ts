import type { Appearance, ColorShade } from "@/types";
import { getShortcutsIfNotSame } from "@/utils";

export const getPlaceHolder = ({
	appearance,
	placeholder
}: {
	appearance: Appearance;
	placeholder: {
		shade: ColorShade,
		dark?: ColorShade
	}
}) => {
	const { shade, dark } = placeholder
	const lightV = appearance === "light" || appearance === "both" ? `placeholder-text-gray-${shade}` : "";

	const darkV = dark && dark !== shade ? `${appearance === "dark"
		? `placeholder-text-gray-${dark}`
		: appearance === "both" ? `dark-placeholder-text-gray-${dark}` : ""}` : '';
	return `${lightV} ${darkV}`;
};

export const getInputOutlineFocus = ({
	color,
	appearance,
	border,
}: {
	color: string;
	appearance: Appearance;
	border: { shade: ColorShade; dark?: ColorShade };
}) => {
	const { shade, dark } = border
	const light_ = `${appearance === "light" || appearance === "both" ? `focus-outline-${color}-${shade}` : ""}`;

	const dark_ = dark ? `${appearance === "dark" ? `focus-outline-${color}-${dark}` : appearance === "both" ? `${getShortcutsIfNotSame({
		val1: `${color}-${shade}`,
		val2: `${color}-${dark}`,
		shortcuts: `dark-focus-outline-${color}-${dark}`,
	})}` : ""}` : "";
	return `outline-offset-0 focus-outline focus-outline-offset-0 focus-outline-2 ${light_} ${dark_}`;
};