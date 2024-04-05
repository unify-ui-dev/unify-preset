import { Preset } from 'unocss'

import type { UnifyUIConfig } from './types'
import { getAllShortcut } from './shortcuts/'
import { getAllRules } from './rules'
import { getAllVariants } from './variants'
import { theme } from './ui-theme'



function unifyUI(config?: UnifyUIConfig): Preset {


    const appearance = config?.appearance || "both"



    const shortcuts = getAllShortcut({
        components: config?.components,
        sharedElementVariant: config?.sharedConfig?.element,
        appearance,
        baseUI: config?.globalElement,
        form: config?.sharedConfig?.form
    })

    const rules = getAllRules(appearance)
    const variants = getAllVariants()

    return {
        name: 'unify-preset',
        variants,
        shortcuts,
        rules,
        theme
    }
}

export { unifyUI, type UnifyUIConfig as unifyUIConfig }