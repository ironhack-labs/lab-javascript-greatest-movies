//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((element) => element.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } /*else if (moviesArray.reduce(function (acc, curr) {
    return acc + curr.director;
  }, 0) === 0) { 
  return 0;
  }*/
  const steveDrama = movies.filter(
    (element) =>
      element.genre.includes("Drama") === true &&
      element.director === "Steven Spielberg"
  ).length;
  return steveDrama;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const average =
    moviesArray.reduce(function (acc, curr) {
      return acc + curr.score;
    }, 0) / moviesArray.length;
  const newArr = [];
  const result = parseFloat(average).toFixed(2);
  newArr.push(result);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const onlyDrama = moviesArray.filter(
    (element) => element.genre.includes("Drama") === true
  ).length;
  if (onlyDrama.length === 0) {
    return 0;
  }
  const average =
    onlyDrama.reduce((acc, curr) => acc + curr.score, 0) / onlyDrama.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
