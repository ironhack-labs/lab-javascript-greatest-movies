// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const getAllDirectors = moviesArray.map((movie) => movie.director);
  return getAllDirectors.filter((director, index) => {
    return getAllDirectors.indexOf(director) === index;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray
    .filter((movie) => movie.director === "Steven Spielberg")
    .filter((movie) => movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let sum = moviesArray.reduce((acc, curr) => {
    if (!curr.score) {
      return acc;
    }
    switch (typeof curr.score) {
      case "number":
        return acc + curr.score;
      case "string":
        return acc + parseFloat(curr.score);
      default:
        return acc;
    }
  }, 0);

  const result = +(sum / moviesArray.length).toFixed(2);

  //  found this solution on stackoverflow
  //  Number.toFixed(number) returns a string
  //  the + sign turns it into a number
  //  Dunno how legimit this is???

  return result;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(
    moviesArray.filter((movie) => movie.genre.includes("Drama"))
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = [...moviesArray];
  return copy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// sort((a, b) => a.localeCompare(b))
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
