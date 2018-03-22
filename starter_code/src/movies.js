/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {
  var total = moviesArray.reduce(function(sum, movie){
    return sum + parseInt(movie.rate);
  }, 0);

  return parseFloat((total/moviesArray.length).toFixed(2));
}

console.log("Average rate: " + ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  // get drama movies
  var dramaMovies = moviesArray.filter(function(movie) {
    return movie.genre.includes("Drama");
  });

  // if there is not drama movies, return undefined
  if( dramaMovies.length == 0 ) {
    return;
  }

  var total = dramaMovies.reduce(function(sum, movie) {
    var rate = 0;
    if(movie.rate != "") {
      rate = parseInt(movie.rate);
    }
    return sum + rate;
  }, 0);

  return parseFloat((total/dramaMovies.length).toFixed(2));
}

console.log("Drama movies average rate: " + dramaMoviesRate(movies));

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
