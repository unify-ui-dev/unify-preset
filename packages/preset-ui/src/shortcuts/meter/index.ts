const getMeterShortcuts = () => {
	const meters = {
		meter: `block h-[--metter-bar-height] w-full moz-meter-bar:moz-meter overflow-y-hidden rounded-[--metter-bar-radius] bg-none
         metter-bar:h-[--metter-bar-height] metter-bar:border-none metter-bar:bg-transparent metter-bar:bg-none 
         meter-inner-el:relative meter-inner-el:block meter-optimum-val:h-[--metter-bar-height] 
         meter-optimum-val:rounded-[--metter-bar-radius] meter-optimum-val:border-none meter-optimum-val:bg-current 
         meter-optimum-val:bg-none meter-optimum-val:transition-all`,
	};
	return [meters];
};

export { getMeterShortcuts };
