/* eslint no-restricted-globals: 'off' */

/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
  //We need to clone the array - so we are able to return a new array without mutating the existent
  const moviesSort = [...movies];
  const moviesOrdered = moviesSort.sort(function(movie1, movie2) {
    if (movie1.year < movie2.year) {
      return -1;
    } else if (movie1.year > movie2.year) {
      return 1;
    } else {
      if (movie1.title < movie2.title) {
        return -1;
      } else if (movie1.title > movie2.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return moviesOrdered;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  var directorMovie = array.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return directorMovie.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let firstTwentyAlpha = [...moviesArray]
    .sort(function(movie1, movie2) {
      if (movie1.title > movie2.title) {
        return 1;
      } else if (movie1.title < movie2.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(function(movieTitle) {
      return movieTitle.title;
    })
    .slice(0, 20);
  return firstTwentyAlpha;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  var filteredMovies = movies.filter(value => value.rate !== undefined);
  let rateMovies = filteredMovies.reduce((acc, value) => acc + value.rate, 0);
  return Math.round((rateMovies / filteredMovies.length) * 100) / 100;
}
ratesAverage(movies);
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = array => {
  const dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
  const averageDramaMovieRate = ratesAverage(dramaMovies);
  return averageDramaMovieRate;
};
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = array => {
  const moviesWithDurationAsMinutes = array.map(movie => {
    const durationAsString = movie.duration;
    let duration = 0;

    for (let value of durationAsString.split(' ')) {
      const number = parseInt(value);
      if (value.includes('h')) {
        duration += number * 60;
      } else if (value.includes('min')) {
        duration += number;
      }
    }
    const moviesWithDurationInMinutes = {
      ...movie,
      duration
    };
    return moviesWithDurationInMinutes;
  });
  return moviesWithDurationAsMinutes;
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average
