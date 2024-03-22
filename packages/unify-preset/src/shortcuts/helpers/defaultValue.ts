import type { elementOutline, soft, solidShade, subtle } from "@/types";

export const defaultSolidShades: solidShade = {
    light: {
        bgShade: "600",
    },
    dark: {
        bgShade: "500",
    }
}

export const defaultSolidGrayShades: solidShade = {
    light: {
        bgShade: "100",
        textShade:"700"
    },
    dark: {
        bgShade: "900",
        textShade:"300"
    }
}

export const defaultSubtle: subtle = {
    borderWidth: 1,
    light: {
        bgShade: "100",
        bgOpacity: 60,
        borderShade: "600",
        borderOpacity: 25,
        textShade: "600"
    },
    dark: {
        bgShade: "900",
        bgOpacity: 30,
        borderShade: "500",
        borderOpacity: 25,
        textShade: "500"
    }
}

export const defaultSubtleGray: subtle = {
    borderWidth: 1,
    light: {
        bgShade: "200",
        bgOpacity: 60,
        borderShade: "200",
        borderOpacity: 25,
        textShade: "800"
    },
    dark: {
        bgShade: "800",
        bgOpacity: 30,
        borderShade: "500",
        borderOpacity: 25,
        textShade: "200"
    }
}

export const defaultSubtleNeutral: subtle = {
    borderWidth: 1,
    light: {
        bgShade: "100",
        bgOpacity: 70,
        textShade: "800",
        borderOpacity: 80
    },
    dark: {
        bgShade: "600",
        bgOpacity: 60,
        textShade: "200",
        borderOpacity: 60
    }
}

export const generalSoft: soft = {
    light: {
        bgShade: "100",
        bgOpacity: 60,
        textShade: "600"
    },
    dark: {
        bgOpacity: 30,
        bgShade: "900",
        textShade: "500"
    }
}

export const generalSoftGray: soft = {
    light: {
        bgShade:'100',
        bgOpacity: 60,
        textShade:"800"
    },
    dark: {
        bgShade:"600",
        bgOpacity: 30,
        textShade:"200"
    }
}

export const generalSoftNeutral: soft = {
    light: {
        bgShade:"100",
        bgOpacity: 60,
        textShade:"900"
    },
    dark: {
        bgShade:"600",
        bgOpacity: 30,
        textShade:"100"
    }
}

export const getOutlineELement: elementOutline = {
    borderSize: 1,
}

export const defaultOutlineELement: elementOutline = {
    borderSize: 1,
    light: {
        borderShade: "600",
        textShade: "600"
    },
    dark: {
        borderShade: "500",
        textShade: "500"
    }
}

export const defaultOutlineGrayELement: elementOutline = {
    borderSize: 1,
    light: {
        borderShade: "100",
        textShade: "800"
    },
    dark: {
        borderShade: "900",
        textShade: "200"
    }
}
