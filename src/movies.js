// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(input) {
  const allDirectors = input.map(element => element.director);
  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(input) {
  const dramaOfSpielberg = input.filter(function(element){
    return element.director === "Steven Spielberg" && element.genre.includes("Drama")
  })
    return dramaOfSpielberg.length;  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(input) {
  if(input.length === 0){
    return 0
  }

  const scores = input.filter(function(element){
    return element.score 
  })

const totalScore = scores.reduce( (total, adding) => {return total + adding.score},0)
let averageScore = totalScore / input.length;
return Math.round(averageScore*100)/100 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(input) {
  
  const scoresDrama = input.filter(function(element){
    return element.genre.includes("Drama") 
  })
  if(input.length === 0 ) {
    return 0
  }
  else if(scoresDrama.length === 0) {
    return 0
  }

const totalScoreDrama = scoresDrama.reduce( (total, adding) => {return total + adding.score},0)
  let averageScore = totalScoreDrama / scoresDrama.length;
  return Math.round(averageScore*100)/100 
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(input) {
  let yearSort = [input]
  yearSort.sort((a, b)=> a.year -b.year);
  return yearSort
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
