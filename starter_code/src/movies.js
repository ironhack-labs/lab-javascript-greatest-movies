/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
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

function ratesAverage(movies) {
  var total = movies.reduce(function(sum, movie) {
    return sum += Number(movie.rate);
  }, 0);
 
  var average = total / movies.length;
  average *= 100;
  average = Math.round(average);
  average /= 100;
  
  return average;
 }

// Get the average of Drama Movies

function dramaMoviesRate (movies){
  var dramaMovies = movies.filter(function (oneMovie){
    return oneMovie.genre.includes("Drama");
  });

  ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
  function orderByDuration(movies) {
    //var changedDurationMovies = turnHoursToMinutes(movies);
   
    movies.sort(function(a, b) {
      return Number(a.duration) - Number(b.duration);
    })
    return movies;
   }
  



  

  



// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
