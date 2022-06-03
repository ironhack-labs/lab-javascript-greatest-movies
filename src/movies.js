// const movies = require("./data");

//const movies = require("./data");

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map(el => el.director)
  return allDirectors
}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergMovies = arr.filter(el => el.director === 'Steven Spielberg' && el.genre.includes('Drama'))
  return spielbergMovies.length;
}
//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){
    return 0;
  }
  let scores = arr.reduce(function(sum, val){
    if(val.score === '' || val.score === undefined){
      val.score = 0;
    }
    return  (sum + val.score)
  }, 0)
  let average = scores /arr.length
  return +average.toFixed(2)
}
//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length === 0){
    return 0;
  }
  let dramaMovies = arr.filter(function (el) {
     if (el.genre.includes('Drama')){
       return true;
     } if(el.genre.includes('Drama') === false) {
       return 0;
     }
  })
  let dramaScore = scoresAverage(dramaMovies)
  /* dramaMovies.reduce(function(sum, val){return sum + val.score},0) */
  //let dramaAverage = dramaScores / dramaMovies.length;
  return dramaScore;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let orderingYear = arr.slice().sort(function(a,b){
   return a.year - b.year || a.title.localeCompare(b.title)
  })
  return orderingYear;
}
//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let alphabeticalOrder = arr.slice().sort(function(a,b){
    return a.title.localeCompare(b.title)
  })
  let titles = alphabeticalOrder.map(el => el.title)
  return titles.slice(0,20)
}
//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let moviesInMinutes = arr.map(function (el){
    let convertHour = Number(el.duration.slice(0, el.duration.indexOf('h')) * 60);
    let findMinutes = Number(el.duration.slice(el.duration.indexOf(' ')+1, el.duration.indexOf('m')));
    let together = convertHour + findMinutes;
    /* const s = h.slice(0, h.indexOf('h'))
       const m = h.slice(h.indexOf(' ')+1, h.indexOf('m')) */
      el.duration = together;
      return el;
  })
  return moviesInMinutes
}
//console.log(turnHoursToMinutes(movies))

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
