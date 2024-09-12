const convertToCelsius = function(tempF) {
  let convertedToCelsius = (tempF - 32) * (5/9);
  return Math.round(convertedToCelsius *10)/10;
};

const convertToFahrenheit = function(tempC) {
  let convertedToFahrenheit = tempC * (9/5) + 32;
  return Math.round(convertedToFahrenheit *10)/10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
