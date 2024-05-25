
import type { Rule } from 'unocss'
import type { Theme } from '@unocss/preset-uno'


export const bgGradientRules = () => {

    const rules = [
        [
            'ui-bg-radial-1', {
                background: 'radial-gradient(125% 125% at 50% 10%,var(--unify-ui-radial-bg) 40%,var(--unify-ui-radial-color) 100%)'
            },
        ],
        [
            'ui-grid-bg', {
                'background-image': 'linear-gradient(to right,var(--unify-ui-line-color) 1px,transparent 1px),linear-gradient(to bottom,var(--unify-ui-line-color) 1px,transparent 1px)',
                'background-size': 'var(--unify-ui-grid-width) var(--unify-ui-grid-height)'
            }
        ],
        [
            /^ui-grid-w-(xs|sm|md|lg|xl|2xl)$/,
            ([, d]) => ({ '--unify-ui-grid-width': '' }),
            { autocomplete: 'ui-grid-w-(xs|sm|md|lg|xl|2xl)' }
        ],
        [
            /^ui-grid-h-(xs|sm|md|lg|xl|2xl)$/,
            ([, d]) => ({ '--unify-ui-grid-height': '' }),
            { autocomplete: 'ui-grid-h-(xs|sm|md|lg|xl|2xl)' }
        ],
        [
            /^ui-grid-size-(xs|sm|md|lg|xl|2xl)$/,
            ([, d]) => ({
                '--unify-ui-grid-width': '',
                '--unify-ui-grid-height': ''
            }),
            { autocomplete: 'ui-grid-size-(xs|sm|md|lg|xl|2xl)' }
        ],
        [
            /^ui-grid-line-(.*)$/,
            ([, d]) => ({
                '--unify-ui-line-color': '',
            }),
            { autocomplete: 'ui-grid-line-$colors' }
        ],
        [
            /^ui-radial-bg-(.*)$/,
            ([, d]) => ({
                '--unify-ui-radial-bg': '',
            }),
            { autocomplete: 'ui-grid-line-$colors' }
        ],
        [
            'ui-radial-grid-mask', {
                'background-image': 'linear-gradient(to right,var((--unify-ui-line-color)) 1px,transparent 1px),linear-gradient(to bottom,var((--unify-ui-line-color)) 1px,transparent 1px)',
                'background-size': 'var(--unify-ui-grid-width) var(--unify-ui-grid-height)',
                'mask-image': 'radial-gradient(ellipse 80% 50% at 50% 0%,#000 70%,transparent 110%)',
            }
        ], [
            'ui-radial-mask-elipse', {
                'background-image': 'radial-gradient(#e5e7eb 1px,transparent 1px)',
                'background-size': 'var(--unify-ui-grid-width) var(--unify-ui-grid-height)',
                'mask-image': 'radial-gradient(ellipse 50% 50% at 50% 50%,#000 70%,transparent 100%)',
            }
        ], [
            'ui-radial-bg-radial-2', {
                'background-image': 'radial-gradient(circle farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))',

            }
        ], [
            'ui-radial-gradient', {
                'background-image': 'radial-gradient(100% 50% at 50% 0%,rgba(0,163,255,0.13) 0,rgba(0,163,255,0) 50%,rgba(0,163,255,0) 100%)'
            }
        ], [
            'ui-radial-elipse', {
                'background-image': 'radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))'
            }
        ]

    ] as Rule<Theme>[]

    return rules
}