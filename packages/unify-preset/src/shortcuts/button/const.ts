import type { focusRing, formOutline } from "@/types"
import type { btnSizes, btnGhostOrSoft, solidBtnShade } from "./types"

export const ghostDefaultCongif: btnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 5,
        hoverBgShade: "100",
        hoverBgOpacity: 80,
        pressBgShade: "100",
        pressOpacity: 90,
        textShade: "600"
    },
    dark: {
        bgShade: "900",
        bgOpacity: 5,
        hoverBgShade: "900",
        hoverBgOpacity: 30,
        pressBgShade: "900",
        pressOpacity: 50,
        textShade: "500"
    }
}
export const ghostGrayDefaultCongif: btnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 5,
        hoverBgShade: "200",
        hoverBgOpacity: 60,
        pressBgShade: "200",
        pressOpacity: 80,
        textShade: "600"
    },
    dark: {
        bgShade: "600",
        bgOpacity: 5,
        hoverBgShade: "700",
        hoverBgOpacity: 60,
        pressBgShade: "700",
        pressOpacity: 70,
        textShade: "500"
    }
}



export const softDefaultConfig: btnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 50,
        hoverBgShade: "100",
        hoverBgOpacity: 80,
        pressOpacity: 60,
        pressBgShade: "100",
        textShade: "600"
    },
    dark: {
        bgShade: "900",
        bgOpacity: 30,
        hoverBgShade: "900",
        hoverBgOpacity: 50,
        pressOpacity: 40,
        pressBgShade: "900",
        textShade: "500"
    }
}
export const softGrayDefaultConfig: btnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 20,
        hoverBgShade: "200",
        hoverBgOpacity: 75,
        pressBgShade: "200",
        pressOpacity: 80,
        textShade: "800"
    },
    dark: {
        bgShade: "600",
        bgOpacity: 5,
        hoverBgShade: "700",
        hoverBgOpacity: 10,
        pressBgShade: "700",
        pressOpacity: 20,
        textShade: '200'
    }
}

export const ghostNeutralDefaultCongif: btnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 5,
        hoverBgShade: "200",
        hoverBgOpacity: 70,
        pressBgShade: "200",
        pressOpacity: 90,
        textShade: "900"
    },
    dark: {
        bgShade: "900",
        bgOpacity: 5,
        hoverBgShade: "800",
        hoverBgOpacity: 80,
        pressBgShade: "800",
        pressOpacity: 90,
        textShade: "100"
    }
}
export const softNeutralDefaultConfig: btnGhostOrSoft = {
    light: {
        bgShade: "100",
        bgOpacity: 50,
        hoverBgShade: "200",
        hoverBgOpacity: 80,
        pressBgShade: "200",
        pressOpacity: 90,
        textShade: "900"
    },
    dark: {
        bgShade: "600",
        bgOpacity: 30,
        hoverBgShade: "700",
        hoverBgOpacity: 50,
        pressBgShade: "700",
        pressOpacity: 70,
        textShade: "100"
    }
}

export const generalBtnOuline: formOutline = {
    borderSize: 1
}

export const defaultBtnOutline: formOutline = {
    borderSize: 1,
    light: {
        borderShade: "100",
        hoverBorderShade: "200",
        activeBorderShade: "200",
        textShade: "800",
        hoverTextShade: "900",
    },
    dark: {
        borderShade: "500",
        hoverBorderShade: "600",
        activeBorderShade: "600",
        textShade: "500",
        hoverTextShade: "600"
    }
}

export const defaultBtnGrayOutline: formOutline = {
    borderSize: 1,
    light: {
        borderShade: "600",
        hoverBorderShade: "700",
        activeBorderShade: "800",
        textShade: "600",
        hoverTextShade: "700"
    },
    dark: {
        borderShade: "500",
        hoverBorderShade: "600",
        activeBorderShade: "600",
        textShade: "500",
        hoverTextShade: "600"
    }
}

export const defaultBtnSizes: btnSizes = {
    xs: {
        height: 6,
        px: 3.5,
    },
    sm: {
        height: 8,
        px: 4,
    },
    md: {
        height: 10,
        px: 5,
    },
    lg: {
        height: 12,
        px: 6,
    },
    xl: {
        height: 12,
        px: 7,
    },
}

export const defaultFocusRing: focusRing = {
    size: 1,
    offset: 4,
    lightShade: "600",
    darkShade: "500"
}
export const defaultFocusRingGray: focusRing = {
    size: 1,
    offset: 4,
    lightShade: "200",
    darkShade: "800"
}

export const defaultSolidShade: solidBtnShade = {
    light: {
        bgShade: "600",
        hoverBgShade: "700",
        pressBgShade: "800",
    },
    dark: {
        bgShade: "500",
        hoverBgShade: "600",
        pressBgShade: "700",
    }
}
export const defaultGraySolidShade: solidBtnShade = {
    light: {
        bgShade: "100",
        hoverBgShade: "200",
        pressBgShade: "300",
        textShade: "900"
    },
    dark: {
        bgShade: "900",
        hoverBgShade: "800",
        pressBgShade: "700",
        textShade: "50"
    }
}