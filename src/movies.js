// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(function (movie) {
    return movie.director;
  })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergDramas = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length) {
    let average = movies.reduce(function (acc, currentMovie) {
      if (!currentMovie.rate) {
        return acc + 0;
      }
      return acc + currentMovie.rate
    }, 0) / movies.length;
    return Number(average.toFixed(2));
  }
  return 0;
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function getDramaMovies(movies) {
  return movies.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
}

function dramaMoviesRate(movies) {
  const dramaMovies = getDramaMovies(movies);
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// howManyMovies(movies);