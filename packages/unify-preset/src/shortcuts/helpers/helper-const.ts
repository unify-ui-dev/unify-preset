import type { OutlineVariant, GradientText, Soft, SolidShade, Subtle } from "@/types";

const defaultSolidShades: SolidShade = {
    light: {
        bgShade: "600",
    },
    dark: {
        bgShade: "500",
    }
}

const defaultSolidGrayShades: SolidShade = {
    light: {
        bgShade: "100",
        textShade: "700"
    },
    dark: {
        bgShade: "900",
        textShade: "300"
    }
}

const defaultSolidGrayInheritShades: SolidShade = {
    light: {
        bgShade: "200",
        textShade: "700"
    },
    dark: {
        bgShade: "800",
        textShade: "300"
    }
}

const defaultSubtle: Subtle = {
    borderWidth: 1,
    light: {
        bgShade: "200",
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
const generalSoft: Soft = defaultSubtle
const defaultSubtleInherit: Subtle = {
    borderWidth: 1,
    light: {
        bgShade: "200",
        bgOpacity: 50,
        borderShade: "600",
        borderOpacity: 25,
        textShade: "600"
    },
    dark: {
        bgShade: "800",
        bgOpacity: 10,
        borderShade: "600",
        borderOpacity: 15,
        textShade: "600"
    }
}

const defaultSubtleGray: Subtle = {
    borderWidth: 1,
    light: {
        bgShade: "200",
        bgOpacity: 60,
        borderShade: "400",
        borderOpacity: 30,
        textShade: "700"
    },
    dark: {
        bgShade: "900",
        bgOpacity: 30,
        borderShade: "600",
        borderOpacity: 25,
        textShade: "300"
    }
}

const defaultSubtleGrayActive: Subtle = {
    borderWidth: 1,
    light: {
        bgShade: "100",
        bgOpacity: 90,
        borderShade: "400",
        borderOpacity: 60,
        textShade: "700"
    },
    dark: {
        bgShade: "900",
        bgOpacity: 70,
        borderShade: "700",
        borderOpacity: 70,
        textShade: "300"
    }
}

const generalSoftGray: Soft = defaultSubtleGray

const generalSoftGrayActive: Soft = defaultSubtleGrayActive

const defaultSubtleGrayInherit: Subtle = {
    borderWidth: 1,
    light: {
        bgShade: "300",
        bgOpacity: 40,
        borderShade: "300",
        borderOpacity: 15,
        textShade: "700"
    },
    dark: {
        bgShade: "300",
        bgOpacity: 20,
        borderShade: "500",
        borderOpacity: 20,
        textShade: "300"
    }
}



const getOutlineELement: OutlineVariant = {
    borderSize: 1,
}

const defaultOutlineELement: OutlineVariant = {
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

const defaultOutlineGrayELement: OutlineVariant = {
    borderSize: 1,
    light: {
        borderShade: "200",
        textShade: "700"
    },
    dark: {
        borderShade: "900",
        textShade: "300"
    }
}


const defaultTypoGray = {
    title: {
        light: "gray-900",
        dark: "white"
    },
    subTitle: {
        light: "gray-800",
        dark: "gray-50"
    },
    text: {
        light: "gray-700",
        dark: "gray-300"
    },
    subText: {
        light: "gray-600",
        dark: "gray-400"
    }
}

const textTypoColorReverse ={
    title: {
        light: "white",
        dark: "gray-900"
    },
    subTitle: {
        light: "gray-50",
        dark: "gray-800"
    },
    text: {
        light: "gray-300",
        dark: "gray-700"
    },
    subText: {
        light: "gray-400",
        dark: "gray-600"
    }
}


const defaultTypoNeutral = {
    title: {
        light: "gray-950",
        dark: "white"
    },
    subTitle: {
        light: "gray-900",
        dark: "white"
    },
    text: {
        light: "gray-700",
        dark: "gray-300"
    },
    subText: {
        light: "gray-600",
        dark: "gray-400"
    }
}


const defaultTextGradient: GradientText = {
    light: {
        colorFrom: "gray-900",
        colorTo: "gray-600"
    },
    dark: {
        colorFrom: "gray-50",
        colorTo: "gray-300"
    },
}

const background = {
    light: "white",
    dark: "gray-950"
}
const backgroundInverse = {
    light: "gray-950",
    dark: "white",
}

export const helperDefaultValues = {
    defaultOutlineELement,
    defaultOutlineGrayELement,
    defaultSolidGrayShades,
    defaultSolidGrayInheritShades,
    defaultSolidShades,
    defaultSubtle,
    defaultSubtleGrayInherit,
    defaultSubtleInherit,
    defaultSubtleGray,
    defaultSubtleGrayActive,
    generalSoft,
    generalSoftGray,
    generalSoftGrayActive,
    getOutlineELement,
    defaultTypoGray,
    textTypoColorReverse,
    defaultTypoNeutral,
    defaultTextGradient,
    background,
    backgroundInverse
}

