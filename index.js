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

function distanceTravelledInFeet(pointA, pointB) {
  let distanceTotalFeet;
    if (pointA > pointB) {
      distanceTotalFeet = (pointA - pointB);
    } else {
      distanceTotalFeet = (pointB - pointA);
    }
    return distanceTotalFeet;
}
