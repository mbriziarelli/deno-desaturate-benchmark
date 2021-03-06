export function desaturateAverage(r: number, g: number, b: number) {
  return (r + g + b) / 3;
}

export function desaturateBT601(r: number, g: number, b: number) {
  return r * 0.299 + g * 0.587 + b * 0.114;
}

export function desaturateLuma(r: number, g: number, b: number) {
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}

export function desaturateMinMax(r: number, g: number, b: number) {
  return (Math.min(r, g, b) + Math.max(r, g, b)) / 2;
}
