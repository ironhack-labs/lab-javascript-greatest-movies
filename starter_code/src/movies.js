/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function parseDurationToMins(duration) {
    return duration.split(' ')
      .reduce(function(acc, time) {
        if (time.indexOf('h') !== -1) {
          return Number(time.replace('h', '')) * 60 + acc;
        } else {
          return Number(time.replace('min', '')) + acc;
        }
      }, 0);
  }
  
  function turnHoursToMinutes(movies) {
    return movies.map(function(movie) {
          movie = Object.assign({}, movie);
          movie.duration = parseDurationToMins(movie.duration);
          return movie;
      });
  }
  turnHoursToMinutes(movies);
  
  // Get the average of all rates with 2 decimals 
  function ratesAverage(movies){
    var ratesSum = movies.reduce(function(acc, movie){
      return acc + parseFloat(movie.rate);
    }, 0);
      return ratesSum / movies.length.toFixed(2);
  };
  ratesAverage(movies);
  // Get the average of Drama Movies
  function dramaMoviesRate(movies) {
    var dramaMovie = movies.filter(function(movie){
      return movie.genre.indexOf("Drama") === 1;
    });
        return ratesAverage(dramaMovie)
  }
  dramaMoviesRate(movies);
  
  //To review, I have too many errors in Jasmine with NaN output with empty key values.
  
  // Order by time duration, in growing order
  function orderByDuration(movies) {
    return movies.sort(function(movieA, movieB) {
        if (movieA.duration > movieB.duration) {
            return 1;
        } else if (movieA.duration < movieB.duration) {
            return -1;
        } else {
   return movieA.title.localeCompare(movieB.title);
        }
    });
  }
  
  orderByDuration(movies);
  
  // How many movies did STEVEN SPIELBERG
  
  
  // Order by title and print the first 20 titles
  
  
  // Best yearly rate average
  
