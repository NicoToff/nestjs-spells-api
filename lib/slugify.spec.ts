import { slugify } from "./slugify";

describe("slugify", () => {
  const testData = [
    { input: "Dungeons & Dragons", expected: "dungeons--dragons" },
    { input: "Some@Card!Name", expected: "somecardname" },
    {
      input: "  Leading Trailing Spaces  ",
      expected: "leading-trailing-spaces",
    },
    { input: "-LeadingHyphen", expected: "leadinghyphen" },
    { input: "UPPER CASE", expected: "upper-case" },
    { input: "mixed Case NaMe", expected: "mixed-case-name" },
    { input: "123 Numbers 456", expected: "123-numbers-456" },
    { input: "Special $#! Characters", expected: "special--characters" },
    {
      input: "   Leading and Trailing Spaces   ",
      expected: "leading-and-trailing-spaces",
    },
    { input: "Spaces_and_Underscores", expected: "spaces-and-underscores" },
  ];

  testData.forEach(({ input, expected }) => {
    it(`should slugify "${input}" to "${expected}"`, () => {
      expect(slugify(input)).toBe(expected);
    });
  });
});
