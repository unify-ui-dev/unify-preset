
import type { Appearance, BaseUI, SharedVariant } from "@/types"
import { genVariantSolid, genVariantOutline, genVariantSubtle, genVariantSoft, genGratientText, genTextColor, genVariantWhiteBlack, genOutline } from "./../helpers"
import { helperDefaultValues } from "./../helpers"

const getGeneralShortcuts = ({ sharedConfig, uiConfig, globalElement }: { sharedConfig?: SharedVariant, globalElement?: BaseUI, uiConfig: { appearance: Appearance } }) => {
    const { appearance } = uiConfig
    const soft = sharedConfig?.soft || helperDefaultValues.generalSoft
    const subtle = sharedConfig?.subtle || helperDefaultValues.defaultSubtle
    const outline = sharedConfig?.outline || helperDefaultValues.defaultOutlineELement
    const solidShades = sharedConfig?.solid || helperDefaultValues.defaultSolidShades

    const graySoft = sharedConfig?.softGray || helperDefaultValues.generalSoftGray
    const graySolid = sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades
    const grayOutline = sharedConfig?.outlineGray || helperDefaultValues.defaultOutlineGrayELement
    const graySubtle = sharedConfig?.subtleGray || helperDefaultValues.defaultSubtleGray


    const typoGray = globalElement?.textTypoColor || helperDefaultValues.defaultTypoGray
    const typoGrayReverse = globalElement?.textTypoColorReverse || helperDefaultValues.textTypoColorReverse
    
    const typoNeutral = globalElement?.textTypoNeutral || helperDefaultValues.defaultTypoNeutral
    const background = globalElement?.background || helperDefaultValues.background
    const backgroundInverse = globalElement?.backgroundInverse || helperDefaultValues.backgroundInverse

    const utils: Record<string, string> = {
        // bg
        'bg-background': `${genVariantWhiteBlack({ appearance, colors: background })}`,
        'bg-background-inverse': `${genVariantWhiteBlack({ appearance, colors: backgroundInverse })}`,

        // typo
        'ui-title': `${genTextColor(appearance, typoGray.title)}`,
        'ui-title-reverse': `${genTextColor(appearance, typoGrayReverse.title)}`,
        'ui-subtitle': `${genTextColor(appearance, typoGray.subTitle)}`,
        'ui-subtitle-reverse': `${genTextColor(appearance, typoGrayReverse.subTitle)}`,
        'ui-text': `${genTextColor(appearance, typoGray.text)}`,
        'ui-text-reverse': `${genTextColor(appearance, typoGrayReverse.text)}`,
        'ui-subtext': `${genTextColor(appearance, typoGray.subText)}`,
        'ui-subtext-reverse': `${genTextColor(appearance, typoGrayReverse.subText)}`,
        'ui-title-neutral': `${genTextColor(appearance, typoNeutral.title)}`,
        'ui-subtitle-neutral': `${genTextColor(appearance, typoNeutral.subTitle)}`,
        'ui-text-neutral': `${genTextColor(appearance, typoNeutral.text)}`,
        'ui-subtext-neutral': `${genTextColor(appearance, typoNeutral.subText)}`,

        //gradient
        'ui-text-gradient-to-t': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-t", appearance)}`,
        'ui-text-gradient-to-tl': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-tl", appearance)}`,
        'ui-text-gradient-to-tr': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-tr", appearance)}`,
        'ui-text-gradient-to-b': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-b", appearance)}`,
        'ui-text-gradient-to-bl': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-bl", appearance)}`,
        'ui-text-gradient-to-br': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-br", appearance)}`,
        'ui-text-gradient-to-l': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-l", appearance)}`,
        'ui-text-gradient-to-lt': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-lt", appearance)}`,
        'ui-text-gradient-to-lb': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-lb", appearance)}`,
        'ui-text-gradient-to-r': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-r", appearance)}`,
        'ui-text-gradient-to-rt': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-rt", appearance)}`,
        'ui-text-gradient-to-rb': `${genGratientText(helperDefaultValues.defaultTextGradient, "to-rb", appearance)}`,

        //flex
        'flex-justify-center': `flex justify-center`,
        'flex-justify-start': 'flex justify-start',
        'flex-justify-end': 'flex justify-end',
        'flex-between': 'flex justify-between',
        'flex-place-center': `flex justify-center items-center`,
    }

    const getBorderColor = { borderSize: outline.borderSize, light: outline.light?.borderShade, dark: outline.dark?.borderShade }
    const getBorderGray = { borderSize: grayOutline.borderSize, light: grayOutline.light?.borderShade, dark: grayOutline.dark?.borderShade }

    const dynamicUtils: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^bg-solid(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSolid({ color, appearance, solidShades, graySolid })}`],
        [/^bg-outline(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantOutline({ color, appearance, outline, grayOutline })}`],
        [/^bg-subtle(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSubtle({ color, appearance, subtle, graySubtle })}`],
        [/^bg-soft(-(\S+))?$/, ([, , color = 'gray']) => `${genVariantSoft({ color, appearance, soft, graySoft })}`],
        [/^bdr(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: getBorderColor, border: getBorderGray })}`],
        [/^bdr-x(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: getBorderColor, border: getBorderGray, prefix: "border-x" })}`],
        [/^bdr-y(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: getBorderColor, border: getBorderGray, prefix: "border-y" })}`],
        [/^bdr-t(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: getBorderColor, border: getBorderGray, prefix: "border-t" })}`],
        [/^bdr-b(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: getBorderColor, border: getBorderGray, prefix: "border-b" })}`],
        [/^bdr-r(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: getBorderColor, border: getBorderGray, prefix: "border-r" })}`],
        [/^bdr-l(-(\S+))?$/, ([, , color = 'gray']) => `${genOutline({ color, appearance, colorBorder: getBorderColor, border: getBorderGray, prefix: "border-l" })}`],
    ]

    return [
        utils,
        ...dynamicUtils
    ]

}


export { getGeneralShortcuts }