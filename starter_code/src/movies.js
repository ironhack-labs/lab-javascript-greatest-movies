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

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
  var sum = moviesArray.reduce(function(sum, movie){   
    return (sum + parseFloat(movie.rate)); }, 0);
  var average = (sum / moviesArray.length).toFixed(2);
  return parseFloat(average)
}

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray){
  var dramaMovies = moviesArray.filter(function(movie){
    return movie.genre.includes("Drama");
  })
  return ratesAverage(dramaMovies)
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
