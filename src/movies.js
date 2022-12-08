// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map (movies => movies.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    spilberDrama = moviesArray.filter (movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'))
    return spilberDrama.length
}
    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(!moviesArray.length){
    return 0
  }
  const sum = moviesArray.reduce((acc, el) => acc + (el.score || 0), 0);
  return Math.round ((sum / moviesArray.length) * 100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const onlyDrama = moviesArray.filter((m) => m.genre.includes("Drama"));
  return scoresAverage(onlyDrama);
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray
    .map((m) => m)
    .sort((a, b) => {
      if (a.year === b.year){
        return a.title.localeCompare(b.title);
      } else {
        return a.year - b.year
      }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map ((movie) => movie.title)
    .sort()
    .slice (0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



