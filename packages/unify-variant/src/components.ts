import { Variant } from "unocss";

export type ComponentVariantOptions = {
    /**
     * 
     */
    prefix?: string;
    /**
     * 
     */
    variants: Record<string, string>,
};

export const componentVariants = (options: ComponentVariantOptions): Variant => {
    const { prefix = '', variants } = options;

    const prefix_ = prefix !== '' ? `${prefix}-` : ''
    const keys = Object.keys(variants).join('|');

    function getValue(key: string): string | undefined {
        return variants[key];
    }

    return {
        //
        name: 'unify-components',
        match: (matcher: string) => {

            const regex = new RegExp(`^${prefix_}(${keys})[:-]`);
            const match = matcher.match(regex);

            if (!match) return matcher;
            const variant = match[1]
            const aliasPseudo = getValue(variant)

            return {
                matcher: matcher.slice(match[0].length),
                selector: (s: any) => `${s}${aliasPseudo}`,
            }
        },
    };
};