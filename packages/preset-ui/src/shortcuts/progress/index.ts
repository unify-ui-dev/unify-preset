const getProgressBarShortcuts = () => {
	const progress = {
		"progress-bar": `appearance-none w-full h-[--progressbar-height] 
                w-progress-bar:w-full
                w-progress-bar:rounded-[--progress-bar-radius] 
                w-progress-bar:bg-[--progress-bar-bg] w-progress-value:bg-current 
                w-progress-value:rounded-[--progress-bar-radius] 
                w-progress-value:ease-linear w-progress-value:transition-all moz-progress-bar`,
		"progress-bar-indeterminate": ` indeterminate:relative 
                        indeterminate:z-10
                        indeterminate:w-full
                        indeterminate:overflow-hidden
                        indeterminate:after:rounded-full
                        indeterminate:after:absolute
                        indeterminate:after:inset-y-0 
                        indeterminate:after:flex
                        indeterminate:after:w-52 
                        indeterminate:after:bg-red600
                         w-indeterminate-p-value:w-full
                        w-indeterminate-p-value:h-full
        `,

		"progress-bar-indeterminate-marquee": "indeterminate:after:animate-marquee",
		"progress-bar-indeterminate-carousel":
			"indeterminate:after:animate-carousel",
		"progress-bar-indeterminate-swing": "indeterminate:after:animate-swing",
	};

	return [progress];
};

export { getProgressBarShortcuts };
