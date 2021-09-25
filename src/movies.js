// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrOfMovies) {
  let allDirectorsArray = []
  let allDirectorsArrayUnique = []

  // pushes all directors of arrOfMovies into allDirectorsArray
  arrOfMovies.map(movieEntry => { allDirectorsArray.push(movieEntry.director) })

  // pushes all directors of allDirectorsArray into allDirectorsArrayUnique if not already included
  allDirectorsArray.map(director => {
    if (!allDirectorsArrayUnique.includes(director))
      allDirectorsArrayUnique.push(director)
  })

  return allDirectorsArrayUnique
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrOfMovies) {
  let countOfStevensDramas = []

  countOfStevensDramas = arrOfMovies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))

  return countOfStevensDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrOfMovies) {
  if (!arrOfMovies.length)
    return 0

  let sumOfScores = 0
  let avgScore = 0

  // sums up all movie.score´s to sumOfScores
  //arrOfMovies.map(movieEntry => sumOfScores+=movieEntry.score)  // if all movies have a score
  arrOfMovies.map(movieEntry => {                                 // if a movie doesnt have a score
    if (movieEntry.score)
      sumOfScores+=movieEntry.score
    else
    sumOfScores+=0
  })

  // calculates avgScore
  avgScore = sumOfScores/arrOfMovies.length
  // sets the decimal point to 2 after comma | TypeCast to Number, because toFixed returns a String
  avgScore = Number(avgScore.toFixed(2))

  return avgScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  let avgScoreOfDramas = 0
  let allDramaMovies = []

  allDramaMovies = moviesArr.filter(movieEntry => movieEntry.genre.includes("Drama"))
  avgScoreOfDramas = scoresAverage(allDramaMovies)

  return avgScoreOfDramas
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let moviesSortByYear = JSON.parse(JSON.stringify(moviesArr))

  // because a normal sort would just sort through a.year and ignore the title, the normal sort was added again, if the year
  // is the same. It checks now for a/b.title and switches the obj.entry accordingly - looks like a mess though
  moviesSortByYear.sort((a, b) => {
    if (a.year < b.year) return -1; // a.year is less than b.year
    if (a.year > b.year) return 1; // aa.year is greater than b.year
    if (a.year === b.year){
      if (a.title < b.title) return -1; // a.title is less than b.title
      if (a.title > b.title) return 1; // a.title is greater than b.title
      if (a.title === b.title) return 0; // a.title equals b.title
    }
  })

  return moviesSortByYear
}

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
    bestYearAvg,
  };
}
