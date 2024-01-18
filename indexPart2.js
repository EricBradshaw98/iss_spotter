// index.js
const { fetchMyIP } = require('./iss');



const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);

  // Call fetchCoordsByIP with a callback function
  fetchCoordsByIP(ip, (error, coordinates) => {
    if (error) {
      console.log("Error fetching coordinates:", error);
      return;
    }

    console.log("Coordinates:", coordinates);
    // Do something with the coordinates here
  });
});
