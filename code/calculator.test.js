const calculator = require("./calculator");

describe("calculator", () => {
  test("adds two positive numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("adds two negative numbers", () => {
    expect(calculator.add(-3, -5)).toBe(-8);
  });

  test("adds positive and negative numbers", () => {
    expect(calculator.add(7, -2)).toBe(5);
  });

  test("subtracts two positive numbers", () => {
    expect(calculator.sub(8, 3)).toBe(5);
  });

  test("subtracts two negative numbers", () => {
    expect(calculator.sub(-10, -15)).toBe(5);
  });

  test("subtracts positive from negative", () => {
    expect(calculator.sub(-10, 5)).toBe(-15);
  });

  test("multiplies two numbers", () => {
    expect(calculator.mul(4, 2)).toBe(8);
  });

  test("multiples by zero gives zero", () => {
    expect(calculator.mul(5, 0)).toBe(0);
  });

  test("divides two numbers", () => {
    expect(calculator.div(8, 4)).toBe(2);
  });

  test("divides by zero gives infinity", () => {
    expect(calculator.div(5, 0)).toBe(Infinity);
  });
});
