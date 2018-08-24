/* eslint no-restricted-globals: 'off' */
// 1. Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(){
  
}

// 2. Get the average of all rates with 2 decimals 

function ratesAverage (item){
  var a = movies.reduce(function(acc, movies) {
    return acc + parseInt(movies.rate);
  }, 0);
  var finalRate = a/movies.length; 
  return Math.round(finalRate, -1);
} 

// Get the average of Drama Movies
function dramaMoviesRate(){

}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
