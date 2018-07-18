function checkForShip(player, coordinates) {
  let shipPresent, ship;

  // only want to return false if no ships at currently coordinates
  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    // compare each value to the given coordinates
    shipPresent = ship.locations.filter(function(actualCoordinate) {
      // filter current ship location array for matches against given coordinates
      return (
        actualCoordinate[0] === coordinates[0] &&
        actualCoordinate[1] === coordinates[1]
      );
    })[0]; // be a coordinate if only a match, first unmatch will be undefined with empty array

    if (shipPresent) {
      return true;
    }
  }
  // want to complete loop to make sure it runs through all ship before return false
  return false;
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
