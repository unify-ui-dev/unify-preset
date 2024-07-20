const getRangeSlideShortcuts = () => {
	const ranges = {
		"moz-range-slide-thumb":
			"relative z-3 appearance-none rounded-full ring-2 ring-current size-[--range-slide-thumb-size] mt-[calc(var(--range-mt)*-1)] border-0 bg-[--range-thumb-bg]",
		"moz-range-slide-track":
			"group-disabled:bg-opacity-50 bg-[--range-track-bg] h-[--range-track-height] rounded-lg",
		'form-input-range': `w-full absolute appearance-none bg-transparent
                     disabled:cursor-not-allowed disabled:opacity-50
                     range-slider-thumb:relative range-slider-thumb:ring-2 
                     range-slider-thumb:ring-current 
                     range-slider-thumb:bg-[--range-thumb-bg] 
                     range-slider-thumb:size-[--range-slide-thumb-size] 
                     range-slider-thumb:mt-[calc(var(--range-mt)*-1)]  
                     range-slider-thumb:appearance-none range-slider-thumb:rounded-full
                     range-slider-thumb:relative
                     range-slider-thumb:z-3
                     slider-runnable-track:text-current
                     slider-runnable-track:group-disabled:bg-opacity-60
                     slider-runnable-track:rounded-lg  
                     slider-runnable-track:bg-[--range-track-bg]  
                     slider-runnable-track:h-[--range-track-height]
                     moz-range-thumb:moz-range-slide-thumb 
                     moz-range-track:moz-range-slide-track outline-0 outline-transparent focus-visible-outline focus-visible:outline-2 focus-visible:outline-current outline-transparent 
                     focus-visible:outline-offset-2`,
	};
	return [ranges];
};
export { getRangeSlideShortcuts };
