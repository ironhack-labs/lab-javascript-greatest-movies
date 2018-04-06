var bleh =require("./data.js");

console.log(movies);


/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var turnHoursToMinutes = movies.map(function(oneMovie){
  var minFromHours = oneMovie.duration.split("h");
  return minFromHours[0]*60
});
var toMinutes = movies.map(function(oneMovie){
  var minFromMin = oneMovie.duration.split("min");
  return minFromMin[0]
})

console.log(toMinutes);



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
