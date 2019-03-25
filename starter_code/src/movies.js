/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// function turnHoursToMinute(n) {
//   var num = n;
//   var hours = num / hours;
//   var rhours = Math.floor(hours);
//   var minutes = (hours - rhours) * 60;
//   var rminutes = math.minutes(minutes);
//   return num + "minutes = " + rhours + "hour(s) and " + rminutes + "rminutes";
// }
// console.log(turnHoursToMinute(200));

function turnHoursToMinutes(movies) {
  let moviesFormated = JSON.parse(JSON.stringify(movies));
  for (let movie of moviesFormated) {
    movie.duration = formatHours(movie.duration);
  }
  return moviesFormated;
}

function formatHours(duration) {
  let hours = 0;
  let mins = 0;
  let tab = [];
  if (duration.includes("h") && duration.includes("min")) {
    tab = duration.split(" ");
    hours = parseInt(tab[0]);
    mins = parseInt(tab[1]);
    return hours * 60 + mins;
  }
  if (duration.includes("h")) {
    tab = duration.split(" ");
    hours = parseInt(tab[0]);
    return hours * 60;
  }
  if (duration.includes("min")) {
    return parseInt(duration);
  }
}

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  var rateArray = [];
  for (let index = 0; index < array.length; index++) {
    rateArray.push(array[index].rate);
  }
  console.log(rateArray);
  return rateArray;
}

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var dramaRate = [];
  for (let index = 0; index < array.length; index++) {
    dramaRate.push(array[index].rate);
  }
  return dramaRate;
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
