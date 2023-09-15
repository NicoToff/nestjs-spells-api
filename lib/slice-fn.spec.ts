import { sliceFn } from "./slice-fn";

describe("sliceFn", () => {
  it("should return a function", () => {
    const fn = sliceFn(() => "", 1);
    expect(typeof fn).toBe("function");
  });

  it("should return a function that returns a string", () => {
    const fn = sliceFn(() => "", 1);
    expect(typeof fn()).toBe("string");
  });

  it("should return a function that returns a string of the given length", () => {
    const fn = sliceFn(() => "1234567890", 5);
    expect(fn()).toBe("12345");
    expect(fn().length).toBe(5);
  });

  it("should accept a function with arguments", () => {
    const concat = (a: number, b: number) => `${a}${b}`;
    const fn = sliceFn(concat, 5);
    expect(fn(1, 2)).toBe("12");
  });

  it("should accept a function with arguments and still slice", () => {
    const fn = sliceFn((a: number, b: number) => `${a}${b}${a}${b}${a}${b}`, 5);
    expect(fn(1, 2)).toBe("12121");
  });

  it("should throw if max is less than 1", () => {
    expect(() => sliceFn(() => "", 0)).toThrow();
    expect(() => sliceFn(() => "", -4)).toThrow();
  });
});
