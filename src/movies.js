// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((currentMovie) => currentMovie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        const filteredMovies = moviesArray.filter((movie) =>
          movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
        );
        return filteredMovies.length;
      }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
      const totalScore = moviesArray.reduce((accumulator, currentMovie) => {
        if (currentMovie.score) {
          return accumulator + currentMovie.score;
        }
        return accumulator;
      }, 0);
      const averageScore = totalScore / moviesArray.length;
      return parseFloat(averageScore.toFixed(2));
    }
    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
        const dramaMovies = moviesArray.filter((currentMovie) => {
          return currentMovie.genre.includes('Drama');
        });
        return scoresAverage(dramaMovies);
      }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
        const sortedArray = moviesArray.slice();
        sortedArray.sort((a, b) => {
          if (a.year === b.year) {
            return a.title.localeCompare(b.title);
          }
          return a.year - b.year;
        });
        return sortedArray;
      }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedArray = moviesArray.slice();
    sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    return sortedArray.slice(0, 20).map(movie => movie.title);
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
