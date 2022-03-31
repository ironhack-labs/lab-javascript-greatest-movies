// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  let newArray = array.map( element => element.director)
  return newArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let spielbergArray = array.filter( element => (
    element.director === "Steven Spielberg" && element.genre.includes('Drama')))
  if (spielbergArray.length > 0){
    return spielbergArray.length
  } else {
    return 0
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  const newArray = array.filter( element => {
    return typeof element.score === 'number'
  })
  const totalScore = newArray.reduce( (acc, initialValue) => {
    return acc + initialValue.score
  },0)
  if (array.length > 0){
    return Math.round((totalScore/array.length) *100) / 100
  } else {
    return 0
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const newArray = array.filter( element => {
    return element.genre.includes('Drama')
  })
  const totalScore = newArray.reduce( (acc, initialValue) => {
    return acc + initialValue.score
  },0)
  if (totalScore === 0){ 
    return 0 
  } else {
  return Math.round((totalScore/newArray.length) *100) / 100
} 
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let firstArray = []
  array.forEach(element => {
    firstArray.push(element)
  })
  firstArray.sort( (a, b) => a.year - b.year)
  let year = 0
  firstArray.map( element => {
    if (!year === element.date){
    year = element.date }
  })
  return firstArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let firstArray = []
  array.forEach( element => {
    firstArray.push(element.title)
    })
    firstArray.sort()
  let secondArray = []
  if (firstArray.length > 20){
    for (let i = 0; i < 20; i++){
      secondArray.push(firstArray[i])
    } 
  } else {
    for (let i = 0; i < firstArray.length; i++){
      secondArray.push(firstArray[i])
    }
  }
  secondArray.sort()
  return secondArray

  
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {

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
