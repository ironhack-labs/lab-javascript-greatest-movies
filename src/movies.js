// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function (all) 
  {return all.director
  }); return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steven = movies.filter(function (onlySteven) {
if (onlySteven.director === 'Steven Spielberg') {
  return true
}
    return false
}) 
  const stevenDramas = steven.map(function (onlySteven) {
  //if (onlySteven.genre.includes('Drama') { 
    return onlySteven.title  
}) 
  const dramas = steven.filter(function (onlySteven) {
  if (onlySteven.genre.includes('Drama')) {
    return true
}
  return false
})
    return dramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const filteredMovies = movies.map(function (onlyScore) {
    // return onlyScore.score
    return {
      score: onlyScore.score
    }
}) 
  const avgScore = filteredMovies.reduce(function (acc, val) {
     return acc + val.score
   }, 0) 
         const average = avgScore / filteredMovies.length  
         const twoDecimal = parseFloat(average.toFixed(2))
         return twoDecimal
 }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const onlyDramas = movies.filter(function (dramas) {
  return dramas.genre.includes('Drama')
}) 
  const scores = onlyDramas.map(function (dramaScores)
{
    return dramaScores.score
  })  
    const sum = scores.reduce(function(acc, val) {
    return acc + val
  }, 0)
      const average = sum / scores.length
      const twoDecimal = parseFloat(average.toFixed(2))
      return twoDecimal                              
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copiedArr = movies.map(function (newArr){
   return newArr
 }) 
  const sorted = copiedArr.sort(function (a, b) {
  return a.year - b.year
}) 
  return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const first20 = movies.slice(0, 20)
  // const sorted = first20.sort()
  //   return sorted
  const sorted = first20.sort(function(a, b) {
    return a.title.localeCompare(b.title)
  }) 
  const onlyTitles = sorted.map(function (titl) {
    return titl.title
    })
  return onlyTitles
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
