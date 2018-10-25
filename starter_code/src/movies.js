/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(newObject) {
  var Objreturn = [];
  var minutes = 0;

  newObject.forEach(function(element) {
    minutes = element.duration;

    minutes = minutes.split(" ");
    if (minutes.length == 2) {
      minutes = parseInt(minutes[0]) * 60 + parseInt(minutes[1]);
    } else {
      if (minutes[0].length > 3) {
        minutes = parseInt(minutes[0]);
      } else {
        minutes = parseInt(minutes[0]) * 60;
      }
    }

    element.duration = minutes;

    Objreturn.push(element);
  });

  return [...newObject];
}

// Get the average of all rates with 2 decimals

function ratesAverage(arrAv) {
  var calcAv = [];
  var average = 0;
  arrAv.forEach(function(element) {
    calcAv.push(element.rate);
  });
  calcAv.forEach(function(element) {
    average = average + element;
  });
  average = parseFloat(average / calcAv.length);
  return average;
}

// Get the average of Drama Movies

function dramaMoviesRate(arrDramaAverage) {
  var dramaAverage = [];
  dramaAverage = arrDramaAverage.filter(function(element) {
    return element.genre.indexOf("Drama") != -1;
  });
  if (dramaAverage.length == 0) {
    dramaAverage = undefined;
    return dramaAverage;
  }
  //dramaAverage = dramaAverage.reduce(function(a,b){
  //return a + b
  //})
  
  
  return ratesAverage(dramaAverage);
  //console.log(dramaAverage)
  //return dramaAverage
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
