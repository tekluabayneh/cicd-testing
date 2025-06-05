// index.test.js
const { add } = require("./server");

describe("should add two numbers", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
