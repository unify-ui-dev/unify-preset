
import type { appearance, colorPaletteProvider, sharedElement } from "../types"
import { genVariantSolid, genVariantOutline, genVariantSubtle, genVariantSoft, genVariantOutlineGray, genVariantOutlineNeutral, genVariantSoftGray, genVariantSoftNeutral, genVariantSolidGray, genVariantSolidNeutral, genVariantSubtleGray, genVariantSubtleNeutral } from "./helpers"
import { defaultOutlineELement, defaultOutlineGrayELement, defaultSolidGrayShades, defaultSolidShades, defaultSubtle, defaultSubtleGray, defaultSubtleNeutral, generalSoft, generalSoftGray, generalSoftNeutral, getOutlineELement } from "./helpers/defaultValue"

const getGeneralShortcuts = ({sharedConfig, uiConfig}:{sharedConfig?: sharedElement, uiConfig: { appearance: appearance, colorPaletteProvider: colorPaletteProvider }}) => {
    const {appearance, colorPaletteProvider: colorMode} = uiConfig
    const soft = sharedConfig?.soft || generalSoft
    const subtle = sharedConfig?.subtle || defaultSubtle
    const outline = sharedConfig?.outline || defaultOutlineELement
    const solidShades = sharedConfig?.solid || defaultSolidShades

    const softGray = sharedConfig?.softGray || generalSoftGray
    const solidGray = sharedConfig?.solidGray || defaultSolidGrayShades
    const outlineGray = sharedConfig?.outlineGray || defaultOutlineGrayELement
    const subtleGray = sharedConfig?.subtleGray || defaultSubtleGray

    const softNeutral= sharedConfig?.softNeutral || generalSoftNeutral
    const subtleNeutral = sharedConfig?.subtleNeutral || defaultSubtleNeutral

    const utils: Record<string, string> = {
        // bg
        'bg-solid-gray': `${genVariantSolidGray({ appearance, shades: solidGray })}`,
        'bg-soft-gray': `${genVariantSoftGray({ appearance, soft: softGray })}`,
        'bg-solid-neutral': `${genVariantSolidNeutral({ appearance })}`,
        'bg-soft-neutral': `${genVariantSoftNeutral({ appearance, soft: softNeutral })}`,
        'bg-outline-gray': `${genVariantOutlineGray({ appearance, outline: outlineGray })}`,
        'bg-outline-neutral': `${genVariantOutlineNeutral({ appearance, outline: getOutlineELement })}`,
        'bg-subtle-gray': `${genVariantSubtleGray({ appearance, subtle: subtleGray })}`,
        'bg-subtle-neutral': `${genVariantSubtleNeutral({ appearance, subtle: subtleNeutral })}`
    }

    const dynamicUtils: [RegExp, (params: RegExpExecArray) => string][] = [
        [/^bg-solid(-(\S+))?$/, ([, , color = 'primary']) => `${genVariantSolid({ color, appearance, colorPaletteProvider: colorMode, solidShades })}`],
        [/^bg-outline(-(\S+))?$/, ([, , color = 'primary']) => `${genVariantOutline({ color, appearance, colorPaletteProvider: colorMode, outline })}`],
        [/^bg-subtle(-(\S+))?$/, ([, , color = 'primary']) => `${genVariantSubtle({ color, appearance, colorPaletteProvider: colorMode, subtle })}`],
        [/^bg-soft(-(\S+))?$/, ([, , color = 'primary']) => `${genVariantSoft({ color, appearance, colorPaletteProvider: colorMode, soft })}`],
    ]

    return [
        utils,
        ...dynamicUtils
    ]

}


export { getGeneralShortcuts }