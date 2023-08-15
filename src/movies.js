// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((item) => item.director);
    return allDirectors;
    };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const steven = moviesArray.filter((item) =>
     item.director=== "Steven Spielberg" && item.genre.includes('Drama')
    );
   return steven.length;
  };

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
      const sumOfScores = moviesArray.reduce(function(a, b) { 
        if(!b.score) return a
        return a + b.score
    }, 0);
      const avg = Math.round(sumOfScores/moviesArray.length*100)/100;
      return avg;
  };

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((item) =>
     item.genre.includes('Drama'));
  if(dramaMovies.length === 0) {
    return 0
  }
  const sumOfScores = dramaMovies.reduce(function(a, b) { 
    if(!b.score) return a
    return a + b.score
}, 0);
    const avg = Math.round(sumOfScores/dramaMovies.length*100)/100;
    return avg;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sorted = moviesArray.slice().sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title); 
      }
    });
    
    return sorted;
  };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sorted = moviesArray.slice().sort((a, b) => {
      return a.title.localeCompare(b.title); 
    });
    
    if (sorted.length > 20) {
      const newSorted = sorted.slice(0, 20);
      return newSorted.map(movie => movie.title); 
    } else {
      return sorted.map(movie => movie.title); 
  }
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
