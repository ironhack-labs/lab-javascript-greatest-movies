// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require('./data.js');
const data = require('./data.js')

function getAllDirectors(arr) {
  let newArr = arr.map(function(movie) {
    return movie.director
  })
    return newArr
}

//return arr.map(movie => movie.director)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  if (!arr.length){
    return 0
  }
const theSpielMov = arr.filter((person) => {
  return person.director === 'Steven Spielberg' && person.genre.includes('Drama')
});
return theSpielMov.length;
}
// return arr.filter(person => person.director === 'Steven Spielberg' && 
// person.genre.includes('Drama')
// });
// return theSpielMov.length;
//}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr){
//  if (arr.length === 0) return 0
    
  return Number((arr.reduce((totalScore, movie)=> {
    if (movie.score) return totalScore + movie.score
    return totalScore
  //return totalScore += movie.score || 0
  }, 0) / arr.length).toFixed(2)) || 0
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
//  if (arr.length === 0) return 0

const drama = arr.filter(function(arr){
  return (arr.genre.includes("Drama"))
})
const theScores = drama.reduce(function(accum, currentValue){
  return accum + currentValue.score
}, 0)

const average = theScores / drama.length
const averageAgain = Math.round(average * 100)/100
return averageAgain
}

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
