import type { Theme } from "@unocss/preset-uno";

export const theme: Theme = {
	animation: {
		keyframes: {
			indeterminate: "{0%{ left: -100%; } 100%{ left: 100%; }}",
			carousel: "{0%{ left: 0%;} 100%{ left: 100%;}}",
			"carousel-inverse": "{0% { left: 100%;} 100%{ left: 0%;}}",
			marquee: "{ 0%{ left: 0%;} 50%{ left: 100%;} 100%{ left: 0%;}}",
			swing: "{0% { left: 0%;} 50%{ left: 105%;} 100%{left: 0%;}}",
			"background-shine":
				"{ from{ background-position: 0 0} to{ background-position: -200% 0;}}",

			// VueRadix animation
			'vr-accordion-down':
				"{from{ height: 0; } to{ height: var(--radix-accordion-content-height); }}",
			'vr-accordion-up':
				"{from{ height: var(--radix-accordion-content-height); } to { height: 0; }}",
			'vr-collapsible-down':
				"{from { height: 0; } to: { height: var(--radix-collapsible-content-height); }}",
			'vr-collapsible-up':
				"{from { height: var(--radix-collapsible-content-height); } to{ height: 0; }}",

			// Flexilla
			'fx-accordion-down':
				"{from{ height: 0; } to{ height: var(--fx-accordion-content-height); }}",
			'fx-accordion-up':
				"{from{ height: var(--fx-accordion-content-height); } to { height: 0; }}",
			'fx-collapsible-down':
				"{from { height: 0; } to: { height: var(--fx-collapsible-content-height); }}",
			'fx-collapsible-up':
				"{from { height: var(--fx-collapsible-content-height); } to{ height: 0; }}"
		},
		durations: {
			indeterminate: "5s",
			marquee: "5s",
			carousel: "5s",
			"carousel-inverse": "5s",
			swing: "5s",
			"background-shine": "2s",
			"vr-accordion-down": "0.2s",
			"vr-accordion-up": "0.2s",
			"vr-collapsible-down": "0.2s",
			"vr-collapsible-up": "0.2s",
			"fx-accordion-down": "0.2s",
			"fx-accordion-up": "0.2s",
			"fx-collapsible-down": "0.2s",
			"fx-collapsible-up": "0.2s"
		},
		timingFns: {
			"background-shine": "linear",
			"vr-accordion-down": "ease-in-out",
			"vr-accordion-up": "ease-in-out",
			"vr-collapsible-down": "ease-in-out",
			"vr-collapsible-up": "ease-in-out",
			"fx-accordion-down": "ease-in-out",
			"fx-accordion-up": "ease-in-out",
			"fx-collapsible-down": "ease-in-out",
			"fx-collapsible-up": "ease-in-out"
		},
		counts: {
			indeterminate: "infinite",
			marquee: "infinite",
			carousel: "infinite",
			"carousel-inverse": "infinite",
			swing: "infinite",
			"background-shine": "infinite",
		},
	},
};
