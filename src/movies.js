// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((eachDirector) => {
    return eachDirector.director;
  });

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSpielbergMovies = movies.filter((eachMovie) => {
    return (
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
    );
  });
  const manyDramaSpielbergMovies = dramaSpielbergMovies.length;
  return manyDramaSpielbergMovies;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumScores = movies.reduce((acc, eachScore) => {
    return acc + eachScore.score;
  }, 0); //<--------0

  const avgScores = sumScores / movies.length;

  return Number(avgScores.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const manyDramaMovies = movies.filter((eachMovieDrama) => {
    return eachMovieDrama.genre.includes('Drama');
  });

  const sumScoresDrama = manyDramaMovies.reduce((acc, eachScoreDrama) => {
    return acc + eachScoreDrama.score;
  }, 0);

  const avgScoreDrama = sumScoresDrama / manyDramaMovies.length;

  return Number(avgScoreDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderByYearMovie = JSON.parse(JSON.stringify(movies));
  if (orderByYearMovie === []) {
    return 0;
  } else {
    orderByYearMovie.sort((a, b) => {
      if (a.year === b.year) {
        if (a < b) return 1; //  1 here (instead of -1 for ASC)
        if (a > b) return -1; // -1 here (instead of  1 for ASC)
        if (a === 0) return 0;
      } else {
        return a.year - b.year;
      }
    });
  }

  return orderByYearMovie;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // no me sale con esta logica
  // movies.sort((a, b) => {
  //   const movieTitle = a.title.toUpperCase();
  //   const nextTitle = b.title.toUpperCase();

  //   if (movieTitle < nextTitle) {
  //     return -1;
  //   }
  //   if (movieTitle > nextTitle) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // console.log(movies);

  // const orderByTitle = JSON.parse(JSON.stringify(movies));

  const orderByTitle = movies.map((eachTitle) => {
    return eachTitle.title;
  });
  orderByTitle.sort((a, b) => {
    const movieTitle = a.toUpperCase();
    const nextTitle = b.toUpperCase();
    if (movieTitle < nextTitle) {
      return -1;
    }
    if (movieTitle > nextTitle) {
      return 1;
    }
    return 0;
  });
  if (orderByTitle.length > 20) {
    return orderByTitle.slice(0, 20);
  } else {
    return orderByTitle;
  }

  return orderByTitle;
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
