// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(directors =>{
    return directors.director
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let dramas = arr.filter(drama => {
    if (drama.genre.includes('Drama')){
    return drama.director.includes('Steven Spielberg')
  }})
  let count = 0;
  for (item in dramas){
    count ++
  }
  return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length==0){
    return 0
  }
  else{
  let total = arr.reduce(function (sum, movie){
    if (movie.score ==='' || movie.score === undefined){
      return sum
    }else{
    return sum + movie.score
  }},0)
  return Math.round(total/arr.length*100)/100
}}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length==0){
    return 0
  }
  else {
    let allTheDramas = arr.filter(item => item.genre.includes('Drama'))
    if (allTheDramas.length==0){
      return 0
    }
    else{
    let dramaScores = allTheDramas.reduce(function (num,drama){
      return num + drama.score
    },0)
    return Math.round(dramaScores/allTheDramas.length*100)/100
  }}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return [...arr].sort((a,b)=>{
    if (a.year !== b.year){
      return a.year-b.year
    }
    else{
      return a.title.localeCompare(b.title)
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let titleOnly = arr.map(object => object.title)
  let sortedTitle = titleOnly.sort((a,b)=>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )
  let firstTwenty = sortedTitle.slice(0,20)
  
  return firstTwenty
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
