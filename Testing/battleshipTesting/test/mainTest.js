// import Chai
const expect = require('chai').expect;

// Test suite (block of unit test closely related)
describe('Mocha', function(){
  // sanity check
  // test spec (unit test)
  it('should run our tests using npm', function(){
    // testing something that will pass
    // ok is an insertion method for Chai, tests value if truthy
    expect(true).to.be.ok;
  });
});