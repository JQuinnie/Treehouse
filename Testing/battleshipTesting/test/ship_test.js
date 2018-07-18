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

  // bigger ship
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

  // many ships
  it("should handle checking multiple ships", function() {
    player = {
      ships: [
        {
          locations: [[0, 0], [0, 1]]
        },
        {
          locations: [[1, 0], [1, 1]]
        },
        {
          locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
        }
      ]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [1, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [2, 3])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

// check for damage on ship
describe("damageShip", function() {
  const damageShip = require("../gameLogic/shipMethods").damageShip;

  it("should register damage on a given ship at a given location", function() {
    let ship = {
      locations: [[0, 0]],
      damage: []
    };

    // make sure damage ship should not have an empty damage array
    damageShip(ship, [0, 0]);

    expect(ship.damage).to.not.be.empty;
    // check first element of damage array to look like what is specified in equal()
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});
