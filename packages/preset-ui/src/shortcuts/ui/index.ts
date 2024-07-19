import type { Appearance, BaseColor, OutlineVariant, SemanticColorNames, SizeVariantBase, Soft, Subtle } from "@/types";

import { genUiBackground, genUiSizes, genVariantOutline, genVariantSoft, genVariantSubtle, getUiCardSize, globalUiConfig } from "../helpers";

import type { Shortcut } from "unocss";
import { isValidColor } from "@/utils/colors-utils";
import type { BaseVariants } from "./types";


const getUiShortcuts = (
    globalUi?: BaseVariants,
    uiConfig?: { appearance?: Appearance }
) => {

    const { variants, size: sizes, cardSize } = Object.assign({}, globalUiConfig, globalUi)

    const appearance = uiConfig?.appearance || "both"

    const dynamicUi: Shortcut[] = [
        [
            /^ui-solid(-(\S+))?$/,
            ([, , color = "gray"], { theme }) => {
                let shades: BaseColor = { shade: "100", textColor: "700" };
                if (color === 'neutral' || isValidColor(color, theme)) {
                    const solidVariant = variants?.solid
                    if (solidVariant) {
                        const key = color as SemanticColorNames
                        if (solidVariant.base && color in solidVariant.base) {
                            shades = solidVariant.base[key] as BaseColor;
                        } else if (solidVariant.custom && color in solidVariant.custom) {
                            shades = solidVariant.custom[key];
                        } else { shades = solidVariant['global'] as BaseColor }
                        return `${genUiBackground({ color, appearance, colorShades: shades })}`;
                    }
                }
            },
            { autocomplete: ["ui-solid", "ui-solid-(primary|secondary|accent|success|warning|info|danger|gray|neutral)"], },
        ],
        [
            /^ui-outline(-(\S+))?$/,
            ([, , color = "gray"], { theme }) => {
                let shades: OutlineVariant = { borderSize: 1, textShade: "600", shade: "600", dark: { textShade: "500", shade: "500" } };
                if (color === 'neutral' || isValidColor(color, theme)) {
                    const outlineVariant = variants?.outline
                    if (outlineVariant) {
                        const key = color as SemanticColorNames
                        if (outlineVariant.base && color in outlineVariant.base) {
                            shades = outlineVariant.base[key] as OutlineVariant;
                        } else if (outlineVariant.custom && color in outlineVariant.custom) {
                            shades = outlineVariant.custom[key];
                        } else { shades = outlineVariant['global'] as OutlineVariant }
                        return `${genVariantOutline({ color, appearance, outlineColor: shades })}`;
                    }
                }
            },
            { autocomplete: ["ui-outline", "ui-outline-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
        ],
        [
            /^ui-subtle(-(\S+))?$/,
            ([, , color = "gray"], { theme }) => {
                let shades: Subtle = { textShade: "600", bgShade: "300", bgOpacity: 30, borderOpacity: 70, borderShade: "500" };
                if (color === 'neutral' || isValidColor(color, theme)) {
                    const subtleVariant = variants?.subtle
                    if (subtleVariant) {
                        const key = color as SemanticColorNames
                        if (subtleVariant.base && color in subtleVariant.base) {
                            shades = subtleVariant.base[key] as Subtle;
                        } else if (subtleVariant.custom && color in subtleVariant.custom) {
                            shades = subtleVariant.custom[key];
                        } else { shades = subtleVariant['global'] as Subtle }
                        return `${genVariantSubtle({ color, appearance, subtle: shades })}`;
                    }
                }
            },
            { autocomplete: ["ui-subtle", "ui-subtle-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
        ],
        [
            /^ui-soft(-(\S+))?$/,
            ([, , color = "gray"], { theme }) => {
                let shades: Soft = { textShade: "600", bgShade: "300", bgOpacity: 30 };
                if (color === 'neutral' || isValidColor(color, theme)) {
                    const softVariant = variants?.soft
                    if (softVariant) {
                        const key = color as SemanticColorNames
                        if (softVariant.base && color in softVariant.base) {
                            shades = softVariant.base[key] as Soft;
                        } else if (softVariant.custom && color in softVariant.custom) {
                            shades = softVariant.custom[key];
                        } else { shades = softVariant['global'] as Soft }
                        return `${genVariantSoft({ color, appearance, soft: shades })}`;
                    }
                }
            },
            { autocomplete: ["ui-soft", "ui-soft-(primary|secondary|accent|success|warning|info|danger|gray|neutral)",], },
        ],
        [
            /^ui-card-(xs|sm|md|lg|xl)$/,
            ([, size]) => {
                if (cardSize) {
                    const uSize = cardSize[size as SizeVariantBase]
                    if (uSize)
                        return `${getUiCardSize(uSize)}`;
                }
            },
            { autocomplete: ["ui-card-(xs|sm|md|lg|xl)"], },
        ],
        [
            /^ui-(sz|size)-(xs|sm|md|lg|xl)$/,
            ([, , size]) => {
                if (sizes) {
                    const uSize = sizes[size as SizeVariantBase]
                    if (uSize)
                        return `${genUiSizes(uSize)}`;
                }
            },
            { autocomplete: ["ui-size-(xs|sm|md|lg|xl)", "ui-sz-(xs|sm|md|lg|xl)"], },
        ],
    ];

    return [...dynamicUi];
};

export { getUiShortcuts };