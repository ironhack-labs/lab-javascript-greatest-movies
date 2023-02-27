//import {movies} from "./data.js"
console.log(movies[0]);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function removeDoubles (arr) {
    return [...new Set(arr)];
  }

function getAllDirectors(moviesArray) {
    return removeDoubles(moviesArray.map(movieObj => movieObj.director));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    return Number(
      (
        moviesArray.reduce((acc, movieObj) => {
          if (movieObj.score) {
            return acc + movieObj.score;
          }
          return acc;
        }, 0) / moviesArray.length
      ).toFixed(2)
    );
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(moviesArray.filter(movie => movie.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesToSort = [... moviesArray];
  return moviesToSort.sort((a, b) => {
    if (a.year - b.year === 0) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [... moviesArray].sort(((a,b) => a.title.localeCompare(b.title)));
  const sortedTitles = sortedMovies.map(({title}) => title);
  return sortedTitles.slice(0, 20);
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movieArrayCopy = [... moviesArray];
  movieArrayCopy.forEach(movie => {
    const hours = Number (movieArrayCopy.duration.match("/^/"));
    console.log(hours);
  })
}
turnHoursToMinutes(movies)

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
