import { createBooleanTransformer } from "./boolean-transformer";

describe("createBooleanTransformer", () => {
  it("should be a function", () => {
    expect(typeof createBooleanTransformer).toBe("function");
  });
  it("should return a function", () => {
    expect(typeof createBooleanTransformer()).toBe("function");
  });
  it("should throw if value is not a boolean or string", () => {
    const transform = createBooleanTransformer();
    expect(() => transform({})).toThrow();
    expect(() => transform([])).toThrow();
    expect(() => transform(6)).toThrow();
    expect(() => transform(6n)).toThrow();
    expect(() => transform(null)).toThrow();
    expect(() => transform(undefined)).toThrow();
  });
  it("should throw if value is a string and throwIfString is true", () => {
    const transform = createBooleanTransformer({ throwIfNotBoolean: true });
    expect(() => transform("true")).toThrow();
    expect(() => transform("False")).toThrow();
  });
  it("shouldn't throw if value is a string and throwIfString is false", () => {
    const transform = createBooleanTransformer({ throwIfNotBoolean: false });
    expect(() => transform("true")).not.toThrow();
    expect(() => transform("False")).not.toThrow();
    expect(() => transform("True")).not.toThrow();
    expect(() => transform("FalsE")).not.toThrow();
    expect(() => transform("TrUe")).not.toThrow();
  });
  it("should be strict on case if acceptOnlyLowercase is true", () => {
    const transform = createBooleanTransformer({ acceptOnlyLowercase: true });
    expect(() => transform("true")).not.toThrow();
    expect(() => transform("false")).not.toThrow();
    expect(() => transform("False")).toThrow();
    expect(() => transform("True")).toThrow();
    expect(() => transform("TRUE")).toThrow();
    expect(() => transform("FALSE")).toThrow();
  });
  it("should throw if string value is not 'true' or 'false'", () => {
    const transform = createBooleanTransformer();
    expect(() => transform("I'm true")).toThrow();
    expect(() => transform("lorem")).toThrow();
    expect(() => transform("falsey")).toThrow();
  });
  it("should transform to appropriate boolean", () => {
    const transform = createBooleanTransformer();
    expect(transform("true")).toBe(true);
    expect(transform("false")).toBe(false);
  });
  it("should just return the same boolean if value is a boolean", () => {
    const transform = createBooleanTransformer();
    expect(transform(true)).toBe(true);
    expect(transform(false)).toBe(false);
  });
  it("should work with many arguments", () => {
    const validate = createBooleanTransformer({
      acceptOnlyLowercase: true,
      throwIfNotBoolean: true,
    });
    expect(() => validate(true)).not.toThrow();
    expect(() => validate(false)).not.toThrow();
    expect(() => validate("true")).toThrow();
    expect(() => validate("false")).toThrow();
    expect(() => validate("True")).toThrow();
    expect(() => validate("False")).toThrow();
    expect(() => validate("TRUE")).toThrow();
    expect(() => validate("FALSE")).toThrow();
  });
});
