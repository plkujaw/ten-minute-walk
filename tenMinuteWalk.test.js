import tenMinuteWalk from "./tenMinuteWalk.js";

// valid directions - the sum of opposite directions must be equal and total number of directions must be 10; ie sum of "w" must equal sum of "e", the same for "n" and "s" and total of them must be 10

test("should return true for the valid directions", () => {
  expect(
    tenMinuteWalk(["w", "s", "e", "e", "n", "n", "e", "s", "w", "w"])
  ).toBe(true); // 3 "w" + 3 "e" + 2 "s" + 2 "n" = 10
});

test("should return false for the invalid directions", () => {
  expect(
    tenMinuteWalk(["w", "s", "e", "n", "n", "e", "s", "w", "w", "w"])
  ).toBe(false);
  expect(
    tenMinuteWalk(["w", "s", "e", "s", "s", "e", "s", "w", "n", "n"])
  ).toBe(false);
  expect(tenMinuteWalk(["w", "s"])).toBe(false);
  expect(tenMinuteWalk(["w", "s", "e", "n"])).toBe(false);
});
