import { CardSizeBase, ElSizeBase } from "@/types";
import { getConfigValue } from "@/utils";

const convertSize = (size: number | string) => typeof size === 'number' ? `${size * 0.25}rem` : size

export const genUiSizes = (size: ElSizeBase) => `[padding:${convertSize(size.py)}_${convertSize(size.px)}] text-${size.textSize}`
export const getUiCardSize = (sizeVariant: CardSizeBase) => `p-${getConfigValue(sizeVariant.padding)} text-${sizeVariant.textSize}`;