const getAspectRatioShortcuts = () => {
	const aspectRatio = {
		"aspect-ultrawide": "aspect-[21/9]",
		"aspect-standard-tv": "aspect-[4/3]",
		"aspect-35mm-film": "aspect-[3/2]",
	};
	return [aspectRatio];
};

export { getAspectRatioShortcuts };
