// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  const directors = arrayOfMovies.map((movie) => {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return 0;
  }
  const spielbergDramaMovies = arrayOfMovies.filter((movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return movie;
    }
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return 0;
  }
  const averageScore = arrayOfMovies.reduce((accum, movie) => {
    if (movie.score) {
      return accum + movie.score;
    } else {
      return accum;
    }
  }, 0);
  return Math.round((averageScore / arrayOfMovies.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayOfMovies) {
  const averageScoreDrama = arrayOfMovies
    .filter((movie) => {
      return movie.genre.includes('Drama');
    })
    .reduce((accum, movie, index, list) => {
      if (movie.score) {
        return Math.round((accum + movie.score / list.length) * 100) / 100;
      } else {
        return accum;
      }
    }, 0);
  return averageScoreDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies) {
  const newArrayOfMovies = [...arrayOfMovies];
  const newArrayOfMoviesSorted = newArrayOfMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  return newArrayOfMoviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  const newArrayOfMovies = [...arrayOfMovies];
  const newArrayOfMoviesSorted = newArrayOfMovies
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((movie) => {
      return movie.title;
    })
    .slice(0, 20);
  return newArrayOfMoviesSorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayOfMovies) {
  const newArrayOfMovies = JSON.parse(JSON.stringify(arrayOfMovies));
  const newArrayOfMoviesAlt = newArrayOfMovies.map((movie) => {
    if (typeof movie.duration === 'string') {
      if (movie.duration.includes('min')) {
        movie.duration =
          movie.duration.slice(0, 1) * 60 +
          parseFloat(movie.duration.slice(3).slice(0, -3));
      } else {
        movie.duration = movie.duration.slice(0, 1) * 60;
      }
    } else if (typeof movie.duration === 'number') {
      movie.duration;
    }
    return movie;
  });
  return newArrayOfMoviesAlt;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return null;
  }

  let years = [];

  for (let i = 0; i < arrayOfMovies.length; i++) {
    if (!years.includes(arrayOfMovies[i].year)) {
      years.push(arrayOfMovies[i].year);
    }
  }

  let yearsAndScoresArray = [];

  for (let i = 0; i < years.length; i++) {
    let scores = [];

    arrayOfMovies
      .filter((movie) => {
        return movie.year === years[i];
      })
      .map((movie) => {
        scores.push(movie.score);
      });
    yearsAndScoresArray.push({
      year: years[i],
      averageScore: scores.reduce((acc, score, index, list) => {
        return acc + score / list.length;
      }, 0)
    });
  }

  let topAverageScore = [...yearsAndScoresArray];

  topAverageScore.sort((a, b) => {
    if (a.averageScore > b.averageScore) {
      return -1;
    } else if (a.averageScore < b.averageScore) {
      return 1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });

  let output = `The best year was ${topAverageScore[0].year} with an average score of ${topAverageScore[0].averageScore}`;

  return output;
}

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
