// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsNamesArr = movies.map(function(movie){
    return movie.director
  })
  return directorsNamesArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moies) {
  const spielbergDrama = moies.filter (function (dramaMovie) {
   return dramaMovie.director === 'Steven Spielberg' && dramaMovie.genre.includes('Drama')
  })
  return spielbergDrama.length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  const scores = movies.reduce(function (sum, movie) {
    return sum + (movie.score || 0 )
  }, 0) / movies.length
  return Number(scores.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMovie = array.filter(function (movie) {
    return movie.genre.includes('Drama')
  });
  return scoresAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedByYears = JSON.parse(JSON.stringify(movies)).sort(function (a, b) {
    if (a.year !== b.year) return a.year - b.year
     else return a.year > b.year ? 1 : -1
   } )
   return sortedByYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(function (movie) {
    return movie.title
  })
  const sortedByYears = titles.sort(function(a, b) { 
    return a.localeCompare(b); 
    })
  const result = sortedByYears.slice(0, 20);
    return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {

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
