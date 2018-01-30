/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var turnHoursToMinutes = movies.map(function(movie){
    splitDuration = movie.duration.split(" ");
    hourConvert = parseInt(splitDuration[0]) * 60;
    minuteConvert = parseInt(splitDuration[1]);
    
    return hourConvert + minuteConvert;
 
    console.log(turnHoursToMinutes)

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
