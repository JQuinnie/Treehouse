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

  // many ship
  it("should handle ships located at more than one coordinate", function() {
    player = {
      ships: [
        {
          locations: [[0, 0], [0, 1]]
        }
      ]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
