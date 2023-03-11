// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    var directors = movies.map(function(movie) {
      return movie.director;
    });
  
    var uniqueDirectors = directors.filter(function(director, index) {
      return directors.indexOf(director) === index;
    });
  
    return uniqueDirectors;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let SpielbergDramas = movies.filter(function(movie) {
      return (
        movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1
      );
    });
  
    return SpielbergDramas.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let totalScore = movies.reduce(function(sum, movie) {
    if (movie.score) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);

  let averageScore = totalScore / movies.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    let dramaMovies = movies.filter(function(movie) {
      return movie.genre.includes('Drama');
    });
  
    return scoresAverage(dramaMovies);
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let sortedMovies = [...movies].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  
    return sortedMovies;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let sortedMovies = [...movies].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  
    let movieTitles = sortedMovies.map(movie => movie.title);
  
    return movieTitles.slice(0, 20);
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}