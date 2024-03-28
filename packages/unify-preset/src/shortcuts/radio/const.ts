import type { RingBase, RingColorShades, VariantSizeBoth } from "@/types"

const ringBase:RingBase = {
    size: 2,
    offset: 2,
}

const ringConfig: RingColorShades = {
    light: "600",
    dark: "500"
}
const ringGrayConfig: RingColorShades = {
    light: "200",
    dark: "800"
}

const sizes: VariantSizeBoth = {
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10
}


export const radioCongig = {
    ringConfig,
    ringGrayConfig,
    sizes,
    ringBase
}