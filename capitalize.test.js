const capitalize = require("./capitalize");

test("first letter is capitalized", () => {
  expect(capitalize("cat")).toBe("Cat");
});

test("capital letter remains capitalized", () => {
  expect(capitalize("Lion")).toBe("Lion");
});

test("string with spaces capitalizes first letters", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("string with numbers does not capitalize numbers", () => {
  expect(capitalize("cats123")).toBe("Cats123");
});

test("empty string returns empty string", () => {
  expect(capitalize("")).toBe("");
});

test("string with punctuation capitalizes first letter", () => {
  expect(capitalize("i love pizza!")).toBe("I love pizza!");
});

test("string with symbols does not affect capitalization", () => {
  expect(capitalize("@#$%start")).toBe("@#$%Start");
});
