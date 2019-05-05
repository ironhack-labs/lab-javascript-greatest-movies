/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies = []) {
  return movies.map((original) => {
    let movie = {...original}
    let hours = (movie.duration.indexOf('h') >= 0 )? Number(movie.duration.slice(0, movie.duration.indexOf('h'))) : 0;
    let minutes = (movie.duration.indexOf('min') >= 0 )? Number(movie.duration.slice(movie.duration.indexOf('min') - 2, movie.duration.indexOf('min'))) : 0;
    movie.duration = hours * 60 + minutes;
    return movie;
  });
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies = []) {
  let sum = movies.reduce((movie, currentMovie) => {
    return parseFloat(movie.rate) + parseFloat(currentMovie.rate);
  });
  let average =  sum / movies.length;
  return parseFloat(Math.round(average * 100) / 100).toFixed(2);
}
// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average

// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
