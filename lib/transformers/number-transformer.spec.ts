import { createNumberTransformer } from "./number-transformer";

describe("createNumberTransformer", () => {
  it("should be a function", () => {
    expect(typeof createNumberTransformer).toBe("function");
  });
  it("should return a function", () => {
    expect(typeof createNumberTransformer()).toBe("function");
  });
  it("should throw if value is not a number or string", () => {
    const transform = createNumberTransformer();
    expect(() => transform({})).toThrow();
    expect(() => transform([])).toThrow();
    expect(() => transform(true)).toThrow();
    expect(() => transform(6n)).toThrow();
    expect(() => transform(null)).toThrow();
    expect(() => transform(undefined)).toThrow();
  });
  it("should throw if value is a string and throwIfString is true", () => {
    const transform = createNumberTransformer({ throwIfNotNumber: true });
    expect(() => transform("6")).toThrow();
    expect(() => transform("6.5")).toThrow();
  });
  it("should throw for an empty string", () => {
    const transform = createNumberTransformer();
    expect(() => transform("")).toThrow();
  });
  it("shouldn't throw if value is a string and throwIfString is false", () => {
    const transform = createNumberTransformer({ throwIfNotNumber: false });
    expect(() => transform("6")).not.toThrow();
    expect(() => transform("6.5")).not.toThrow();
  });
  it("should throw if value is not within min and max", () => {
    const transform = createNumberTransformer({ min: 0, max: 10 });
    expect(() => transform(-1)).toThrow();
    expect(() => transform(11)).toThrow();
  });
  it("should transform to appropriate number", () => {
    const transform = createNumberTransformer();
    expect(transform("6")).toBe(6);
    expect(transform("6.5")).toBe(6.5);
  });
  it("should just return the same number if value is a number", () => {
    const transform = createNumberTransformer();
    expect(transform(6)).toBe(6);
    expect(transform(6.5)).toBe(6.5);
  });
  it("should throw if the value isn't an integer and requiredInt is true", () => {
    const transform = createNumberTransformer({ requireInt: true });
    expect(() => transform(6.5)).toThrow();
    expect(() => transform("6.5")).toThrow();
  });
  it("shouldn't throw if the value isn't an integer and requiredInt is false", () => {
    const transform = createNumberTransformer({ requireInt: false });
    expect(() => transform(6.5)).not.toThrow();
    expect(() => transform("6.5")).not.toThrow();
    const transform2 = createNumberTransformer();
    expect(() => transform2(6.5)).not.toThrow();
    expect(() => transform2("6.5")).not.toThrow();
  });
  it("should work with many arguments", () => {
    const transform = createNumberTransformer({
      min: -14,
      max: 666,
      requireInt: true,
      throwIfNotNumber: true,
    });
    expect(() => transform(6)).not.toThrow();
    expect(() => transform(6.5)).toThrow();
    expect(() => transform("6")).toThrow();
    expect(() => transform("6.5")).toThrow();
    expect(() => transform(667)).toThrow();
    expect(() => transform(-1)).not.toThrow();
  });
});
