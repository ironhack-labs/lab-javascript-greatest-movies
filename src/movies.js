// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors() {
  let moviedirectors = movies.map(function(e){
    return e.director
  })
return moviedirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  let dramaMoviesBySteveSpielberg = movies.filter(function(el){
    return el.director == 'Steven Spielberg' && el.genre.includes('Drama') == true
  })
  return dramaMoviesBySteveSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  let averageScore = movies.map(function(el){
    return el.score

  })
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function scoresAverage() {
  let averageScore = movies.map(function(el){
    return el.score})
  
  let countofscore = averageScore.length
  
  let summedscore = averageScore.reduce(function(a,b){
    return a+b
  })
  return (summedscore/countofscore).toFixed(2)
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  sortedArr = movies.sort(function(a,b){
    return a.year - b.year
  })
  return sortedArr
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  orderedTitles = movies.sort(function(a,b){
    return a.title - b.title
  })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function orderAlphabetically() {
  let onlytitles = movies.map(function(el){
    return el.title
  })   
  orderedtitles = onlytitles.sort()
  return orderedtitles.slice(0,20)
}

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
