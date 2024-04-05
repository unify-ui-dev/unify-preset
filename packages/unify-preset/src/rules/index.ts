import { toEscapedSelector as e } from 'unocss'
import type { Rule, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-uno'
import type { BarShade, variantSize } from "./types";
import { getSizeProgress_Meter, getRadius, getRangeSize, getVariableBgValue, getBarShades } from "./utils";
import type { Appearance } from '@/types';


export const getAllRules = (appearance: Appearance) => {

    const rules = [
        [
            'u-fx-popper', {
                position: "absolute",
                transform: "translate(var(--fx-popper-placement-x), var(--fx-popper-placement-y))",
                left: "0",
                top: "0"
            }
        ],
        [
            'moz-meter', {
                height: 'var(--metter-bar-height)',
                'border-radius': 'var(--metter-bar-radius)',
                'border-style': 'none',
                'background-color': 'currentColor',
                'background-image': 'none',
                transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
            }
        ],
        [
            /^meter-h-(xs|sm|md|lg|xl|2xl)$/,
            ([, d]) => ({ '--metter-bar-height': `${getSizeProgress_Meter(d)}` }),
        ],
        [
            /^meter-rounded-(sm|md|lg|xl|full)$/,
            ([, d]) => ({ '--metter-bar-radius': `${getRadius(d)}` }),
        ],
        [
            /^range-thumb-size-(xs|sm|md|lg|xl)$/,
            ([, d], { variantHandlers }) => {
                if (variantHandlers.length)
                    return
                return {
                    '--range-slide-thumb-size': `${getRangeSize(d as variantSize).size}`,
                    '--range-track-height': `${getRangeSize(d as variantSize).track}`,
                    '--range-mt': `${getRangeSize(d as variantSize).mt}`,
                }
            },
        ],
        [/^range-thumb-bg-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
            return {
                '--range-thumb-bg': `${getVariableBgValue(body, theme)}`,
            }
        }],
        [/^switch-checked-thumb-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
            return {
                '--switch-checked-thumb': `${getVariableBgValue(body, theme)}`,
            }
        }],
        [/^switch-thumb-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
            return {
                '--switch-thumb': `${getVariableBgValue(body, theme)}`,
            }
        }],
        [/^range-track-bg-(light|gray|high|higher)$/, ([, name], { rawSelector, theme, variantHandlers }) => {
            if (!["light", "gray", "high", "higher"].includes(name))
                return
            if (variantHandlers.length)
                return
            const selector = e(rawSelector)
            return `
${appearance === "light" || appearance === "both" ? `
${selector}{
    --range-track-bg: ${getVariableBgValue(getBarShades(name as BarShade).light, theme)}
}`: ""}
 ${appearance === "dark" ? `
${selector}{
    --range-track-bg: ${getVariableBgValue(getBarShades(name as BarShade).dark, theme)}
}`: ""}
${appearance === "both" ? `
.dark ${selector}{
    --range-track-bg: ${getVariableBgValue(getBarShades(name as BarShade).dark, theme)} !important
}`: ''}`
        }],

        [
            /^progress-bar-(xs|sm|md|lg|xl|2xl)$/,
            ([, d]) => ({
                '--progressbar-height': `${getSizeProgress_Meter(d)}`,
            }),
        ],
        [
            /^progress-bar-rounded-(sm|md|lg|xl|full)$/,
            ([, d]) => ({ '--progress-bar-radius': `${getRadius(d)}` }),
        ],
        [/^progress-bar-bg-(light|gray|high|higher)$/, ([, name], { rawSelector, theme, variantHandlers }) => {
            if (!["light", "gray", "high", "higher"].includes(name))
                return
            if (variantHandlers.length)
                return
            const selector = e(rawSelector)
            return `
${appearance === "light" || appearance === "both" ? `
${selector}{
    --progress-bar-bg: ${getVariableBgValue(getBarShades(name as BarShade).light, theme)}
}`: ""}
 ${appearance === "dark" ? `
${selector}{
    --progress-bar-bg: ${getVariableBgValue(getBarShades(name as BarShade).dark, theme)}
}`: ""}
${appearance === "both" ? `
.dark ${selector}{
    --progress-bar-bg: ${getVariableBgValue(getBarShades(name as BarShade).dark, theme)}
}`: ''}`
        }],

        [/^moz-progress-(.+)$/, ([, name], { rawSelector }) => {
            if (!name.includes('bar'))
                return
            const selector = e(rawSelector)
            return `
${selector}::-moz-progress-bar{
    transition: all 150ms linear;
    border-radius: var(--progress-bar-radius);
    background-color: currentColor;
    width: 100%;
}
@supports(selector(&::-moz-progress-bar)) {
    ${selector} {
        background-color: var(--progress-bar-bg);
        border-radius: var(--progress-bar-radius);
    }
}`
        }],

    ] as Rule<Theme>[]

    return rules
}