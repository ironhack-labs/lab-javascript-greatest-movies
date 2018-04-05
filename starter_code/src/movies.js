
var movies = require("./data.js");

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(array){
  var something = array.map(function(movie){
  var newTime;
  if (movie.duration.includes("h")) {
  newTime = (movie.duration.replace("h","").replace("min","")).split(" "); }
  else {newTime = [0, movie.duration.replace("min","")]}
  if (newTime[0] === 0){
    var newTimeInt =parseInt(newTime[1])
  } else if(newTime[1] === undefined) {
    newTimeInt = parseInt(newTime[0] * 60)
  } else{
    newTimeInt = parseInt(newTime[0] * 60) + parseInt(newTime[1]); }
  return {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: newTimeInt,
    genre: movie.genre,
    rate: movie.rate } 
});
return something;
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
