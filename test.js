const assert = require("assert");
const { add } = require("./index");

describe("add()", function () {
  it("should return 5 when adding 2 + 3", function () {
    assert.strictEqual(add(2, 3), 5);
  });

  it("should return 0 when adding -2 + 2", function () {
    assert.strictEqual(add(-2, 2), 0);
  });
});
