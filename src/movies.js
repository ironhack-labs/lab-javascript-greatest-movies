// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map(function(element){
    return element.director
  })
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const dramaMovies = movies.filter(element => element.director === 'Steven Spielberg' && element.genre.indexOf('Drama') !==-1)
  
    return dramaMovies.length;     
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

if (movies.length === 0) {return 0}

const movieScores = movies.filter(element => element.score)

const average = movieScores.reduce((acc, element) => acc + element.score, 0) / movieScores.length;
  
return +average.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const filterDrama = movies.filter(element => element.genre.indexOf('Drama') !==-1)

  const filterDramaByScore = filterDrama.filter(element => element.score)

  const reduceDramaByScore = filterDramaByScore.reduce((acc, element) => acc + element.score, 0) / filterDrama.length;

  return +reduceDramaByScore.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
  const sortingByYear = movies.sort(function(a, b){
        return a.year - b.year;
        
  })
return sortingByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const sortingByYear2 = movies.sort(function(a, b){
    return a.title - b.title;
  })
  return sortingByYear2
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}



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
