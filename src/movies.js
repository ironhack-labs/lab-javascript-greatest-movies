// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(directors) {
  // use map to get directors' names
  const getDirectors = directors.map(function (dirName) {
    return dirName.director;
  });
  //  Bonus: get only Director's name only
  const onlyUniqueDirectors = getDirectors.filter(function (
    value,
    index,
    self
  ) {
    return self.indexOf(value) === index;
  });
  return onlyUniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  // using .filter to get only Spielberg-directed movies
  const getSpielberg = movies.filter(function (dirName) {
    // .genre.includes("Drama") as some movies have multiple tags
    return (
      dirName.director === 'Steven Spielberg' && dirName.genre.includes('Drama')
    );
  });
  // using .length to only get the number of movies
  return getSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//to round numbers
// Math.round((num + Number.EPSILON) * 100) / 100
// TODO average is not calculating correctly: fix it
function scoresAverage(movieAvg) {
  const meanScore = movieAvg.reduce(function (sum, movieScore) {
    return (
      Math.round(
        ((sum + movieScore.score) / movieAvg.length + Number.EPSILON).toFixed(
          2
        ) * 100
      ) / 100
    );
  }, 0);
  return meanScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
