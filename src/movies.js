// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const director = arr.map(function (arr) {
    return arr.director
  });
return director
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergDramas = arr.filter(function(arr){
    return (arr.director === 'Steven Spielberg' && arr.genre.includes('Drama'))
  })
  return spielbergDramas.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce(function(acc, value){
    return acc + (value.score || 0)
  }, 0)
  return parseFloat((sum / arr.length).toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramas = movies.filter(function (movie){
    return movie.genre.includes('Drama')
  });
  if (dramas.length === 0) {
    return 0;
  }
  let dramasScore = dramas.reduce(function (acc, value){
    return acc + value.score
  }, 0)
  let dramasScoreAverage = parseFloat((dramasScore / dramas.length).toFixed(2))
  return dramasScoreAverage
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyMovies = JSON.parse(JSON.stringify(movies))
  const ascendingOrder = copyMovies.sort(function (a, b){
    return a.year - b.year
  })
  const ascendingOrderAlph = ascendingOrder.sort(function (a, b){
    if (a.year === b.year)
    return a.title.localeCompare(b.title)
  })
  return ascendingOrderAlph
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let copyAlphabetically = JSON.parse(JSON.stringify(movies))
  const AlphabeticOrder = copyAlphabetically.sort(function (a, b){
    return a.title.localeCompare(b.title)
  })
  let titles = AlphabeticOrder.map(function (movie){
    return movie.title
  })
  return titles.splice(0, 20)
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
