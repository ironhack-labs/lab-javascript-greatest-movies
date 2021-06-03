// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let allDirectors = movies.map((movie) => movie.director)
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {{
  let dramaSpielberg = movies.filter((elem) => elem.genre.includes("Drama")&& elem.director == "Steven Spielberg")
  return dramaSpielberg.length;
}}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies == 0){
    return 0;
  }
  let score = movies.map((movie) => movie.score)
  let totalscore = score.reduce((sum, currentValue) =>  currentValue ? sum + currentValue : sum, 0 ) / movies.length ;
  let twoDecimals = parseFloat(totalscore.toFixed(2))
  return twoDecimals;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 
  let allDramaMovies = movies.filter((elem) => elem.genre.includes("Drama"))
  if(allDramaMovies == 0){
    return 0;
  }
  let allDramaScores = allDramaMovies.map((elem) => elem.score)
  let averageScore = allDramaScores.reduce((sum, score) => score ? sum + score : sum, 0) / allDramaScores.length;

  let twoDecimals = parseFloat(averageScore.toFixed(2))
  return twoDecimals;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyArray = JSON.parse(JSON.stringify(movies))
  copyArray.sort((firstEl, secondEl) => {
    if(firstEl.year < secondEl.year){
      return -1;
    }
    else if(firstEl.year > secondEl.year) {
      return 1;
    }
    else if (firstEl.title < secondEl.title){
      return -1;
    }
    else if (firstEl.title > secondEl.title){
      return 1
    }
    else {
      return 0
    }
  })
  return copyArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {  
  let copyArray = JSON.parse(JSON.stringify(movies))
  copyArray.sort( (firstEl,secondEl) => {
    if (firstEl.title < secondEl.title) {
      return -1
    } 
    else if (firstEl.title > secondEl.title) {
      return +1
    }
    else {
      return 0
    }
  })
  let movieArray = copyArray.map((movie) => movie.title)
  return movieArray.slice(0,20)
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
