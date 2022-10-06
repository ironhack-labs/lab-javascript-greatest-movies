// Iteration 1: All directors? - Get the array of all directors.

/* _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
How could you "clean" a bit this array and make it unified (without duplicates)? */

function getAllDirectors(moviesArray) {
    return moviesArray.map((movies) => {
        return movies.director;
      });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movies) => {
        return (
          movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
        );
      }).length;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } 
    let scoredMovies = moviesArray.filter((films) => films.score >= 0);
    let totalScore = scoredMovies.reduce((acc, film) => acc + film.score, 0);
    let avgScore = totalScore/scoredMovies.length;

    return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (movies) {
        return movies.genre.includes("Drama");
      });
    
      return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyMoviesArray = moviesArray.map((element) => element);
    let sortedCopy = copyMoviesArray.sort((a, b) => a.year - b.year);
   
    /*  if (a.year === b.year) {
        copyMoviesArray = (a.title).localeCompare(b.title);
    } */

    return sortedCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const onlyTitles = moviesArray.map(function (movies) {
        return movies.title;
      });
    
      onlyTitles.sort(function (a, b) {
        return a.localeCompare(b);
      });
    
      const top20 = onlyTitles.splice(0, 20);
    
      return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

/* duplicate movies
    remove h, space and min
    multiply hour *60
    add the minutes */


    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
