/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var sum =
    movies.reduce(function (acc, oneRate) {
      var toInt =  parseFloat(oneRate.rate)
      return acc + toInt;
      
    }, 0);
    var average = sum / movies.length;
    return average;
  };


// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var drama = 
    movies.filter(function (oneMovie) {
        if (oneMovie.rate || oneMovie.rate !== "") {
        return oneMovie.genre.includes("Drama");
        }
    });
   var sum = 
    drama.reduce(function (acc, oneRate) {
    if (oneRate.rate || oneMovie.rate !== "") {
       var toInt = Number(oneRate.rate);
       return acc + toInt;
    }
   }, 0);
   var average = sum / drama.length;
   return Number(average.toFixed(2));
};

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
