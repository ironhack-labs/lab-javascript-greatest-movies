// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
"use strict";
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
    if (moviesArray.length === 0) {return 0; };
    return averageRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovie = moviesArray.filter((moviesArray) => { return moviesArray.genre.includes('Drama');}); 
    const averageScoreDrama = scoresAverage(dramaMovie);
    return averageScoreDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const deepCopyMovies = JSON.parse(JSON.stringify(moviesArray));
  const filmsAscendingYear = deepCopyMovies.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  return filmsAscendingYear;
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const deepCopyMovies = JSON.parse(JSON.stringify(moviesArray));  /* I created the same constant in the iteration 5. 
  It works because of the scope, right? Should I better just create a copy with another name? 
  Is deepCopyMovies a copy of the  moviesArray or a copy of the result array from iteration 5 (after applying sort?  */
  const sortedMovies = deepCopyMovies.sort((a, b) => {return a.title.localeCompare(b.title)});
  const filmsByTitle = sortedMovies.map((moviesArray) => moviesArray.title);
  return filmsByTitle.slice(0,20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { /* I got crazy here. I don't know even if what I did makes any sense :-D  */
  const deepCopyMovies = JSON.parse(JSON.stringify(moviesArray));
  const filmsDuration = deepCopyMovies.map((moviesArray) => {return moviesArray.duration});
  filmsDuration.split(' ');
  let minutes = 0;
  for (let time of filmsDuration) {
    if (time.includes('h')) {
      minutes += parseInt(time) * 60;
    } else {
      minutes += parseInt(time);
    }
  }
  return [minutes];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
