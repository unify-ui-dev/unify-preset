import type { RingColorShades, RingBase, formOutline } from "@/types"
import type { BtnSizes, BtnGhostOrSoft, SolidBtnShade, BtnIconSizes, BtnWhite, SolidGradientBtn } from "./types"

const ghostConfig: BtnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 2,
        hoverBgShade: "100",
        hoverBgOpacity: 50,
        pressBgShade: "100",
        pressOpacity: 70,
        textShade: "700"
    },
    dark: {
        bgShade: "900",
        bgOpacity: 1,
        hoverBgShade: "900",
        hoverBgOpacity: 30,
        pressBgShade: "900",
        pressOpacity: 50,
        textShade: "700"
    }
}
const ghostGrayCongif: BtnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 1,
        hoverBgShade: "200",
        hoverBgOpacity: 40,
        pressBgShade: "200",
        pressOpacity: 75,
        textShade: "800"
    },
    dark: {
        bgShade: "600",
        bgOpacity: 1,
        hoverBgShade: "900",
        hoverBgOpacity: 30,
        pressBgShade: "900",
        pressOpacity: 20,
        textShade: "200"
    }
}

const softConfig: BtnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 50,
        hoverBgShade: "100",
        hoverBgOpacity: 70,
        pressOpacity: 90,
        pressBgShade: "100",
        textShade: "700"
    },
    dark: {
        bgShade: "950",
        bgOpacity: 20,
        hoverBgShade: "900",
        hoverBgOpacity: 20,
        pressOpacity: 70,
        pressBgShade: "950",
        textShade: "700"
    }
}
const softGrayConfig: BtnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 70,
        hoverBgShade: "200",
        hoverBgOpacity: 75,
        pressBgShade: "200",
        pressOpacity: 80,
        textShade: "800"
    },
    dark: {
        bgShade: "700",
        bgOpacity: 20,
        hoverBgShade: "800",
        hoverBgOpacity: 40,
        pressBgShade: "900",
        pressOpacity: 20,
        textShade: '100'
    }
}
const generalBtnOuline: formOutline = {
    borderSize: 1
}

const btnOutline: formOutline = {
    borderSize: 1,
    light: {
        borderShade: "300",
        hoverBorderShade: "400",
        activeBorderShade: "300",
        textShade: "700",
        hoverTextShade: "600",
    },
    dark: {
        borderShade: "400",
        hoverBorderShade: "300",
        activeBorderShade: "500",
        textShade: "500",
        hoverTextShade: "400"
    }
}

const btnGrayOutline: formOutline = {
    borderSize: 1,
    light: {
        borderShade: "500",
        hoverBorderShade: "600",
        activeBorderShade: "700",
        textShade: "700",
        hoverTextShade: "800"
    },
    dark: {
        borderShade: "500",
        hoverBorderShade: "600",
        activeBorderShade: "700",
        textShade: "300",
        hoverTextShade: "300"
    }
}

const btnSizes: BtnSizes = {
    xs: {
        height: 6,
        px: 2.5,
        textSize: "sm"
    },
    sm: {
        height: 8,
        px: 3.5,
        textSize: "sm"
    },
    md: {
        height: 9.5,
        px: 4,
        textSize: "base"
    },
    lg: {
        height: 10.5,
        px: 5,
        textSize: "base"
    },
    xl: {
        height: 12,
        px: 6,
        textSize: "base"
    },
}

const btnIconSizes: BtnIconSizes = {
    xs: {
        size: 6,
        textSize: "sm"
    },
    sm: {
        size: 8,
        textSize: "sm"
    },
    md: {
        size: 9.5,
        textSize: "base"
    },
    lg: {
        size: 10.5,
        textSize: "base"
    },
    xl: {
        size: 12,
        textSize: "base"
    },
}

const ringBase:RingBase = {
    size: 2,
    offset: 4,
}
const ringConfig: RingColorShades = {
    light: "600",
    dark: "600"
}
const ringGrayConfig: RingColorShades = {
    light: "300",
    dark: "700"
}

const solidShade: SolidBtnShade = {
    light: {
        bgShade: "600",
        hoverBgShade: "700",
        pressBgShade: "800",
    },
    dark: {
        bgShade: "600",
        hoverBgShade: "700",
        pressBgShade: "800",
    }
}
const graySolidShade: SolidBtnShade = {
    light: {
        bgShade: "600",
        hoverBgShade: "700",
        pressBgShade: "300",
        textShade: "50"
    },
    dark: {
        bgShade: "600",
        hoverBgShade: "800",
        pressBgShade: "600",
        textShade: "50"
    }
}

const defaultBtnWhite: BtnWhite = {
    light: {
        bg: "white",
        textColor: "gray-900",
        hoverBg: "gray-50",
        pressBg: "gray-100"
    },
    dark: {
        bg: "gray-950",
        textColor: "white",
        hoverBg: "gray-900/70",
        pressBg: "gray-800"
    }
}

const solidGradient: SolidGradientBtn = {
    light: {
        borderShade: "600",
        bgShadeFrom: "600",
        bgShadeTo: "500",
        hoverShadeTo: "600",
        hoverShadeFrom: "700"
    },
    dark: {
        borderShade: "600",
        bgShadeFrom: "600",
        bgShadeTo: "500",
        hoverShadeTo: "500",
        hoverShadeFrom: "700"
    }
}
const solidGradientGray: SolidGradientBtn = {
    light: {
        borderShade: "600",
        bgShadeFrom: "600",
        bgShadeTo: "500",
        hoverShadeTo: "600",
        hoverShadeFrom: "700"
    },
    dark: {
        borderShade: "600",
        bgShadeFrom: "600",
        bgShadeTo: "500",
        hoverShadeTo: "600",
        hoverShadeFrom: "700"
    }
}

export const btnCongig = {
    useRing: false,
    ghostConfig,
    ghostGrayCongif,
    softConfig,
    softGrayConfig,
    generalBtnOuline,
    btnOutline,
    btnGrayOutline,
    btnSizes,
    btnIconSizes,
    ringConfig,
    ringGrayConfig,
    solidShade,
    graySolidShade,
    defaultBtnWhite,
    solidGradient,
    solidGradientGray,
    ringBase,
}