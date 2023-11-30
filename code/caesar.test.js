const caesar = require("./caesar");

test("shifts lowercase letters correctly", () => {
  expect(caesar("attack")).toBe("exxego");
});

test("shifts uppercase letters correctly", () => {
  expect(caesar("ABCD")).toBe("EFGH");
});

test("leaves spaces and punctuation untouched", () => {
  expect(caesar("A BC !")).toBe("E FG !");
});

test("wraps z to a", () => {
  expect(caesar("zebra")).toBe("difve");
});

test("wraps Z to A", () => {
  expect(caesar("WATCH")).toBe("AEXGL");
});
