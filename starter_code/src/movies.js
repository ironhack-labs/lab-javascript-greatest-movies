var bleh =require("./data.js");

console.log(movies);


/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// First attempt
// var turnHoursToMinutes = movies.map(function(oneMovie){
//   var minFromHours = oneMovie.duration.split("h");
//   return minFromHours[0]*60
// });
// var toMinutes = movies.map(function(oneMovie){
//   var minFromMin = oneMovie.duration.split("min");
//   return minFromMin[0]
// })

// console.log(toMinutes);

function convertHoursToMinutes(hours){
  var minutesFromHours = hours.split("h");
  return minutesFromHours[0]*60;
}
convertHoursToMinutes("2h")

// "44min"
function covertMinutesToMinutes(minutes){
  var minutesFromMinutes = minutes.split("min");
  // console.log(typeof(minutesFromMinutes[0]))
  return Number(minutesFromMinutes[0]);
}
covertMinutesToMinutes("44min")

// duration: '3h 21min'
function doTheMath(duration){
  var timePieces = duration.split(" ");

  var minutes = timePieces.reduce(function(sum, piece){
    if(piece.includes("h")){
      // add sum + 3*60
      return sum + convertHoursToMinutes(piece)
    }
    return sum + covertMinutesToMinutes(piece)
  }, 0);
  return minutes;
}
doTheMath("3h 21min")

function turnHoursToMinutes(movies){
  var newMoviesArray = movies.map(function(movie){
    var newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = doTheMath(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;
    return newMovie;
  })
  return newMoviesArray;
}
turnHoursToMinutes(movies)


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
