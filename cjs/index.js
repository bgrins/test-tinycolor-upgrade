const assert = require("assert");
const tinycolor = require("@bgrins/test-tinycolor-esm");

assert(tinycolor);
assert.equal(tinycolor("red").toHexString(), "#ff0000");
console.log("Passed", tinycolor("red").toHexString());
