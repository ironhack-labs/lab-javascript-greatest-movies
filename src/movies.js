// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// datas are stored in objects inside an array
// I want to access to the const movie = [] then access to the object
// Loop to every object and store director value into directorsArray
//create an empty array to store data
// Use map()
// create a function getAllDirectors
//sort moovies array by directors
//extract directors
//store them into the empty array
//return they array with directors
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => movie.director);
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const movies = moviesArray.filter(
    (i) => i.director.includes("Steven Spielberg") && i.genre.includes("Drama")
  );
  return movies.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray[0] === undefined) {
    return 0;
  }
  const sumedScore = moviesArray.reduce((sum, i) => sum + i.score, 0);
  const averageScore = sumedScore / moviesArray.length;
  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((i) => i.genre.includes("Drama"));
  return scoresAverage(drama);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedByYear = moviesArray.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  const finalSort = sortedByYear.map((i) => i);
  return finalSort;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabeticOrder = moviesArray.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  return alphabeticOrder;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}