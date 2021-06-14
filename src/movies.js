// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Arrow function version
const getAllDirectors = (arr) => arr.map(arrayElement => arrayElement.director)

// Traditional function version
// function getAllDirectors(array) {
//   let directorArray = array.map((arrayElement) => {
//     return arrayElement.director
//   }) 
//   return directorArray
//} //The getAllDirectors() function will receive (array), the .map() function will be applied to array, and arrayElement function will 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let tempArray = arr.filter(drama => drama.director === 'Steven Spielberg' && drama.genre.includes('Drama'))
  return tempArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  // function round(num) {
  //   var m = Number((Math.abs(num) * 100).toPrecision(15));
  //   return Math.round(m) / 100 * Math.sign(num);
  // }
  arr.reduce((acc, num) => {
    //console.log(number.score)
    return acc + num.score;
  }, 0)
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

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