const expect = require("chai").expect;

function titleCase(title) {
  return title[0].toUpperCase() + title.substring(1);
}

expect(titleCase("the shawshank redemption")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("titanic")).to.equal("Titanic");
// expect(titleCase("the shawshank redemption")).to.equal(
//   "The Shawshank Redemption"
// );
