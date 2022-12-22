const assert = require("assert");

const tinycolor = require("tinycolor2");
assert(tinycolor);
assert.equal(tinycolor("red").toHexString(), "#ff0000");
console.log("Passed", tinycolor("red").toHexString());

// const tinycolor_test = require("@bgrins/test-tinycolor-esm");
// assert(tinycolor_test);
// assert.equal(tinycolor_test("red").toHexString(), "#ff0000");
// console.log("Passed", tinycolor_test("red").toHexString());