// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => movies.map((elm) => elm.director);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const allDirectors = (allDirectors) =>
  allDirectors.filter((a, b) => allDirectors.indexOf(a) === b);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergDrama = movies.filter((elm) => {
    elm.genre.includes("Drama") && elm.director === "Steven Spielberg";
  });
  return spielbergDrama.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let totalSum = movies.reduce((acc, elm) => {
    if (elm.rate) {
      return acc + elm.rate;
    } else {
      return acc;
    }
  }, 0);
  if (movies.length === 0) {
    return 0;
  } else {
    return totalSum / movies.length;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
  let allDrama = movies.filter((elm) => elm.genre.includes("Drama"));
  return ratesAverage(allDrama);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => [
  ...movies.sort((a, b) => a.year.localeCompare(b.year)),
];

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) =>
  [...movies.sort((a, b) => a.title.localeCompare(b.title))]
    .map((elem) => elem.title)
    .splice(0, 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
