// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}
console.log(howManyMovies(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const stevenDramaMovies = moviesArray.filter(movie => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sum = moviesArray.reduce((acc, currMovie) => {
    if (currMovie.score) {
      return acc + currMovie.score;
    } else {
      return acc;
    }
  }, 0);
  const average = sum / moviesArray.length;
  const roundedAverage = Number(average.toFixed(2));
  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes('Drama')
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const sum = dramaMovies.reduce((acc, currMovie) => {
    return acc + currMovie.score;
  }, 0);
  const average = sum / dramaMovies.length;
  const roundedAverage = Number(average.toFixed(2));
  return roundedAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
