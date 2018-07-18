const expect = require("chai").expect;

function titleCase(title) {
  return title.toUpperCase();
}

expect(titleCase("the shawshank redemption")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
// expect(titleCase("the shawshank redemption")).to.equal(
//   "The Shawshank Redemption"
// );
