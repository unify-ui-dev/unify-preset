import type { SolidShade } from "@/types";

const cardGray:SolidShade = {
    light:{
        bgShade:"100",
        textShade:"700"
    },
    dark:{
        bgShade:"900",
        textShade:"300"
    }
}
const cardInnerGray:SolidShade = {
    light:{
        bgShade:"200",
        textShade:"800"
    },
    dark:{
        bgShade:"800",
        textShade:"200"
    }
}

const cardSubInnerGray:SolidShade = {
    light:{
        bgShade:"300",
        textShade:"800"
    },
    dark:{
        bgShade:"700",
        textShade:"100"
    }
}

export const cardDefault = {
    cardGray,
    cardInnerGray,
    cardSubInnerGray
}