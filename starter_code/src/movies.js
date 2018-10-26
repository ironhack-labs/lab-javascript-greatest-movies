/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function strigToMinutes (durationHour) {
   var arrHourMin = durationHour.slice(0,-3).split("h ");
   var arrHourMinNum = [parseInt(arrHourMin[0]),parseInt(arrHourMin[1])];
   return arrHourMinNum[0]*60 + arrHourMinNum[1];
}

function turnHoursToMinutes (films) {
  var newFilms = Object.assign({}, films)
  newFilms.duration = strigToMinutes(newFilms.duration);
  console.log(film);
  return newFilms;
}
// Get the average of all rates with 2 decimals 
function ratesAverage(filmsArr){
  
  var resultado = parseInt(filmsArr.reduce(function(acumulator, current)
  {
  console.log(acumulator, current);
  return accumulator.rate + current.rate;
  },0));
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
