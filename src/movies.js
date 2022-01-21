const movies = require('./data.js');
const data = require('./data.js')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
const names = movies.map((directorsName) =>  {
  return directorsName.director})
return names;
}



//console.log(getAllDirectors())
//console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


  function howManyMovies(arr) {

    if (!arr.length){
      return 0
    }
  const stevenFilms = arr.filter((dramas) => {
    return dramas.director === ('Steven Spielberg') && dramas.genre.includes('Drama')
  });
  return stevenFilms.length;
  }

  //console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  numbers = arr.length;
  if (!arr.length){
    return 0
  }
  const total = arr.reduce((num1, num2) => {
    if (!num2.score) {
      return num1 + num2
    } 
    return num1 + num2.score
}, 0)

return Math.round(total/numbers * 100)/100
}

//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

if (!arr.length) {
  return 0
}
const isDrama = arr.filter((movie) => {
if (movie.genre.includes('Drama'))
  return movie
})

const sorted = isDrama.map((directorsName) =>  {
  return directorsName.score
})

const total = sorted.reduce((num1, num2) => {
  
    return num1 + num2
}) 
//console.log(isDrama)
console.log(sorted)
console.log(total)
return total/sorted.length;

}
  

//console.log(dramaMoviesScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

const result = arr.sort((a, b) => {
  if (a.year === b.year)
  arr.sort((a, b) => a.title.localeCompare(b.title))
  return a.year - b.year});

return result
}


//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

const sorted = arr.sort((a, b) => {
 if (a.title < b.title) { return -1;}
 if (a.title > b.title) { return 1;}
 return 0
})

}



console.log(orderAlphabetically(movies))



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
