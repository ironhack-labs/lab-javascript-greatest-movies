// var movies = require("../src/data.js");
console.log(movies)
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Turn duration of the movies from hours to minutes 


function getMovieDuration(movie) {
  var duration = movie.duration.split("h "); //[3, 22min]
  var hour = duration[0];
  var minutes = duration[1].split("min")[0]; // ["22"]
  var durationInMinutes = (Number(hour) * 60) + Number(minutes);
  var newMovie = {};
  newMovie.title = movie.title;
  newMovie.year = movie.year;
  newMovie.director = movie.director;
  newMovie.duration = durationInMinutes;
  newMovie.genre = movie.genre
  newMovie.rate = movie.title
  return newMovie;
}

function turnHoursToMinutes(movies){
var totalMinutes = movies.map(getMovieDuration);
return totalMinutes;
// console.log(movies);
}
turnHoursToMinutes(movies);

// var minutes = hour[1].split("min");
// Number(minutes[0])



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
