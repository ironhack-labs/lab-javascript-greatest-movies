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

var moviesRates = [];
   
  movies.forEach(function (movie){
     moviesRates.push(Number(movie.rate));
  });
 
 console.log(moviesRates);
 
 var rateSum =
  moviesRates.reduce(function(sum, movie){
    return sum + movie;
   
 });
  
  
  console.log(moviesRates.length);
 function ratesAverage() {
   return Number(Math.floor(rateSum / moviesRates.length));
 } 
 
 ratesAverage();
 
 

// Order by time duration, in growing order

function timeDuration(){
  var newArr =
  newCentArray.sort(function (a,b){
    return a-b;
  });

}
console.log(newArr);
timeDuration();
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
