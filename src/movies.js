// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}
const directors = getAllDirectors(movies);
console.log(directors);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
        (movie) =>
          movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
      ).length;
}
const spielbergDramaCount = howManyMovies(movies);
console.log(spielbergDramaCount);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const sum = moviesArray.reduce((total, movie) => {
      if (movie.score) {
        return total + movie.score;
      }
      return total;
    }, 0);
  
    const average = sum / moviesArray.length;
    return Number(average.toFixed(2));
  }
  
  const averageScore = scoresAverage(movies);
  console.log(averageScore);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) =>
      movie.genre.includes("Drama")
    );
  
    return scoresAverage(dramaMovies);
  }
  
  const dramaAverageScore = dramaMoviesScore(movies);
  console.log(dramaAverageScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  
    return sortedMovies;
  }
  
  const sortedByYear = orderByYear(movies);
  console.log(sortedByYear);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedTitles = [...moviesArray]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((movie) => movie.title);
  
    return sortedTitles.slice(0, 20);
  }
  
  const first20Titles = orderAlphabetically(movies);
  console.log(first20Titles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
