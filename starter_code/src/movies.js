/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies = []) {
  return movies.map((original) => {
    let movie = {...original}

    if (typeof(movie.duration) === 'number') {
      return movie;
    }

    let hours = (movie.duration.indexOf('h') >= 0 )? Number(movie.duration.slice(0, movie.duration.indexOf('h'))) : 0;
    let minutes = (movie.duration.indexOf('min') >= 0 )? Number(movie.duration.slice(movie.duration.indexOf('min') - 2, movie.duration.indexOf('min'))) : 0;
    movie.duration = hours * 60 + minutes;
    return movie;
  });
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies = []) {
  let sum = movies.reduce((previusMovie, currentMovie) => {
    let movie = {...previusMovie};
    movie.rate = parseFloat((previusMovie.rate === '' ? 0 : previusMovie.rate)) + parseFloat((currentMovie.rate === '' ? 0 : currentMovie.rate));
    return movie;
  });
  return Math.round(sum.rate / movies.length * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies = []) {
  let dramaMovies = movies.filter((element) => {
    return element.genre.indexOf('Drama') >= 0;
  });
  return dramaMovies.length === 0 ? undefined : ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(movies = []) {

  if (movies.length === 1) {
    return movies;
  }

  let moviesInMinutes = turnHoursToMinutes(movies);

  moviesInMinutes.sort((movie1, movie2) => {
    if (movie1.duration < movie2.duration){
      return -1;
    }

    if (movie1.duration > movie2.duration){
        return 1;
    }

    if (movie1.title < movie2.title) {
      return -1;
    }

    if (movie1.title > movie2.title) {
      return 1;
    }

    return 0;
  });
  return moviesInMinutes;
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
