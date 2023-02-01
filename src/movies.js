// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map(film => film.director);
    return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spilMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
  return spilMovies
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let count = 0;
    for(let movie of moviesArray){
        if (movie.hasOwnProperty("score")) {
            count += movie.score;
          }
    }
    
    let average = count/moviesArray.length
    let fixAverage = average.toFixed(2)
    if(moviesArray.length == 0){
        return 0
    }
   else{
    return Number(fixAverage) }
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaScoreTotal = 0;
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    for(let movie of dramaMovies){
      dramaScoreTotal += movie.score
    }
  let dramaScoreNotFixed = (dramaScoreTotal/dramaMovies.length).toFixed(2)
  let dramaScoreFixed = Number(dramaScoreNotFixed)
  if(dramaMovies.length == 0){
    return 0
  }
  return dramaScoreFixed
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
