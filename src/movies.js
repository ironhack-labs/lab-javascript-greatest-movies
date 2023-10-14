// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map((movie) => {
    return movie.director;
  });
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramaMovies = moviesArray.filter((movie) => {
    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const allMoviesWithScores = moviesArray.filter((movie) => movie.score);

  const totalScores = allMoviesWithScores.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);

  const avgScore = totalScores / moviesArray.length;

  return Number(avgScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

   const moviesByYear = [...moviesArray]
   moviesByYear.sort((a, b) => {

    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
      return a.year - b.year;
  });

  return moviesByYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  const top20Movies = sortedMovies.slice(0, 20);

  const top20Titles = top20Movies.map((movie) => movie.title);

  return top20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
