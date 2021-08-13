// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map(function (eachMovie) {
    return eachMovie.director;
  });

  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const moviesByStevenSpielberg = movies.filter(function (eachMovie) {
    return (
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
    );
  });

  return moviesByStevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies?.length) {
    return 0;
  }

  const listOfScores = movies
    .filter(function (eachMovie) {
      return eachMovie.score !== undefined;
    })
    .reduce(function (acc, eachMovie) {
      acc += eachMovie.score;
      return acc;
    }, 0);

  let averageScore = listOfScores / movies.length;

  return Math.round(averageScore * 100) / 100; //+averageScore.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const listOfDramaMovies = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes('Drama');
  });

  if (!listOfDramaMovies?.length) {
    return 0;
  }

  const listOfDramaScores = listOfDramaMovies.reduce(function (acc, eachMovie) {
    acc += eachMovie.score;
    return acc;
  }, 0);

  let averageDramaScore = listOfDramaScores / listOfDramaMovies.length;

  //Another solution whicg reuses the previous function!

  return Math.round(averageDramaScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const listToBeOrdered = movies.slice();
  // const listToBeOrdered = JSON.parse(JSON.stringify(movies)); => deep clone

  const orderedByYear = listToBeOrdered.sort(function (elem1, elem2) {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem1.year < elem2.year) {
      return -1;
    } else {
      if (elem1.title > elem2.title) {
        return 1;
      } else if (elem1.title < elem2.title) {
        return -1;
      }
      return 0;
    }
    // The following is also valid
    /*if (elem1.year > elem2.year) return 1;
    if (elem1.year < elem2.year) return -1;
    if (elem1.title > elem2.title) return 1;
    if (elem1.title < elem2.title) return -1;
    return 0;*/
  });

  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const listOfMovieTitles = movies.map(function (eachMovie) {
    return eachMovie.title;
  });

  const orderedByTitle = listOfMovieTitles.sort().slice(0, 20);

  return orderedByTitle;

  // The following is also valid
  /*const listOfMoviesByTitle = movies
    .map(function (eachMovie) {
      return eachMovie.title;
    })
    .sort()
    .slice(0, 20);

  return listOfMoviesByTitle;*/
}

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
