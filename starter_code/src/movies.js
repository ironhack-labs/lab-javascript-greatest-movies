
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// var = newArray(movies.map(function () {

// duration from '2h 22min' ==> "142"
//}));

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var totalRates = movies.reduce(function (acc, curr) {
    return acc + parseFloat(curr.rate);
  }, 0)
  return totalRates / movies.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  console.log(movies)
  var dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes("Drama")
  }, 0);
  console.log(dramaMovies)
  return ratesAverage(dramaMovies);
};



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
