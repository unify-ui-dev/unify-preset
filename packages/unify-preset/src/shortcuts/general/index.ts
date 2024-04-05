
import type { Appearance, BaseUI, SharedVariant } from "@/types"
import { genVariantSolid, genVariantOutline, genVariantSubtle, genVariantSoft, genGratientText, genTextColor, genVariantWhiteBlack, genOutline } from "./../helpers"
import { helperDefaultValues } from "./../helpers"

const getGeneralShortcuts = ({ sharedConfig, uiConfig, globalElement }: { sharedConfig?: SharedVariant, globalElement?: BaseUI, uiConfig: { appearance: Appearance } }) => {
    const { appearance } = uiConfig
    const soft = sharedConfig?.soft || helperDefaultValues.generalSoft
    const subtle = sharedConfig?.subtle || helperDefaultValues.defaultSubtle
    const outline = sharedConfig?.outline || helperDefaultValues.defaultOutlineELement
    const colorBorder = globalElement?.borderColor || helperDefaultValues.bdrUI

    const globBorderSize = globalElement?.borderGray?.borderSize || helperDefaultValues.grayBdrUI.borderSize
    const borderGray = globalElement?.borderGray || helperDefaultValues.grayBdrUI


    const solidShades = sharedConfig?.solid || helperDefaultValues.defaultSolidShades
    const grayLight = globalElement?.grayBg?.grayLight || helperDefaultValues.bgSoligUI.grayLight
    const grayHigh = globalElement?.grayBg?.grayHigh || helperDefaultValues.bgSoligUI.grayHigh
    const grayHigher = globalElement?.grayBg?.grayHigher || helperDefaultValues.bgSoligUI.grayHigher


    const graySoft = sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const graySolid = sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades
    const grayOutline = sharedConfig?.outlineGray || helperDefaultValues.defaultOutlineGrayELement
    const graySubtle = sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray


    const typoGray = globalElement?.bodyColor || helperDefaultValues.defaultTypoGray
    const typoGrayReverse = globalElement?.bodyColorReverse || helperDefaultValues.textTypoColorReverse

    const typoNeutral = globalElement?.bodyNeutral || helperDefaultValues.defaultTypoNeutral
    const bodyBg = globalElement?.bodyBg || helperDefaultValues.bodyBg
    const bodyBgInverse = globalElement?.bodyBgInverse || helperDefaultValues.bodyBgInverse

    const utils: Record<string, string> = {
        // bg
        'bg-body': `${genVariantWhiteBlack({ appearance, colors: bodyBg })}`,
        'bg-body-inverse': `${genVariantWhiteBlack({ appearance, colors: bodyBgInverse })}`,

        // typo
        'text-title': `${genTextColor(appearance, typoGray.title)}`,
        'text-title-reverse': `${genTextColor(appearance, typoGrayReverse.title)}`,
        'text-sub-title': `${genTextColor(appearance, typoGray.subTitle)}`,
        'text-sub-title-reverse': `${genTextColor(appearance, typoGrayReverse.subTitle)}`,
        'text-body': `${genTextColor(appearance, typoGray.text)}`,
        'text-text-reverse': `${genTextColor(appearance, typoGrayReverse.text)}`,
        'text-sub-body': `${genTextColor(appearance, typoGray.subText)}`,
        'text-sub-body-reverse': `${genTextColor(appearance, typoGrayReverse.subText)}`,
        'text-title-neutral': `${genTextColor(appearance, typoNeutral.title)}`,
        'text-sub-title-neutral': `${genTextColor(appearance, typoNeutral.subTitle)}`,
        'text-body-neutral': `${genTextColor(appearance, typoNeutral.text)}`,
        'text-sub-body-neutral': `${genTextColor(appearance, typoNeutral.subText)}`,

        //gradient
        'text-gradient-to-t': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-t", appearance)}`,
        'text-gradient-to-tl': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-tl", appearance)}`,
        'text-gradient-to-tr': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-tr", appearance)}`,
        'text-gradient-to-b': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-b", appearance)}`,
        'text-gradient-to-bl': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-bl", appearance)}`,
        'text-gradient-to-br': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-br", appearance)}`,
        'text-gradient-to-l': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-l", appearance)}`,
        'text-gradient-to-lt': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-lt", appearance)}`,
        'text-gradient-to-lb': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-lb", appearance)}`,
        'text-gradient-to-r': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-r", appearance)}`,
        'text-gradient-to-rt': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-rt", appearance)}`,
        'text-gradient-to-rb': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-rb", appearance)}`,

        //flex
        'flex-justify-center': `flex justify-center`,
        'flex-justify-start': 'flex justify-start',
        'flex-justify-end': 'flex justify-end',
        'flex-between': 'flex justify-between',
        'flex-place-center': `flex justify-center items-center`,

    }

    const colorBdr = { borderSize: outline.borderSize, light: colorBorder?.default?.light, dark: colorBorder?.default?.dark }
    const grayBdr = { borderSize: globBorderSize, light: borderGray.default?.light, dark: borderGray.default?.dark }
    const lightColorBdr = { borderSize: globBorderSize, light: colorBorder?.light?.light, dark: colorBorder?.light?.dark }
    const lightGrayBdr = { borderSize: globBorderSize, light: borderGray.light?.light, dark: borderGray.light?.dark }
    const highColorBdr = { borderSize: outline.borderSize, light: colorBorder?.high?.light, dark: colorBorder?.high?.light }
    const highGrayBdr = { borderSize: globBorderSize, light: borderGray.high?.light, dark: borderGray.high?.dark }
    const higherColorBdr = { borderSize: outline.borderSize, light: colorBorder?.higher?.light, dark: colorBorder?.higher?.light }
    const higherGrayBdr = { borderSize: globBorderSize, light: borderGray.higher?.light, dark: borderGray.higher?.dark }

    const dynamicUtils: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^bg-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: graySolid })}`],
        [/^bg-light-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: { ...grayLight } })}`],
        [/^bg-high-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: { ...grayHigh } })}`],
        [/^bg-higher-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: { ...grayHigher } })}`],

        [/^bg-outline(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantOutline({ color, appearance, outlineColor: outline, outlineGray: grayOutline })}`],
        [/^bg-subtle(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSubtle({ color, appearance, subtle, graySubtle })}`],
        [/^bg-soft(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSoft({ color, appearance, soft, graySoft })}`],
        [/^bdr(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr })}`],
        [/^bdr_x(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-x" })}`],
        [/^bdr_y(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-y" })}`],
        [/^bdr_t(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-t" })}`],
        [/^bdr_b(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-b" })}`],
        [/^bdr_r(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-r" })}`],
        [/^bdr_l(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-l" })}`],

        [/^bdr_light(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr })}`],
        [/^bdr_light_x(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-x" })}`],
        [/^bdr_light_y(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-y" })}`],
        [/^bdr_light_t(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-t" })}`],
        [/^bdr_light_b(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-b" })}`],
        [/^bdr_light_r(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-r" })}`],
        [/^bdr_light_l(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-l" })}`],

        [/^bdr_high(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr })}`],
        [/^bdr_high_x(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-x" })}`],
        [/^bdr_high_y(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-y" })}`],
        [/^bdr_high_t(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-t" })}`],
        [/^bdr_high_b(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-b" })}`],
        [/^bdr_high_r(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-r" })}`],
        [/^bdr_high_l(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-l" })}`],

        [/^bdr_higher(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr })}`],
        [/^bdr_higher_x(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-x" })}`],
        [/^bdr_higher_y(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-y" })}`],
        [/^bdr_higher_t(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-t" })}`],
        [/^bdr_higher_b(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-b" })}`],
        [/^bdr_higher_r(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-r" })}`],
        [/^bdr_higher_l(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-l" })}`],

    ]

    return [
        utils,
        ...dynamicUtils
    ]

}


export { getGeneralShortcuts }