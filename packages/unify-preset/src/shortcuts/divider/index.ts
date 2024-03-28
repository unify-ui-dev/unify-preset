import { divideGray, dividerShade } from "./const"
import { getDivider } from "./helper"
import type { Divider } from "./types"

const getDividerShortcuts = ({ divider, appearance: appearance_ }: { divider?: Divider, appearance?: "both" | "light" | "dark" | undefined }) => {
    const appearance = appearance_ || "both"
    const shades = divider?.shades || dividerShade
    const grayShades = divider?.grayShades || divideGray
    const dividers = {
        'divider-hr': "",
        'divider-hr-2': "border-2",
        'divider-hr-3': "border-3",
        'divider-hr-4': "border-4",
        'divider-hr-6': "border-6",
        'divider-hr-8': "border-8",
        'divider-hr-gray': `${getDivider({ color: "gray", appearance, shades: grayShades, prefix: "border" })}`,

        'divider-custom': 'relative before-absolute before-content-empty before-inset-x-0 flex items-center',
        'divider-custom-1': "before-h-px ",
        'divider-custom-2': "before-h-2px",
        'divider-custom-3': "before-h-3px",
        'divider-custom-4': "before-h-4px",
        'divider-custom-6': "before-h-6px",
        'divider-custom-8': "before-h-8px",
        'divider-custom-gray': `${getDivider({ color: "gray", appearance, shades: grayShades, prefix: "before-bg" })}`,

    }
    const dynamicDividers: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^divider-hr-border(-(\S+))?$/, ([, , color = 'primary']) => `${getDivider({ color, appearance, shades, prefix: "border" })}`],
        [/^divider-custom-bg(-(\S+))?$/, ([, , color = 'primary']) => `${getDivider({ color, appearance, shades, prefix: "before-bg" })}`],

    ]
    return [
        dividers,
        ...dynamicDividers
    ]
}

export { getDividerShortcuts, Divider }
