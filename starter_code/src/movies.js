/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function calcMinutes (duration){
  duration = duration.split(" ");

  for (i=0, l=movies.length; i<l; i++){
    var toMinutes = parseInt(duration[0],10); //parseInt coge de un string los numeros. 2do arg es en que base 10 ->decimal)
    var minutes = parseInt(duration[1], 10);
    var time = toMinutes*60 + minutes;
  }
  return time;
}

function turnHoursToMinutes(movies) {
  return movies.map(function(films) {
    films = Object.assign({}, films);
    films.duration = calcMinutes (films.duration);
  return films;
  });
} 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
