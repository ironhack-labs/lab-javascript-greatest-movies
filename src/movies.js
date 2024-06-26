// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const sum = moviesArray.reduce(
    (acc, movie) => (movie.score ? acc + movie.score : acc),
    0
  );
  const average = sum / moviesArray.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (!dramaMovies.length) return 0;

  const sum = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
  const average = sum / dramaMovies.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((movie1, movie2) => {
    if (movie1.year !== movie2.year) {
      return movie1.year - movie2.year;
    } else {
      return movie1.title.localeCompare(movie2.title);
    }
  });
  for (let i = 0; i <= 20; i++) {
    console.log(sortedMovies[i]);
  }

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//Create an orderAlphabetically() function that receives an array and returns an array of the first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.

//:warning: Important: Your function should return a new array, containing movie objects sorted alphabetically. Your function should not modify (mutate) the original array. You may need to research how to make a "copy" or "clone" an array.
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((movie1, movie2) => {
    return movie1.title.localeCompare(movie2.title);
  });
  const first20Movies = sortedMovies.slice(0, 20);
  return first20Movies.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
