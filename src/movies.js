const movies = require('./data.js')


// Iteration 1: 

function getAllDirectors(arr) {
  const newArr = arr.map(elem => {
    return elem.director
  })
  return newArr;
}

// Iteration 2

function howManyMovies(arr) {
  const newArr = arr.filter(elem =>
    elem.genre.includes('Drama') && elem.director.includes('Spielberg')
  )
  console.log(newArr.length)
  return newArr.length
}

// Iteration 3: 

function scoresAverage(arr) {
  const newArr = arr.filter(elem => elem.score !== "undefined")
  if (newArr.length === 0) { return 0 }

  const average = newArr.reduce((acc, eachScore) => { return acc + eachScore }) / newArr.length
  if (elem.score == 8 && (elem + 1).score == 8) { return average }
  if (elem.score == "undefined") { return average }

  const roundedAverage = parseFloat(average).toFixed(2);
  return roundedAverage
}

// Iteration 4: 


function dramaMoviesScore(arr) {
  const dramaArray = arr.filter(elem => elem.genre.includes('Drama'))
  if (dramaArray.length === 0) { return 0 }
  if (dramaArray.length >= 1) { return dramaArray.elem.score }
  const averageDrama = dramaArray.reduce((acc, eachScore) => { return acc + eachScore }) / dramaArray.length

  const roundedAverage = parseFloat(dramaArray).toFixed(2);
  return roundedAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  arr.sort((a, b) => { return [a - b] })
  return sortedArray.elem.title
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

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

