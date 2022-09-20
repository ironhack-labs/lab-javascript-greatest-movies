// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filterMovies = moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" &&
      element.genre.indexOf("Drama") >= 0
  );
  return filterMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }

  const suma = moviesArray.reduce((sum, moviesArray) => {
    if (typeof moviesArray.score === "number") {
      return sum + moviesArray.score;
    } else {
      return sum;
    }
  }, 0);
  let aux = suma / moviesArray.length;

  return Number(aux.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const averageDrama = moviesArray.filter((element) => {
    return element.genre.includes("Drama");
  });

  const sum = averageDrama.reduce((total, current) => {
    return (total += current.score);
  }, 0);

  const average = sum / averageDrama.length;

  if (averageDrama.length === 0) {
    return 0;
  }

  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = moviesArray;
  let aux= newArray
  moviesArray.map((aux) => aux)
  moviesArray.sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
