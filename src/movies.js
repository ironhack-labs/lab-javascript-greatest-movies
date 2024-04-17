// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let result = [];
  result = moviesArray.map((movie) => movie.director);

  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let result = 0;
  result = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return result.length;

  /*
    return moviesArray.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    }).length
    */
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let result = 0;

  let movieFiltered = moviesArray.filter((movie) => movie.score); //confirma todas las movies asi no tengan score

  let movieSum = movieFiltered.reduce((acc, movie) => movie.score + acc, 0);

  result = movieSum / moviesArray.length;

  return Math.round(result * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  let result = scoresAverage(dramaMovies);

  return result;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let result = [];
  // const copiaArray1 = [...moviesArray];
  const copiaArray1 = moviesArray.slice();

  result = copiaArray1.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
       
    }
  });
  return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let result = [];

  const copiaArray2 = moviesArray.slice();
  const sortedMovies = copiaArray2.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const titles = sortedMovies.map((movie) => movie.title);

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
