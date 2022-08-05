// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielberg = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

//is there a way to do this with only 1 method? I couldn't figure it out.
function scoresAverage(moviesArray) {
  const filtered = moviesArray.filter((movie) => {
    return typeof movie.score === "number";
  });
  const average = filtered.reduce((acc, movie) => {
    return acc + movie.score / moviesArray.length;
  }, 0);
  let num = average.toFixed(2);
  return parseFloat(num);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const dramafilter = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramafilter);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedByYear = moviesArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title < b.title ? -1 : 1;
    } else return a.year - b.year;
  });

  return [...sortedByYear];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let arr = [];
  const filter = moviesArray.filter((movie, i) => {
    arr.push(movie.title);
  });
  arr.sort();
  return arr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
