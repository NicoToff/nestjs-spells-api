export const arrayify = <T>(v: T | T[]) => (Array.isArray(v) ? v : [v]);
