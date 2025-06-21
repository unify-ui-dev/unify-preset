import { getRealOpacityValue } from "@/shortcuts/shortcut_helper";
import { uiColorFormat } from "@/types";
import { ColorShade } from "@/types/ui-t";


export const getColorFormat = (color: string, format_?: uiColorFormat, defaultVar_?: string) => {
	const defaultVar = defaultVar_ && defaultVar_ !== '' ? `,${defaultVar_}` : '';
	const format = format_ || "hsl";
	const val_out = format === "rgb" ? `rgb(var(${color}${defaultVar}))` : format === "hex" ? `var(${color}${defaultVar})` : format === "oklch" ? `oklch(var(${color}${defaultVar}))` : format === "hsl" ? `hsl(var(${color}))` : `var(${color})`;

	const isWhite = color === 'white'
	const whiteVal = format === "rgb" ? `rgb(255,_255,_255)` : format === "hex" ? `#ffffff` : format === "oklch" ? `oklch()` : format === "hsl" ? `hsl(0_0%_100%)` : `#ffffff`;
	return isWhite ? whiteVal : val_out
}

export const getColorFormatWithOpacity = (
  color: string,
  opacity: number,
  format_?: uiColorFormat,
  defaultVar_?: string
) => {
  const format = format_ || "hsl";
  const realOpacity = getRealOpacityValue(opacity);
  const defaultVar = defaultVar_ && defaultVar_ !== '' ? `,${defaultVar_}` : '';

  if (color === 'white') {
    const colorFormats = {
      rgb: `rgb(255,_255,_255/${realOpacity})`,
      hex: '',
      oklch: `oklch(1_0_0/${realOpacity})`,
      hsl: `hsl(0_0%_100%/${realOpacity})`,
      default: '#ffffff'
    };
    return colorFormats[format as keyof typeof colorFormats] || colorFormats.default;
  }

  const colorFormats = {
    rgb: `rgb(var(${color}${defaultVar})/${realOpacity})`,
    hex: `var(${color}${defaultVar})`,
    oklch: `oklch(var(${color}${defaultVar})/${realOpacity})`,
    hsl: `hsl(var(${color})/${realOpacity})`,
    default: `var(${color}/${opacity})`
  };

  return colorFormats[format as keyof typeof colorFormats] || colorFormats.default;
};


export const getVarName = (color: string, shade?: ColorShade | string, prefix: string = 'c') => {
	const shadeList = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "white"]
	const colorName = color === 'white' || color === 'neutral' ? 'gray' : color;
	const prefixStr = prefix === 'none' || prefix === '' ? '' : `${prefix}-`;

	if (shade === 'white') {
		return 'white';
	}
	if (!shadeList.includes(shade as string)) {
		return `--${prefixStr}${shadeList[0]}`;
	}

	return `--${prefixStr}${colorName}-${shade}`;
};
