// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);

  return directors;
}

//Bonus: Iteration 1.1

function cleanAllDirectorsArray(moviesArray) {
  const directors = getAllDirectors(moviesArray);

  let count = 0;

  for (let i = 0; i < directors.length; i++) {
    const word = directors[i];
    for (let j = 0; j < directors.length; j++) {
      if (word === directors[j]) {
        count++;
        if (count > 1) directors.splice(j, 1);
      }
    }
  }

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  /* const spielbergMovies = moviesArray.filter(function (selector) {
    if (
      selector.director === "Steven Spielberg" &&
      selector.genre.includes("Drama")
    ) {
      return true;
    } else return false;
  }); */

  const spielbergMovies = moviesArray.filter(
    (selector) =>
      selector.director === "Steven Spielberg" &&
      selector.genre.includes("Drama")
  );

  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const averageScore = moviesArray.reduce(function (acc, curr) {
    if (curr.score !== undefined) acc += curr.score;
    return acc;
  }, 0);
  return Math.round((averageScore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

  const orderedByYear = moviesArrayCopy.sort(function (a, b) {
    if (a.year === b.year) return a.title.localeCompare(b.tile);
    else return a.year - b.year;
  });

  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

  const orderByTitle = moviesArrayCopy.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  if (moviesArray.length < 20) return orderByTitle;

  const titlesOnly = orderByTitle.map((titles) => titles.title);
  titlesOnly.splice(20);
  return titlesOnly;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
