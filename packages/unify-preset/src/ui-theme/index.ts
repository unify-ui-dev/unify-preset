import type { Theme } from '@unocss/preset-uno'



export const theme: Theme = {
    animation: {

        keyframes: {
            indeterminate: '{0%{ left: -100%; } 100%{ left: 100%; }}',
            carousel: '{0%{ left: 0%;} 100%{ left: 100%;}}',
            'carousel-inverse': '{0% { left: 100%;} 100%{ left: 0%;}}',
            marquee: "{ 0%{ left: 0%;} 50%{ left: 100%;} 100%{ left: 0%;}}",
            swing: "{0% { left: 0%;} 50%{ left: 105%;} 100%{left: 0%;}}",
            'background-shine': "{ from{ background-position: 0 0} to{ background-position: -200% 0;}}",
        },
        durations: {
            indeterminate: '5s',
            marquee: '5s',
            carousel: '5s',
            'carousel-inverse': '5s',
            swing: '5s',
            'background-shine': '2s',
        },
        timingFns: {
            'background-shine': 'linear'
        },
        counts: {
            indeterminate: 'infinite',
            marquee: 'infinite',
            carousel: 'infinite',
            'carousel-inverse': 'infinite',
            swing: 'infinite',
            'background-shine': 'infinite',
        },


    },
} 