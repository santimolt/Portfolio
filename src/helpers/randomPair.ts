import { getRandomColor } from "./getRandomColor";
import { hexToRgb } from "./hexToRgb";

export function getRandomPair(): [string, string] {
  let color1 = "";
  let color2 = "";

  do {
    color1 = getRandomColor();
    color2 = getRandomColor();
  } while (calculateContrast(color1, color2) < 8);

  return [color1, color2];
}

function calculateContrast(color1: string, color2: string): number {
  // Convert color1 and color2 to RGB values
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Calculate the relative luminance of color1 and color2
  const luminance1 = calculateRelativeLuminance(rgb1);
  const luminance2 = calculateRelativeLuminance(rgb2);

  // Calculate the contrast ratio
  const contrast =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05);

  return contrast;
}

function calculateRelativeLuminance(rgb: [number, number, number]): number {
  const [red, green, blue] = rgb.map((value) => {
    const sRGB = value / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}
