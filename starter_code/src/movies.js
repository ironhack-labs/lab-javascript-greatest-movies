/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
// "2h 33min" -> 153
// "2h"       -> 120
// "33min"    -> 33

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
  
  var bestMovies =
    function filterMovieRates( movies ) {
        var bestRates = movies.filter( function( eachMovie ) {
            return eachMovie.rate >= 8;
        })
        return bestRates;
    };


  // Get the average of all rates with 2 decimals
function ratesAverage( bestMovies ) {
    var totalRates =
        bestMovies.reduce( function( accu, eachMovie ) {
            return accu + Number(eachMovie.rate);
        },0 );
    return Math.round((totalRates / bestMovies.length) * 100) / 100;
}

  
  // Get the average of Drama Movies


function filterMovies( movies ) {
    var dramaMovies =
        movies.filter( function( eachMovie ) {
            return eachMovie.genre.indexOf("Drama") !== -1;     
        });
    if(dramaMovies.length > 0) {
        return dramaMovies;
    }
    else {
        return undefined;
    }
}


function dramaMoviesRate( movies ) {
    var allDramaMovies = filterMovies( movies );
    return ratesAverage( allDramaMovies );
}

  
  // Order by time duration, in growing order
  
  
  // How many movies did STEVEN SPIELBERG
  
  
  // Order by title and print the first 20 titles
  
  
  // Best yearly rate average