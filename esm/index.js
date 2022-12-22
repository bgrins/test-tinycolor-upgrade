import assert from "assert";

import tinycolor from "tinycolor2";
assert(tinycolor);
assert.equal(tinycolor("red").toHexString(), "#ff0000");
console.log("Passed", tinycolor("red").toHexString());

import tinycolor_test from "@bgrins/test-tinycolor-esm";
assert(tinycolor_test);
assert.equal(tinycolor_test("red").toHexString(), "#ff0000");
console.log("Passed", tinycolor_test("red").toHexString());