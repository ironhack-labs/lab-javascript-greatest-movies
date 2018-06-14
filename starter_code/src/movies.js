/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  var moviesWithCorrectTimeFormat = [];
  var eachMovieHours, eachMovieMinutes, totalMinutes, singleMovieWithCorrectTimeFormat;
  moviesArray.map(function(eachMovie) {
    eachMovieHours = 0;
    eachMovieMinutes = 0;
    totalMinutes = 0;
    if (eachMovie.duration.indexOf("h") !== -1) {
      eachMovieHours = eachMovie.duration.slice(0, eachMovie.duration.indexOf("h"));
    } else {
      eachMovieHours = 0;
    }    
    eachMovieMinutes = eachMovie.duration.slice(eachMovie.duration.indexOf("h") + 1, eachMovie.duration.indexOf("m"));
    totalMinutes = (60 * eachMovieHours) + (1* eachMovieMinutes);
    singleMovieWithCorrectTimeFormat = Object.assign({},eachMovie);
    singleMovieWithCorrectTimeFormat.duration = totalMinutes;
    moviesWithCorrectTimeFormat.push(singleMovieWithCorrectTimeFormat);
  });
  return moviesWithCorrectTimeFormat;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
  var result = moviesArray.reduce(function(totalOfAllRatings, currentMovieRating){
    return totalOfAllRatings + currentMovieRating.rate;
  }, 0);

  if(result.length === 0 ) {
    return 0;
  }
  return result / moviesArray.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  var result =0;
  var dramaMoviesArray = moviesArray.filter(function(eachMovie){
    return eachMovie.genre.includes("Drama");
  });
  if (dramaMoviesArray.length === 0) {
    return undefined;
  }
  result = Math.round(ratesAverage(dramaMoviesArray) * 100) / 100;
  return result;
}

// Order by time duration, in growing order

function orderByDuration(moviesArray) {
  
}


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
 