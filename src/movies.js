// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArr) {
  const movieDirectors = movieArr.map((eachMovie) => {
    return eachMovie.director
  })
  return movieDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArr) {
  let counter = 0;
  movieArr.filter(eachMovie => counter += (eachMovie.genre.includes('Drama') && eachMovie.director === 'Steven Spielberg'))
  return counter
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArr) {
  if (movieArr.length === 0) {
    return 0;
  }
  else {

    const avgScores = movieArr.reduce((acc, eachMovie) => {
      return acc + (eachMovie.score || 0)
    }, 0)
    return Number((avgScores / movieArr.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArr) {

  const filteredDramaMovies = movieArr.filter(eachMovie => eachMovie.genre.includes('Drama'));
  if (filteredDramaMovies.length === 0) {
    return 0
  }
  const avgDramaScores = filteredDramaMovies.reduce((acc, eachMovie) => {
    return acc + (eachMovie.score || 0)
  }, 0)

  return Number((avgDramaScores / filteredDramaMovies.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr) {
  const movieArrCopy = JSON.parse(JSON.stringify(movieArr))

  movieArrCopy.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    return a.year - b.year
  });
  return movieArrCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
  const copy = JSON.parse(JSON.stringify(movieArr))
  copy.sort(function (a, b) {
    if (a.title < b.title) {
      return -1
    }
  })
  const orderedTitles = copy.map(eachMovie => eachMovie.title)
  const twentyOrderedTitles = orderedTitles.slice(0, 20)
  return twentyOrderedTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }

/*
1-Sort by year
2-Calculate average yearly review
3-Sort by average yearly review
*/

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
