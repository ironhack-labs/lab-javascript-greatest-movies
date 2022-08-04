// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((moviesArray) => moviesArray.director);
    return allDirectors;
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const bestSpielbergDrama = moviesArray.filter((moviesArray) => {
      const directedBySpielberg =
      moviesArray.director === 'Steven Spielberg';
      const dramaMovie = moviesArray.genre.includes('Drama');
      return directedBySpielberg && dramaMovie; /* In this case it doesn't make 
      sense to use "if" because if one of the variables doesn't exist it will be already zero, right? */
    });
    return bestSpielbergDrama.length;
  }
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const averageMoviesRating = moviesArray.reduce((acc, currentScore) => {return acc + currentScore.score;}, 0) 
    / moviesArray.length;
    const averageRounded = Math.round(averageMoviesRating * 100) / 100;
    if (moviesArray.length === 0) {return 0; }
    return averageRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const averageDramaMovie = moviesArray.filter((moviesArray) => {
    const dramaMovie = moviesArray.genre.includes('Drama');}) / moviesArray.drama.length; /* Why doesn't it work like the iteration 3? 
    Shold I do this step separated in this case so that dramaMovie is declared? */
    return averageDramaMovie;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
