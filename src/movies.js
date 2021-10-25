const movies = require("./data")
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(eachMovie => eachMovie.director)
  
  const allDirectorsClean = [... new Set(allDirectors)]

  return allDirectorsClean
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaFilms = movies.filter(eachMov => eachMov.director === 'Steven Spielberg' && eachMov.genre.includes('Drama')
  )
  return spielbergDramaFilms.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0
  
  const scoresSum = movies.reduce((acc, eachMov) => {
    if (eachMov.score === undefined) return acc
    return acc + eachMov.score
  }, 0)

  const averageScores = parseFloat((scoresSum / movies.length).toFixed(2))

  return averageScores
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) return 0 
  
  const allDramaFilms = movies.filter(eachMov => eachMov.genre.includes("Drama"))

  if (allDramaFilms.length === 0) return 0

  const dramaScoresSum = allDramaFilms.reduce((acc, eachDramaMov) => {
    if (eachDramaMov.score === undefined) return acc
    return acc + eachDramaMov.score
  }, 0)

  const avDramaScores = parseFloat((dramaScoresSum / allDramaFilms.length).toFixed(2))

  return avDramaScores
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = [... movies]

  const orderedByYear = moviesCopy.sort((a, b) => {
    if (a.year === b.year) return a.title.localeCompare(b.title)
    return a.year - b.year
  })

  return orderedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy2 = [... movies]

  const orderedMovAlphabetically = moviesCopy2.sort((a, b) => {
    return a.title.localeCompare(b.title)
  })

  const orderedTitles = []
  orderedMovAlphabetically.forEach((movie) => {
    orderedTitles.push(movie.title)
  })

  if (orderedTitles.length > 20) return orderedTitles.slice(0, 20)
  return orderedTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function getMins(movie) {
  let movieCopy = { ...movie };
  let hours = 0;
  let mins = 0;

  let durationInMins = movieCopy.duration.split(' ');

  hours = parseInt(durationInMins[0]);
  durationInMins[1] ? mins = parseInt(durationInMins[1]) : mins = 0
  
  let totalDuration = hours * 60 + mins;

  movieCopy.duration = totalDuration;
  return movieCopy;
}

function turnHoursToMinutes(movies) {
  let moviesInMinuts = movies.map((movie) => getMins(movie));
  return moviesInMinuts;
}

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
