import { ElSizeBase } from "@/types";
import { getConfigValue } from "@/utils";

export const genUiSizes = (size: ElSizeBase) => {
    return `py-${getConfigValue(size.py)} px-${getConfigValue(size.px)} text-${size.textSize}`
}