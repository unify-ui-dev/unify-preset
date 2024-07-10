export const genBtnVariantSolidBase = () => {
    return `
        bg-[--btn-solid-color] hover-[--btn-solid-color:--btn-solid-color-hover] 
        active-[--btn-solid-color:--btn-solid-color-press] 
        focus-visible-outline-[--btn-solid-color-hover]
        [background-image:radial-gradient(farthest-corner_at_50%_-50%,_rgba(255,_255,_255,_.1)_0%,_transparent_100%)]
        [box-shadow:inset_0px_2px_0_var(--btn-solid-top-shadow),_inset_0px_-2px_0_var(--btn-solid-bottom-shadow)]
        
    `;
};

export const genBtnOutlineBase = () => {
    return `
       hover-bg-[--btn-outline-color-hover]/10 
       border-[--btn-outline-color] 
       hover-border-[--btn-outline-color-hover] 
       text-[--btn-outline-text-color] 
       hover-text-[--btn-outline-text-color-hover] focus-visible-outline-[--btn-outline-color-hover] 
    `
}

export const genBtnSoftBase = ({ isGhost }: { isGhost: boolean }) => {
    return `
    ${isGhost ? 'bg-transparent' : 
        'bg-[--btn-soft-bg-color]'
    }
    hover-bg-[--btn-soft-bg-color-hover]
    active-bg-[--btn-soft-bg-color-press]
    text-[--btn-soft-text-color] 
    focus-visible-outline-[--btn-soft-bg-color-hover]`
}

export const genBtnGradientBase = () => {
    return `
    bg-gradient-to-b b active-opacity-90
    focus-b-transparent
    b-[--btn-gradient-border-color]
    from-[--btn-gradient-color-from]
    to-[--btn-gradient-color-to]
    hover-from-[--btn-gradient-color-from]
    hover-to-[--btn-gradient-color-to]
    focus-visible-outline-[--btn-gradient-color-from]
    `
}