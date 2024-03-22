export const getConfigValue = (value: number | string | undefined) => {
    return typeof value === "number" ? value : typeof value === "string" ? `[${value}]` : ""
}