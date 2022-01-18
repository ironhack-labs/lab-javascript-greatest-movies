// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const filteredDirectors = movies.map(function(names){
    return movies.names
  })
  return filteredDirectors
}


//correction
/*function getAllDirectors(movies) {
  const filteredDirectors = movies.map(function(names){
    return movies.names
  })
  return filteredDirectors
}
*/
// get duplicate
//by using filter
//by using set
//[...new Set(directors)]




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//check steven films
// check steven drama films

function howManyMovies(movies) { 
const stevenFilms = movies.filter(function(movie){
  if(movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")){
    return true
  }
})
return stevenFilms.length
}


//correction



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumScores = movies.reduce(function(global, scores){
    return global + scores.score
  }, 0)
  const averageScores = sumScores / movies.length
  const averageScoresDecimals = Math.round(averageScores * 100)/100
  return averageScoresDecimals
}

//correction
//function scoresAverage(movies){
  /*if (movies.length === 0){
    return 0;
  }
  const avgRate = movies.reduce(function(sum, movie){
    if (movie.score === 0 || movie.score === "undefined"){
      movie.score = 0;
    }
    return sum + movieScore
  }, 0) / movies.length;
  return Number(avgRate.toFixed(2));
}
*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const DramaFilms = movies.filter(function(movie){
    return (movie.genre.includes("Drama"))
  })
  const sumScores = DramaFilms.reduce(function(global, scores){
    return global + scores.score
  }, 0)
  const averageScores = sumScores / DramaFilms.length
  const averageScoresDecimals = Math.round(averageScores * 100)/100
  return averageScoresDecimals
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let result = []
  const orderedMovies = movies.sort(function(a, b){
    if (a.year === b.year){
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })
  for(i = 0; i < orderedMovies.length; i++){
    console.log(result.push(movies[i]))
  }
  return result
}

//users.sort((a, b) => a.firstname.localeCompare(b.firstname))

//correction
/* function orderByYear(movies){
  const sorted =JSON.parse(JSON.stringify(movies)).sort(function(a, b){
    if(a.year !== b.year){
      return a.year - b.year;
    }else{
      return a.title.localeCompare(b.title);
    }
  })
  return sorted
}
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let result = []
  for(i = 0; i < movies.length; i++){
    console.log(result.push(movies[i]))
  }
  const orderAlphabet = result.sort(function(a, b){
    return a.title.localeCompare(b.title)
  })
  return orderAlphabet.slice(0, 20)
}

//order moovies alphabetical
//return only first 20 values

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
