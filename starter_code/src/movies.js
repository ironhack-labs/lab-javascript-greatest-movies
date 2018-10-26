/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
  return minuteArr = arr.map(function(elem) {
    var newDuration = ""
    if (elem.duration.indexOf("h") == -1) {
      newDuration = parseInt(elem.duration);
    } else if (elem.duration.indexOf("m") == -1) {
      newDuration = parseInt(elem.duration) * 60;
    } else {
      newDuration = parseInt(elem.duration.split(" ")[0]) * 60 + parseInt(elem.duration.split(" ")[1]);
    }
  return Object.assign({}, elem, {duration: newDuration})
})
}
// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  var rateSum = arr.reduce(function(acumulator, current){
    return acumulator + parseInt(current.rate);
}, 0);
var average = (rateSum / arr.length);
return average;
}

// Get the average of Drama Movies



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
