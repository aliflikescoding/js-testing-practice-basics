const analyzeArray = require("./array");

describe("analyzeArray", () => {
  test("returns correct analysis for basic array", () => {
    const arr = [1, 2, 3];
    expect(analyzeArray(arr)).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
  });

  test("handles empty array", () => {
    expect(analyzeArray([])).toBe("Array is empty");
  });

  test("handles array with one element", () => {
    const arr = [5];
    expect(analyzeArray(arr)).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("works with negative numbers", () => {
    const arr = [-3, -1, -2];
    expect(analyzeArray(arr)).toEqual({
      average: -2,
      min: -3,
      max: -1,
      length: 3,
    });
  });
});
