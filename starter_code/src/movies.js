/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
// "2h 33min" -> 153
// "2h"       -> 120
// "33min"    -> 33

// "2h"
function convertHours (hourString) {
  // ["2", ""]
  var calculateHour = hourString.split("h");
  return calculateHour[0] * 60;
  // "2" * 60
  // 120
}

// "33min"
function convertMinutes (minuteString) {
  // ["33", ""]
  var calculateMinutes = minuteString.split("min");
  return Number(calculateMinutes[0]);
  // 33
}

function convertDuration (duration) {
  var timePieces = duration.split(" ");
  // ["2h", "33min"]
  // ["2h"]
  // ["33min"]

  var minutes =
    timePieces.reduce(function (sum, onePiece) {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);

  return minutes;
}

function turnHoursToMinutes (movies) {
  var newCentArray =
    movies.map(function (oneMovie) {
      var newMovie = {};
      newMovie.title = oneMovie.title;
      newMovie.year = oneMovie.year;
      newMovie.director = oneMovie.director;
      newMovie.duration = convertDuration(oneMovie.duration);
      newMovie.genre = oneMovie.genre;
      newMovie.rate = oneMovie.rate;

      return newMovie;
    });

  return newCentArray;
}


// Get the average of all rates with 2 decimals

var sumRates = movies.reduce(
  function (sum, movies) {
    return sum + parseFloat(movies.rate) ;
  },0);

console.log(sumRates);

  function ratesAverage (sumRates) {
    var numberMovies = movies.length;
    return sumRates / numberMovies;
  }
  
  console.log (sumRates/movies.length);
  

// Get the average of Drama Movies


var movieGenre = movies.filter (function(movies){
  return (movies.genre.includes('Drama'))
    
});

console.log (movieGenre);

var sumDramaRate = movieGenre.reduce(
  function (sum, movie) {
    return sum + parseFloat(movie.rate) ;
  },0);

console.log(sumDramaRate);

  function dramaMoviesRate (sumDramaRate) {
    var numberMovies = movieGenre.length;
    return sumDramaRate / numberMovies;
  }
  
  console.log (sumDramaRate / movieGenre.length);
// Order by time duration, in growing order

var movieDuration = movies.filter (function(movies){
  return (movies.duration);
    
});

function orderByDuration (movieDuration) {
  var blah = 
  movieDuration.sort (function (a, b) {
    if (a > b) {
      return 1;
    } if (a < b) {
      return -1;
    } else {
      return 0;
    };
    return blah;
});
}

// How many movies did STEVEN SPIELBERG

var howManyMovies = movies.filter (function(movies){
  return (movies.director.includes('Steven Spielberg');

});

// Order by title and print the first 20 titles


// Best yearly rate average
