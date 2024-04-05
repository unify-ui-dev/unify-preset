import type { Appearance, BaseUI, SharedVariant } from "@/types"
import { genVariantOutline, genVariantSoft, genVariantSolid, genVariantSubtle, genVariantWhiteBlack } from "../helpers"
import { helperDefaultValues } from "../helpers"
import type { Card } from "./types"
import { cardDefault } from "./const"

const getCardShortcuts = (card?: Card, sharedConfig?: SharedVariant, globalElement?: BaseUI, uiConfig?: { appearance?: Appearance }) => {
    const soft = card?.softGray || sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const subtle = card?.subtleGray || sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray
    const outline = card?.outline || sharedConfig?.outline || helperDefaultValues.defaultOutlineGrayELement

    const appearance = uiConfig?.appearance || "both"

    
    const solid = card?.solid || sharedConfig?.solid || cardDefault.cardGray || helperDefaultValues.defaultSolidGrayShades
    
    const gray = card?.solid || sharedConfig?.solidGray || cardDefault.cardGray || helperDefaultValues.defaultSolidGrayShades
    const grayInner = card?.innerSolid  || cardDefault.cardInnerGray
    const subInnerGray = card?.subInner || cardDefault.cardSubInnerGray

    const background = globalElement?.bodyBg || helperDefaultValues.bodyBg
    const backgroundInverse = globalElement?.bodyBgInverse || helperDefaultValues.bodyBgInverse

    const cards = {
        'card-body': `${genVariantWhiteBlack({ appearance, colors: background })}`,
        'card-body-inverse': `${genVariantWhiteBlack({ appearance, colors: backgroundInverse })}`,
    }

    const dynamicCard: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^card-solid(-(\S+))?$/, ([, , color = "gray"]) => `${genVariantSolid({ color, appearance, colorShades: solid, grayShades: gray })}`],
        [/^card-inner(-(\S+))?$/, ([, , color = "gray"]) => `${genVariantSolid({ color, appearance, colorShades: solid, grayShades: grayInner })}`],
        [/^card-sub-inner(-(\S+))?$/, ([, , color = "gray"]) => `${genVariantSolid({ color, appearance, colorShades: solid, grayShades: subInnerGray })}`],
        
        [/^card-subtle(-(\S+))?$/, ([, , color = "gray"]) => `${genVariantSubtle({ color, appearance, subtle, graySubtle: subtle })}`],
        [/^card-outline(-(\S+))?$/, ([, , color = "gray"]) => `${genVariantOutline({ color, appearance, outlineColor: outline, outlineGray: outline })}`],
        [/^card-soft(-(\S+))?$/, ([, , color = "gray"]) => `${genVariantSoft({ color, appearance, soft, graySoft: soft })}`],
    ]
    return [
        cards,
        ...dynamicCard
    ]
}

export { getCardShortcuts, Card }
