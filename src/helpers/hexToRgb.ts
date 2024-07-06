export function hexToRgb(hex: string): [number, number, number] {
  // Remove the '#' character from the hex color
  const hexWithoutHash = hex.replace("#", "");

  // Split the hex color into red, green, and blue components
  const red = parseInt(hexWithoutHash.substr(0, 2), 16);
  const green = parseInt(hexWithoutHash.substr(2, 2), 16);
  const blue = parseInt(hexWithoutHash.substr(4, 2), 16);

  return [red, green, blue];
}
