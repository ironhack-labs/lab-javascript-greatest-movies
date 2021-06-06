// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let outputArray = movies.map(function (movie) {
    return movie.director
  })
return outputArray
}
// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let onlySteven = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') != -1
  })
  return onlySteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let withScores = movies.filter(function (movie) {
    return movie.score
  })
  let averageAll = withScores.reduce(function (accumulator, value) {
    return accumulator + value.score
  }, 0) / movies.length
return Number(averageAll.toFixed(2)) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes('Drama') 
  })
  if (dramaMovies.length === 0) {
    return 0;
  }
  let averageDrama = dramaMovies.reduce(function (scoreTotal, movie) {
    return scoreTotal + movie.score
  }, 0) / dramaMovies.length
  return Number(averageDrama.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copy = JSON.parse(JSON.stringify(movies));
  let sortedYears = copy.sort(function (a,b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  })
  return sortedYears
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copy = JSON.parse(JSON.stringify(movies));
  let movieTitles = copy.map(function (movie) {
    return movie.title
  })
  let movieAlphabetically = movieTitles.sort(function (a,b) {
    return a.localeCompare(b)
  })
  let movieOrdered = []
  if (movieAlphabetically.length < 20) {
    return movieAlphabetically
  }
  for (let i = 0; i < 20; i++) {
    movieOrdered.push(movieAlphabetically[i])
  }
  return movieOrdered
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
    bestYearAvg,
  };
}
