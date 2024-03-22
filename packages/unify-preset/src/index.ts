import { Preset } from 'unocss'
import { presetVariants } from '@unifyui/unify-variant'
import type { unifyUI } from './types'
import { getAllShortcut } from './shortcuts/'

export default function unifyUI(config?: unifyUI): Preset {
    
    const appearance = config?.appearance || "both"
    const paletteProvider = config?.colorModeProvider || "default"

    const shortcuts = getAllShortcut({
        components: config?.components,
        sharedElement : config?.sharedConfig?.element,
        appearance,
        colorPaletteProvider: paletteProvider
    })

    return {
        name: 'unify-preset',
        variants: [
            presetVariants({
                prefix: config?.prefixState
            })
        ],
        shortcuts,
        rules: [
            [
                'u-fx-popper', {
                    position: "absolute",
                    transform: "translate(var(--fx-popper-placement-x), var(--fx-popper-placement-y))",
                    left: "0",
                    top: "0"
                }
            ]
        ]
    }
}