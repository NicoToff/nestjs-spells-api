export function sliceFn(fn: (...args: any) => string, max: number) {
  if (max < 1) throw new Error("max must be at least 1");
  return (...args: any) => fn(...args).slice(0, max);
}
