// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data");

function getAllDirectors(movies) {
  const directorsArray = movies.map(eachMovie => eachMovie.director)
  return directorsArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergArray = movies.filter(eachMovie => eachMovie.director == "Steven Spielberg" && eachMovie.genre.includes("Drama"))
  return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const moviesScoreArry = movies.reduce((acc, eachMovie) => {
      if (eachMovie.score === undefined) {
        return acc;
      } else {
        return acc + eachMovie.score;
      }
    }, 0)
    const moviesAvarageArry = Math.round((moviesScoreArry / movies.length) * 1e2) / 1e2;
    return moviesAvarageArry;
  }
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMoviesArry = movies.filter(eachMovie => eachMovie.genre.includes("Drama"))
  return scoresAverage(dramaMoviesArry);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesYearArry = JSON.parse(JSON.stringify(movies));
  moviesYearArry.sort((a, b) => {
    if (a.year - b.year !== 0) {
      return a.year - b.year;
    } else {
      const aTileLower = a.title.toLowerCase();
      const bTitleLower = b.title.toLowerCase();
      return aTileLower.localeCompare(bTitleLower);
    }
  })
  return moviesYearArry;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieTitles = movies.map(eachMovie => eachMovie.title)
  movieTitles.sort((a, b) => {
    const aTileLower = a.toLowerCase();
    const bTitleLower = b.toLowerCase();
    return aTileLower.localeCompare(bTitleLower);
  })
  return movieTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // const moviesNewArry = JSON.parse(JSON.stringify(movies));
  // moviesNewArry.map(eachMovie => eachMovie.duration)

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
    bestYearAvg,
  };
}
