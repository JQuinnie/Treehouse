const expect = require("chai").expect;

// set up new suite for function
describe("checkForShip", function() {
  const checkForShip = require("../gameLogic/shipMethods").checkForShip;

  // no ship
  it("should correctly report no ship at a given players coordinate", function() {
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // a ship
  it("should correctly report a ship located at a given players coordinate", function() {
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
  });
});
