// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArray = moviesArray.map((element) => element.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }

  const numOfmoviesDirector = moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );

  let spielbergMovies = numOfmoviesDirector.length;

  return spielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const average = moviesArray
    .filter((element) => element.score)
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue.score,
      0
    );
  let decimal = average / moviesArray.length;
  return parseFloat(decimal.toFixed(2));
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const average = moviesArray
    .filter((element) => element.genre.includes("Drama"))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue.score,
      0
    );
  let dramaMoviesLength = 0;
  moviesArray.forEach((element) => {
    if (element.genre.includes("Drama")) {
      dramaMoviesLength++;
    }
  });
  if (dramaMoviesLength === 0) {
    return 0;
  } else {
    let decimal = average / dramaMoviesLength;
    return parseFloat(decimal.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = moviesArray.slice();
  orderedMovies.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title == b.title) {
        return 0;
      } else if (a.title < b.title) {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const top20OrderedMovies = moviesArray.sort((a,b) => {
          if (a.title > b.title) {
            return 1;
          } else if (a.title == b.title) {
            return 0;
          } else if (a.title < b.title) {
            return -1;
          }})
        .map((element) => element.title);
          return top20OrderedMovies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
