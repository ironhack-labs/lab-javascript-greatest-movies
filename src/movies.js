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

//is there a way to do this with only 1 method? I couldn't figure it out. How to skip array if empty. "Continue" broke everything.
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

//doesn't pass the tests but returns 8.34
function dramaMoviesScore(moviesArray) {
  const dramafilter = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama", 1);
  });
  const average = dramafilter.reduce((acc, movie) => {
    return acc + movie.score / dramafilter.length;
  }, 0);
  let num = average.toFixed(2);
  return parseFloat(num);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArray.sort((movie) => {
    let newArr = [];
    movie.year.push(newArr);
    return newArr;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
