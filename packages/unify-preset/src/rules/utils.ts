import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'

import { barShades, progress_MeterHeightSize, radius, rangeSizes } from "./const"
import type { BarShade, variantSize } from "./types"

export const getRangeSize = (val: variantSize) => {
    return rangeSizes[val]
}
export const getSizeProgress_Meter = (val: string) => {
    return progress_MeterHeightSize[val]
}

export const getRadius = (val: string) => {
    return radius[val]
}

export const getVariableBgValue = (body: string, theme: Theme) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components)
        return `rgb(${color.cssColor.components.join(',')})`
    return color?.color
}

export const getBarShades = (val: BarShade) => {
    return barShades[val]
}