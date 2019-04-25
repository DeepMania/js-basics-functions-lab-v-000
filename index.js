function distanceFromHqInBlocks(streetNumber) {
  let blocksFromHq;
    if (streetNumber >= 42) {
      blocksFromHq = (streetNumber - 42);
    } else {
      blocksFromHq = (42 - streetNumber);
    }
  return blocksFromHq;
}

function distanceFromHqInFeet(streetNumber) {
  let feetFromHq = (distanceFromHqInBlocks(streetNumber)*264);
  return feetFromHq;
}
