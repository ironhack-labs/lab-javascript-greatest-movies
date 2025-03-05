// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesByStevenSpielberg = moviesArray.filter((movie) => {
      const isMovieDirectedByStevenSpielberg =
        movie.director === 'Steven Spielberg';
      const isMovieADrama = movie.genre.indexOf('Drama') >= 0;
      return isMovieDirectedByStevenSpielberg && isMovieADrama;
    });
    return dramaMoviesByStevenSpielberg.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const sumScores = moviesArray.reduce((acc, curr) => {
      if (curr.score) {
        return curr.score + acc;
      } else {
        return acc;
      }
    }, 0);
  
    const avg = Number((sumScores / moviesArray.length).toFixed(2));
    return avg;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    const dramaAvg = scoresAverage(dramaMovies);
    return dramaAvg;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const deepCopyArr = JSON.parse(JSON.stringify(moviesArray));
    const arr = [10, 2, 1, 5];
    const simpleSort = arr.sort((a, b) => a - b);
    console.log("here is our simple sort", simpleSort);
  
    const sorted = deepCopyArr.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          0;
        }
      }
    });
    return sorted;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyArr = JSON.parse(JSON.stringify(moviesArray));
    const sortedAlpha = copyArr
      .sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      })
      .map((movie) => movie.title)
      .slice(0, 20);
    return sortedAlpha;
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
