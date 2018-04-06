/* eslint no-restricted-globals: 'off' */
var movies = require("./data.js");
// Turn duration of the movies from hours to minutes
function convertDurationToMinutes(){
  var totalMinutes = movies.map(function(movie){
    // console.log(movie);
    var hour = movie.duration.split("h ");
      if (hour.length > 1){
      var minutes = hour[1].split("min");
      return Number(hour[0] *60) + Number(minutes[0]);
      } else {
      return Number(hour[0] * 60);
      }
  })
  return totalMinutes;
}

function turnHoursToMinutes(movies){
  var minutesArray = convertDurationToMinutes();
  console.log(minutesArray);
  var moviesMinutes = movies;
  // console.log(moviesMinutes);
  moviesMinutes.forEach(function(movie, index){
    movie.duration = minutesArray[index];

  })
  console.log(moviesMinutes);
  return moviesMinutes;
}

turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
