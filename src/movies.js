// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
            const allDir = moviesArray.map((element) => element.director);
            return allDir;
          }
        
          

  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) { 
        return 0
    };
    let counter = 0;
    moviesArray.filter((element) => {
    if (element.director === 'Steven Spielberg' && element.genre.includes("Drama")) {
        counter++
    }
    });
    return counter;

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    let scoreTotal =
      moviesArray.filter(mov => mov.score).reduce((acc, numScore) => acc + numScore.score, 0) /
      moviesArray.length;
    return Math.round(scoreTotal * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allScores = moviesArray.filter((mov) => {
      if (mov.genre.includes("Drama")) {
        return mov;
      }
    });
  
    if (!moviesArray.length || !allScores.length) {
      return 0;
    } else if (moviesArray.length === 1) {
      return moviesArray[0].score;
    }
  
    let scoreTotal =
      allScores.reduce((acc, numScore) => acc + numScore.score, 0) /
      allScores.length;
    return Math.round(scoreTotal * 100) / 100;
  }
  


console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
