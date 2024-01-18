// index.js
const { fetchMyIP } = require('./iss');

const { fetchISSFlyOverTimes } = require('./iss');

const { fetchCoordsByIP } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   // if (error) {
//   //   console.log("It didn't work!", error);
//   //   return;
//   // }

//   // console.log('It worked! Returned IP:', ip);

//   // Call fetchCoordsByIP with a callback function
//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log("Error fetching coordinates:", error);
//       return;
//     }

//     console.log("Coordinates:", coordinates);
//     // Do something with the coordinates here
 

    // const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

    // fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
    //   if (error) {
    //     console.log("It didn't work!" , error);
    //     return;
    //   }
    
    //   console.log('It worked! Returned flyover times:' , passTimes);
    // });
    const printPassTimes = function(passTimes) {
      for (const pass of passTimes) {
        const datetime = new Date(0);
        datetime.setUTCSeconds(pass.risetime);
        const duration = pass.duration;
        console.log(`Next pass at ${datetime} for ${duration} seconds!`);
      }
    };

    nextISSTimesForMyLocation((error, passTimes) => {
      if (error) {
        return console.log("It didn't work!", error);
      }
      // success, print out the deets!
      printPassTimes(passTimes);
    });