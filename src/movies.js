// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function(element){
    return element.director;
  })
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const result = moviesArray.filter(function(movie){
    if(movie.director === "Steven Spielberg" && (movie.genre.indexOf("Drama") > -1)) {
      return true;
    }
  })
  return result.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const newArray = moviesArray.filter(function(movie){
    return movie.score; 
  })

  const result = newArray.reduce(function(accumulator, currentValue) {
    // let totalNum = 0
    if(currentValue.score > 0) {
      accumulator + currentValue.score
    } else {
      accumulator 
    }
  return accumulator + currentValue.score;
  //  console.log(totalNum)

  }, 0 )
  console.log(result)
  // const resultInInt = Number(result)
  // console.log(resultInInt)
  // let averageResult = resultInInt / moviesArray.length
  // // console.log(averageResult);
  // averageResult = averageResult.toFixed(2)
  
  if(result > 0) {
    let averageResult = result / moviesArray.length
     averageResult = averageResult.toFixed(2)
    //  console.log(averageResult);
     averageResult = Number(averageResult)
     return averageResult;
    // console.log(averageResult)
  } else {
    return 0;
  }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const newArray = moviesArray.filter(function(movie){
    return movie.genre.indexOf("Drama") > -1
  })

  console.log(newArray)
  
  const result = newArray.reduce(function(accumulator, currentValue) {
    // let totalNum = 0
    if(currentValue.score > 0) {
      accumulator + currentValue.score
    } else {
      accumulator 
    }
  return accumulator + currentValue.score;
  //  console.log(totalNum)

  }, 0 )

  if(result > 0) {
    let averageResult = result / newArray.length
     averageResult = averageResult.toFixed(2)
    //  console.log(averageResult);
     averageResult = Number(averageResult)
     return averageResult;
    // console.log(averageResult)
  } else {
    return 0;
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 const copy = [...moviesArray]
 copy.sort(function(a,b){
  return a.year - b.year || a.title.localeCompare(b.title)
 })
return copy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



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
