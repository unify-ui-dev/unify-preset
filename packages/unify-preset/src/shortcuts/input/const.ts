import { RingBase } from "@/types"
import type { Input } from "."


export const defRingBase: RingBase = {
    size: 2,
    offset: 6
}

export const defaultInput: Input = {
    borderSize: 1,
    focusOutlineSize:2,
    useRing:false,
    solidGray: {
        light: {
            bgShade: "100",
            textShade: "700"
        },
        dark: {
            bgShade: "900",
            textShade: "300"
        }
    },
    lightGray:{
        light: {
            bgShade: "50",
            textShade: "700"
        },
        dark: {
            bgShade: "950",
            textShade: "300"
        }
    },
    higherGray:{
        light: {
            bgShade: "300",
            textShade: "800"
        },
        dark: {
            bgShade: "700",
            textShade: "300"
        }
    },
    highGray:{
        light: {
            bgShade: "200",
            textShade: "200"
        },
        dark: {
            bgShade: "800",
            textShade: "300"
        }
    },
    ring: {
        light: "600",
        dark: "500"
    },
    ringGray: {
        light: "300",
        dark: "700"
    },
    outline: {
        light: "200",
        dark: "800"
    },
    focusColor: {
        light: "600",
        dark: "500"
    },
    focusGray: {
        light: "300",
        dark: "700"
    },
    textColor: {
        light: "700",
        dark: "300"
    },
    placeHolder: {
        light: "400",
        dark: "500"
    },
    size: {
        "2xs": {
            padding: { x: 2, y: 1 },
            textSize: "xs"
        },
        xs: {
            padding: { x: 2.5, y: 1.5 },
            textSize: "xs"
        },
        sm: {
            padding: { x: 2.5, y: 1.5 },
            textSize: "sm"
        },
        md: {
            padding: { x: 3, y: 2 },
            textSize: "sm"
        },
        lg: {
            padding: { x: 3.5, y: 2.5 },
            textSize: "sm"
        },
        xl: {
            padding: { x: 3.5, y: 2.5 },
            textSize: "base"
        }
    },
}