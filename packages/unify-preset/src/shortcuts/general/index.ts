
import type { Appearance, BaseUI, SharedVariant } from "@/types"
import { genVariantSolid, genGratientText, genTextColor, genVariantWhiteBlack, genOutline } from "./../helpers"
import { helperDefaultValues } from "./../helpers"
import { isValidColor } from "@/utils/colors-utils"
import type { Shortcut } from "unocss"

const getGeneralShortcuts = ({ sharedConfig, uiConfig, globalElement }: { sharedConfig?: SharedVariant, globalElement?: BaseUI, uiConfig: { appearance: Appearance } }) => {
    const { appearance } = uiConfig
    const outline = sharedConfig?.outline || helperDefaultValues.defaultOutlineELement
    const colorBorder = globalElement?.borderColor || helperDefaultValues.bdrUI

    const globBorderSize = globalElement?.borderGray?.borderSize || helperDefaultValues.grayBdrUI.borderSize
    const borderGray = globalElement?.borderGray || helperDefaultValues.grayBdrUI


    const solidShades = sharedConfig?.solid || helperDefaultValues.defaultSolidShades
    const grayLight = globalElement?.grayBg?.grayLight || helperDefaultValues.bgSoligUI.grayLight
    const grayHigh = globalElement?.grayBg?.grayHigh || helperDefaultValues.bgSoligUI.grayHigh
    const grayHigher = globalElement?.grayBg?.grayHigher || helperDefaultValues.bgSoligUI.grayHigher
    const graySolid = sharedConfig?.solidGray || helperDefaultValues.defaultSolidGrayShades


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
        'd-flex-justify-center': "flex justify-center",
        'd-flex-justify-start': 'flex justify-start',
        'd-flex-justify-end': 'flex justify-end',
        'd-flex-between': 'flex justify-between',
        'd-flex-place-center': "flex justify-center items-center",
    }

    const colorBdr = { borderSize: outline.borderSize, light: colorBorder?.default?.light, dark: colorBorder?.default?.dark }
    const grayBdr = { borderSize: globBorderSize, light: borderGray.default?.light, dark: borderGray.default?.dark }
    const lightColorBdr = { borderSize: globBorderSize, light: colorBorder?.light?.light, dark: colorBorder?.light?.dark }
    const lightGrayBdr = { borderSize: globBorderSize, light: borderGray.light?.light, dark: borderGray.light?.dark }
    const highColorBdr = { borderSize: outline.borderSize, light: colorBorder?.high?.light, dark: colorBorder?.high?.light }
    const highGrayBdr = { borderSize: globBorderSize, light: borderGray.high?.light, dark: borderGray.high?.dark }
    const higherColorBdr = { borderSize: outline.borderSize, light: colorBorder?.higher?.light, dark: colorBorder?.higher?.light }
    const higherGrayBdr = { borderSize: globBorderSize, light: borderGray.higher?.light, dark: borderGray.higher?.dark }

    const dynamicUtils: Shortcut[] = [
        [/^bg-solid(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: graySolid })}`
        }],
        [/^bg-light-solid(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: { ...grayLight } })}`
        }],
        [/^bg-high-solid(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: { ...grayHigh } })}`
        }],
        [/^bg-higher-solid(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genVariantSolid({ color, appearance, colorShades: solidShades, grayShades: { ...grayHigher } })}`
        }],

        [/^bdr(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr })}`
        }, { autocomplete: ['bdr', 'bdr-$colors'] }],
        [/^bdr_x(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-x" })}`
        }, { autocomplete: ['bdr_x', 'bdr_x-$colors'] }],
        [/^bdr_y(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-y" })}`
        }, { autocomplete: ['bdr_y', 'bdr_y-$colors'] }],
        [/^bdr_t(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-t" })}`
        }, { autocomplete: ['bdr_t', 'bdr_t-$colors'] }],
        [/^bdr_b(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-b" })}`
        }, { autocomplete: ['bdr_b', 'bdr_b-$colors'] }],
        [/^bdr_r(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-r" })}`
        }, { autocomplete: ['bdr_r', 'bdr_r-$colors'] }],
        [/^bdr_l(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: colorBdr, border: grayBdr, prefix: "border-l" })}`
        }, { autocomplete: ['bdr_l', 'bdr_l-$colors'] }],

        [/^bdr_light(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr })}`
        }, { autocomplete: ['bdr_light', 'bdr_light-$colors'] }],
        [/^bdr_light_x(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-x" })}`
        }, { autocomplete: ['bdr_light_x', 'bdr_light_x-$colors'] }],
        [/^bdr_light_y(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-y" })}`
        }, { autocomplete: ['bdr_light_y', 'bdr_light_y-$colors'] }],
        [/^bdr_light_t(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-t" })}`
        }, { autocomplete: ['bdr_light_t', 'bdr_light_t-$colors'] }],
        [/^bdr_light_b(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-b" })}`
        }, { autocomplete: ['bdr_light_b', 'bdr_light_b-$colors'] }],
        [/^bdr_light_r(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-r" })}`
        }, { autocomplete: ['bdr_light_r', 'bdr_light_r-$colors'] }],
        [/^bdr_light_l(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: lightColorBdr, border: lightGrayBdr, prefix: "border-l" })}`
        }, { autocomplete: ['bdr_light_l', 'bdr_light_l-$colors'] }],

        [/^bdr_high(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr })}`
        }, { autocomplete: ['bdr_high', 'bdr_high-$colors'] }],
        [/^bdr_high_x(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-x" })}`
        }, { autocomplete: ['bdr_high_x', 'bdr_high_x-$colors'] }],
        [/^bdr_high_y(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-y" })}`
        }, { autocomplete: ['bdr_high_y', 'bdr_high_y-$colors'] }],
        [/^bdr_high_t(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-t" })}`
        }, { autocomplete: ['bdr_high_t', 'bdr_high_t-$colors'] }],
        [/^bdr_high_b(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-b" })}`
        }, { autocomplete: ['bdr_high', 'bdr_high-$colors'] }],
        [/^bdr_high_r(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-r" })}`
        }, { autocomplete: ['bdr_high_b', 'bdr_high_b-$colors'] }],
        [/^bdr_high_l(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: highColorBdr, border: highGrayBdr, prefix: "border-l" })}`
        }, { autocomplete: ['bdr_high_l', 'bdr_high_l-$colors'] }],

        [/^bdr_higher(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr })}`
        }, { autocomplete: ['bdr_higher', 'bdr_higher-$colors'] }],
        [/^bdr_higher_x(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-x" })}`
        }, { autocomplete: ['bdr_higher_x', 'bdr_higher_x-$colors'] }],
        [/^bdr_higher_y(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-y" })}`
        }, { autocomplete: ['bdr_higher_y', 'bdr_higher_y-$colors'] }],
        [/^bdr_higher_t(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-t" })}`
        }, { autocomplete: ['bdr_higher_t', 'bdr_higher_t-$colors'] }],
        [/^bdr_higher_b(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-b" })}`
        }, { autocomplete: ['bdr_higher_b', 'bdr_higher_b-$colors'] }],
        [/^bdr_higher_r(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-r" })}`
        }, { autocomplete: ['bdr_higher_r', 'bdr_higher_r-$colors'] }],
        [/^bdr_higher_l(-(\S+))?$/, ([, , color = 'gray'], { theme }) => {
            if (isValidColor(color, theme)) return `${genOutline({ color, appearance, colorBorder: higherColorBdr, border: higherGrayBdr, prefix: "border-l" })}`
        }, { autocomplete: ['bdr_higher_l', 'bdr_higher_l-$colors'] }],
    ]

    return [
        utils,
        ...dynamicUtils
    ]
}
export { getGeneralShortcuts }