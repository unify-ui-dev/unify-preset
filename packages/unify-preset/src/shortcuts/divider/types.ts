import { ColorShade } from "@/types"

export type DividerShadeBase = {
    light?: ColorShade,
    dark?: ColorShade
}
export type Divider = {
    grayShades?: DividerShadeBase
    shades?: DividerShadeBase
}