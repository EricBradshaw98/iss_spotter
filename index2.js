// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));
  
const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  printPassTimes(passTimes);
})