// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return movies.map((movie) => movie.director);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        return movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
      }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
    function scoresAverage(moviesArray) {
        if (movies.length === 0) {
          return 0;
        }
        
        const totalScores = movies.reduce((accumulator, movie) => {
          if (typeof movie.score === 'number') {
            return accumulator + movie.score;
          } else {
            return accumulator;
          }
        }, 0);
        
        const averageScore = totalScores / movies.length;
        console.log(averageScore);
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
    
    if (dramaMovies.length === 0) {
      return 0;
    }
    
    const totalScores = dramaMovies.reduce((accumulator, movie) => accumulator + movie.score, 0);
    const averageScore = totalScores / dramaMovies.length;
  
    return parseFloat(averageScore.toFixed(2));
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = movies.slice().sort((a, b) => a.year - b.year);
    return sortedMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedTitles = movies
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((movie) => movie.title)
      .slice(0, 20);
  
    return sortedTitles;
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
