const expect = require("chai").expect;

function titleCase(title) {
  let word = title.split(" ");
  let titleCaseWord = word.map(function(eachWord) {
    return eachWord[0].toUpperCase() + eachWord.substring(1);
  });
  return titleCaseWord.join(" ");
}

expect(titleCase("the shawshank redemption")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("titanic")).to.equal("Titanic");
// expect(titleCase("the shawshank redemption")).to.equal(
//   "The Shawshank Redemption"
// );
