// The `movies` array from the file `src/data.js`.

const movies = require('../src/data');




// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(arr) {
  let listOfDirectors = arr.map((item) => item.director);
  return listOfDirectors
}

// console.log('getAllDirectors:', getAllDirectors(movies))





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(array) {
  const filteredMovies = array.map(movie => movie).filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return filteredMovies.length
}

console.log('howManyMovies:', howManyMovies(movies))




// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(array) {

  if (array.length === 0) {
    return 0
  }
  
  const sum = array.reduce((acc, movie) => acc + movie.score, 0)
  const avg = sum/array.length
  return parseFloat(avg.toFixed(2))
}


console.log('scoresAverage:', scoresAverage(movies))




// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(array) {
  const allGenres = array.map((item) => item.genre)
  const dramaGenre = allGenres.filter(genre => genre.includes ('Drama'))

  if (dramaGenre.length === 0) {
    return 0
  }

  const filteredMovies = array.filter(movie => movie.genre.includes('Drama'))
  const sum = filteredMovies.reduce((acc, movie) => acc + movie.score, 0)
  const avg = sum/filteredMovies.length
  return parseFloat(avg.toFixed(2))
}



console.log('dramaMoviesScore:', dramaMoviesScore(movies))

// let test = array.map() 
// créer un array avec tous les genres et faire .includes

//   for ( let i = 0; i < array.length; i++){
//     if (!array[i].genre.includes('Drama')){
//       return 0
//     }
//   }





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(array) {
  const newArray = JSON.parse(JSON.stringify(array))
  return newArray.sort((a, b) => {
    return a.year - b.year;
  });
}

console.log('orderByYear:', orderByYear(movies))





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

  const newArr = array.map(a => a.title);
  const sortedArr = newArr.sort((a, b) => a.localeCompare(b));
  const slicedArray = sortedArr.slice(0, 20);
  return slicedArray

   
}


console.log('orderAlphabetically:', orderAlphabetically(movies))





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
