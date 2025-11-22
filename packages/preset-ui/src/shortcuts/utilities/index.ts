import type { TextVariantBase } from "@/types";
import { helperDefaultValues } from "../helpers";
import type { Shortcut } from "unocss";


const getGeneralShortcuts = () => {
	const textTypo = helperDefaultValues.textTypo
	const utils: Record<string, string> = {
		
		"ui-bg-clip-text": "text-transparent bg-clip-text",
		"ui-text-transparent": "text-transparent bg-clip-text",

		//flex
		"d-flex-justify-center": "flex justify-center",
		"d-flex-justify-start": "flex justify-start",
		"d-flex-justify-end": "flex justify-end",
		"d-flex-items-start": "flex items-start",
		"d-flex-items-center": "flex items-center",
		"d-flex-items-end": "flex items-end",
		"d-flex-between": "flex justify-between",
		"d-flex-place-center": "flex justify-center items-center",

		// pseudo before and after 
		"before-empty": "before-absolute before-content-empty",
		"after-empty": "after-absolute after-content-empty",
		"before-after-empty": "before-absolute before-content-empty after-absolute after-content-empty",
		"before-0-x": "before-empty before-inset-x-0",
		"before-0-y": "before-empty before-inset-y-0",
		'before-0': "before-empty before-inset-0",
		"after-0-x": "after-empty after-inset-x-0",
		"after-0-y": "after-empty after-inset-y-0",
		'after-0': "after-empty after-inset-0",
		"before-after-0-x": "before-empty before-inset-x-0 after-empty inset-x-0",
		"before-after-0-y": "before-empty before-inset-y-0 after-empty inset-y-0",
		'before-after-0': "before-empty after-empty before-inset-0 after-inset-0",
		"dropdown-content":"grid max-h-[inherit] grid-cols-[auto_1fr] overflow-y-auto overscroll-contain outline-hidden [:is(&>*)]:[&:is([role=group]+[role=group])]:mt-4 [:is(&>*)]:[&:is([role=group]+[role=separator])]:mt-1",
		"dropdown-item-base":"rd-[calc(var(--dropdown-radius)-var(--dropdown-padding))] outline-none focus:outline rounded-md px-3.5 py-1.5 ease-linear duration-200 transition-colors",
		"dropdown-item-grid":"col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
		"dropdown-item-slot":"[&:not(*:has(*:is([slot=description])))]:items-center has-[[slot=description]]:[:is(&*)]:data-[slot=check-indicator]:mt-[1.5px] [:is(&*)]:data-[slot=avatar]:*:mr-1.5 [:is(&*)]:data-[slot=avatar]:*:size-6 [:is(&*)]:data-[slot=avatar]:mr-(--mr-icon) [:is(&*)]:data-[slot=avatar]:size-6 sm:[:is(&*)]:data-[slot=avatar]:*:size-5 sm:[:is(&*)]:data-[slot=avatar]:size-5",
		"dropdown-item-icon":"*:slot-icon:mr-[--mr-icon] [:is(&*)]:slot-icon:size-5 [:is(&*)]:slot-icon:shrink-0 sm:[:is(&*)]:slot-icon:size-4",
		"dropdown-item-label":"[&>[slot=label]+[data-slot=icon]]:absolute [&>[slot=label]+[data-slot=icon]]:right-1",
	};


	const dynamicUtils: Shortcut[] = [
		[
			/^(txt|ui-text)-(xs-body|x-body|body|x-title|title|l-title)$/,
			([, size]) => {
				if (["xs-body", "x-body", "body", "x-title", "title", "l-title"].includes(size)) {
					return `${textTypo[size as TextVariantBase]}`
				}
			},
			{ autocomplete: ["(txt|ui-text)-(xs-body|x-body|body|x-title|title|l-title)"] },
		],
	];

	return [utils, ...dynamicUtils];
};
export { getGeneralShortcuts };
