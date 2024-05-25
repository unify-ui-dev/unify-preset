import type { Variant } from "unocss";

export type DataStateVariantOptions = {
    prefix?: string;
    variants: string;
    selector: string;
    isAttrBoolean?: boolean;
};

export const dataStateVariants = (options: DataStateVariantOptions): Variant => {
    const {
        prefix = 'fx',
        variants,
        selector,
        isAttrBoolean,
    } = options;

    return {
        name: 'state-variant',
        match: (matcher: string) => {
            const regex = new RegExp(`^(peer-|group-|where-)?${prefix}(-not)?-(${variants})[:-]`);
            const match = matcher.match(regex);

            if (!match) return matcher;

            const attrGen = !isAttrBoolean
                ? `[${selector}~='${match[3]}']`
                : `[${selector}-${match[3]}]`;

            return {
                matcher: matcher.slice(match[0].length),
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                selector: (s: any) => {
                    const beforePrefixSelector = match[1] ? `${match[1]}` : '';
                    const preSelector = beforePrefixSelector === "peer-" ?
                        `.peer${attrGen} ~` : beforePrefixSelector === "group-" ? `.group${attrGen} ` : ""
                    return (match[2] === '-not')
                        ? (
                            beforePrefixSelector === "where-" ? `:where([${selector}]:not(${attrGen})) ${s}` :
                                (beforePrefixSelector === "peer-" ?
                                    `.peer:not(${attrGen}) ~ ${s}` :
                                    beforePrefixSelector === "group-" ?
                                        `.group:not(${attrGen}) ${s}` : `${s}`)
                        )
                        : (
                            beforePrefixSelector === "where-" ? `:where(${attrGen}) ${s}` :
                                `${preSelector}${s}${preSelector !== "" ? "" : `${attrGen}`}`
                        );
                },
            };
        },
        autocomplete: [`${prefix}-(${variants})`]
    };
};