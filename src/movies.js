// const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(
    (movie) => movie.director
  );
  console.log(allDirectors);
  return allDirectors;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSpielberg = moviesArray.filter(
    (movie) => {
      return (
        movie.director === "Steven Spielberg" &&
        movie.genre.includes("Drama")
      );
    }
  );
  console.log(moviesSpielberg);
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Calculate the sum of all movie scores using the reduce method

function scoresAverage(moviesArray) {
  const averageScore = moviesArray.reduce(
    (allScores, movie) => {
      return allScores + movie.score;
    },
    0
  );
  console.log(averageScore / moviesArray.length);
  return averageScore / moviesArray.length;
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movie) => movie.genre.includes("Drama")
  );
  const averageScore = dramaMovies.reduce(
    (averageScore, movie) => {
      return averageScore + movie.score;
    },
    0
  );
  console.log(averageScore / dramaMovies.length);
  return averageScore / dramaMovies.length;
}

dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  const arraySorted = moviesCopy.filter(
    (a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        a.title.localeCompare(b.title);
      }
    }
  );
  console.log(arraySorted);
  return arraySorted;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {
//   const moviesCopy = [...moviesArray];
//   const sortedArray = moviesArray.filter(
//     (a, b) => {
//       if (a.title !== b.title) {
//         return a.title - b.year;
//       }
//     }
//   );
//   console.log(sortedArray.slice(0, 20));
//   return sortedArray.slice(0, 20);
// }

// orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
