// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map(function(movieObject){
    return movieObject.director})
    return allDirectors;
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrFilms) {
  let arrFiltByDirector = arrFilms.filter(function(Film){
    return Film.director === 'Steven Spielberg'
  })

let arrFiltByDirectorAndGenre = arrFiltByDirector.filter(function(FilmAgain){
    return FilmAgain.genre.includes('Drama')
  })

return arrFiltByDirectorAndGenre.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrMovies) {
if (arrMovies.length !== 0){
let sum = arrMovies.reduce(function(acc, val) {
  return acc + val.score
}, 0)
console.log(sum);
let avg = sum / (arrMovies.length)
let avgRounded = Number(avg.toFixed(2))
return avgRounded}
else {return 0}}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {

  let arrDramas = moviesArr.filter(function(movie){
    return movie.genre.includes("Drama")}) 
  
  let scoreArr= arrDramas.map(function(arrItem){
    return arrItem.score})

  let sum = scoreArr.reduce(function(acc, val){
    return acc + val
    },0);
  
  let avgRounded = Number((sum / (scoreArr.length)).toFixed(2))
  
    return avgRounded
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let sorted19Az = moviesArr.sort(function(a, b) {
    if (a.year == b.year){
    return a.title.localeCompare(b.title)
    }
  return a.year - b.year})
  return sorted19Az
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {  
    const arrOfTitles = arr.map(function(movie){
      return movie.title
    });
    const arrTitlesAlphab = arrOfTitles.sort(function(a,b){
     return a.localeCompare(b)
    })
    const arrSpliced = arrTitlesAlphab.splice(0,20)
  return arrSpliced
}

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
