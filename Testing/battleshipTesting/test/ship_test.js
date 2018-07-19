const expect = require("chai").expect;

// set up new suite for function
describe("checkForShip", function() {
  const checkForShip = require("../gameLogic/shipMethods").checkForShip;
  let player;

  before(function() {
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
  });

  // no ship
  it("should correctly report no ship at a given players coordinate", function() {
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // a ship
  it("should correctly report a ship located at a given players coordinate", function() {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  // bigger ship
  it("should handle ships located at more than one coordinate", function() {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // many ships
  it("should handle checking multiple ships", function() {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
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

// ship fire function
describe("fire", function() {
  const fire = require("../gameLogic/shipMethods").fire;
  let player;

  // reset the object before each test
  beforeEach(function() {
    player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: []
        }
      ]
    };
  });
  // clean the test afterwards
  after(function() {
    console.log("Entire test suite complted");
  });
  // clean each afterwards
  afterEach(function() {
    console.log("one unit test completed");
  });

  it("should record damage on the given players ship at a given coordinate", function() {
    fire(player, [0, 0]);
    // fire at location that is occupied, ship should take damage
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });

  it("should NOT record damage if there is no ship at my coordinates", function() {
    fire(player, [9, 9]);
    // fire at location if empty then dont take damage
    expect(player.ships[0].damage).to.be.empty;
  });
});
