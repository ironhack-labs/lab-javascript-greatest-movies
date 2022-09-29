// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const movies = [];
  moviesArray.forEach((movie) => {
    movies.push(movie.director);
  });
  return movies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //should return 0 if the array is empty
  if (moviesArray.length == 0) return 0;
  const spielbergDramaMovies = moviesArray.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  //Calculate 2 digit decimal average score of all movies
  return Math.round(calcAverage(moviesArray) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  //Filter Drama Movies
  const allDramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (allDramaMovies.length == 0) return 0;

  //Calculate 2 digit decimal average score of drama movies
  return Math.round(calcAverage(allDramaMovies) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderByYear = [...moviesArray].sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    }
  });

  return orderByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //Alphabetic Order
  const alphabeticOrder = [...moviesArray].sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
  //Order by title and print the first 20 titles
  if (alphabeticOrder.length > 20) {
    return alphabeticOrder.splice(20);
  }
  return alphabeticOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

function calcAverage(movies) {
  const averageScore =
    movies.reduce((acc, curr) => {
      return acc + curr.score;
    }, 0) / movies.length;
  return averageScore;
}
