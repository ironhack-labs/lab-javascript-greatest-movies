// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filterMovies = moviesArray.filter((movie) => {
    if (
      movie.genre.includes("Drama") &&
      movie.director === "Steven Spielberg"
    ) {
      return movie;
    }
  });

  return filterMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const sum = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
  const average = sum / moviesArray.length;

  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (!dramaMovies.length) {
    return 0;
  }

  const sum = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  const average = sum / dramaMovies.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrayCopy = moviesArray.slice(0);
  const orderedArray = arrayCopy.sort((moviesA, moviesB) => {
    if (moviesA.year === moviesB.year) {
      if (moviesA.title > moviesB.title) {
        return 1;
      } else if (moviesA.title < moviesB.title) {
        return -1;
      }
    } else {
      return moviesA.year - moviesB.year;
    }
  });

  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = moviesArray.map((movie) => {
    return movie.title;
  });

  const orderedTitle = newArray.sort();

  return orderedTitle.slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
