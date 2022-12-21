import assert from "assert";
// import tinycolor from "@bgrins/test-tinycolor-esm";
import tinycolor from "tinycolor2";

assert(tinycolor);
assert.equal(tinycolor("red").toHexString(), "#ff0000");
console.log("Passed", tinycolor("red").toHexString());
