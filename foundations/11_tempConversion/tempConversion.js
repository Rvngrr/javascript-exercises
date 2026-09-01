const convertToCelsius = function(x) {
  let cel = (x-32) * 5/9;
  return Math.round(cel*10)/10;
  
};

const convertToFahrenheit = function(x) {
  let fahr = (x*9/5)+32;
  return Math.round(fahr *10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
