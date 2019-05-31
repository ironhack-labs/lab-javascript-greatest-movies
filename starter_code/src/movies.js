/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var total = movies.reduce((acc, currentMovie) => {
    return (acc += Number(currentMovie.rate));
  }, 0);
  const avg = (total / movies.length).toFixed(2);
  return Number(avg);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(movie=> {
    return movie.genre.includes("Drama");
});
if (dramaMovies.length > 0) {
    return ratesAverage(dramaMovies);
  } else {  
     return undefined;
    } 
}
// Order by time duration, in growing order

 
// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length == 0) {
    return undefined;
  }
  var dramaMovies = movies.filter(function(movie) {
  return movie.director.includes('Steven Spielberg') && movie.genre.includes ('Drama');
 });
  if (dramaMovies.length >= 0) {
  return `Steven Spielberg directed ${(dramaMovies.length)} drama movies!`;
 } 
 }

// alphabetical
function orderAlphabetically(movies){
//  var firstTwenty = movies.slice(0,19);
   movies.sort();  
   return movies;
   
  }


//return String(spielbergMovies.length);
      
// Order by title and print the first 20 titles

// Best yearly rate average
