// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(movie) {
        return movie.director
    });
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movieDirector= moviesArray.filter(function(movie) {
        return movie.director=== "Steven Spielberg" && movie.genre.includes("Drama")
    });
    return movieDirector.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      };
    const scoreSum = moviesArray.reduce(function(acc, movie) {
        return acc + (movie.score || 0);
      }, 0);
      
      const averageScore = scoreSum / moviesArray.length; 
      return Math.round(averageScore * 100) / 100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie) {
        return movie.genre.includes("Drama");
      });
      const totalScore = dramaMovies.reduce(function(acc, movie) {
          return acc + (movie.score || 0);
        }, 0);
      
        if (dramaMovies.length === 0) {
          return 0;
        };
      const averageScore = totalScore / dramaMovies.length;

return Math.round(averageScore * 100) / 100;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice().sort(function(a, b) {
        if (a.year < b.year) {
          return -1;
        } else if (a.year > b.year) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
    
      return sortedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
