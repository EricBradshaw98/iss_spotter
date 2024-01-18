/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require("request");
//breedfetcher function to establish URL
const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    //timeout
    if (response.statusCode !== 200) {
        
      return callback(null);
    }
  
    const info = JSON.parse(body);
 
    // Check if info is empty or doesn't contain expected data
    if (!info || !info.ip) {
      return callback("Unable to fetch IP information", null);
    }

    // Callback with the IP address
    callback(null, info.ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/99.237.223.142`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    // Check if the status code is not 200
    if (response.statusCode !== 200) {
      return callback("Unexpected status code: " + response.statusCode, null);
    }

    try {
      const data = JSON.parse(body);
      const coordinates = {
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude)
      };
      callback(null, coordinates);
    } catch (parseError) {
      callback("Error parsing API response", null);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };