/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  var arr = movies.map(function(movie) {
    var minutes = movie.duration.split(' ').map(function(arrTime) { 

      var time = parseInt(arrTime);

      if (arrTime.endsWith('h')) {
        return time * 60;
      } else {
        return time;
      }
    }).reduce(function(acumulator, current) {
      return acumulator + current;
    }, 0);
    return Object.assign({}, movie, {duration: minutes});
  });
  return arr;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  if (movies.length === 0) return;

  var moviesCopy = Object.assign([], movies);
  
  var average = moviesCopy.reduce(function(acumulator, current) {
    return acumulator + current.rate;
  }, 0) / moviesCopy.length;
  return Math.round(average * 100) / 100;
}

// Get the average of Drama Movies
function getMoviesByGenre(movies, genre) {
  return movies.filter(function(movie) {
    return movie.genre.includes(genre); 
  });
}

function dramaMoviesRate(movies) {
  if (movies.length === 0) return;

  return ratesAverage(getMoviesByGenre(movies, "Drama"));
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort(function(movie1, movie2) {
    if (movie1.duration === movie2.duration) {
      return (movie1.duration < movie2.duration) ? movie1.duration - movie2.duration : movie1.duration + movie2.duration;
    } else {
      return movie1.duration - movie2.duration;
    }
  });
}

// How many movies did STEVEN SPIELBERG
function getMoviesByDirector(movies, director) {
  return movies.filter(function(movie) {
    return movie.director.includes(director); 
  });
}

function howManyMovies(movies) {
  if (movies.length === 0) return;

  var totalMovies = getMoviesByDirector(getMoviesByGenre(movies, "Drama"), "Steven Spielberg").length;

  return `Steven Spielberg directed ${totalMovies} drama movies!`;
}

// Order by title and print the first 20 titles


// Best yearly rate average
