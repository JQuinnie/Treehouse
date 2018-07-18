const expect = require("chai").expect;

function titleCase(title) {
  return title;
}

expect(titleCase("shawshank redemption")).to.be.a("string");
