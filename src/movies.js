// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  const directorsMovie = moviesArray.map((eachMovie) => {
    return eachMovie.director;
  });

  return directorsMovie;
}
let directors = [];
directorsMoviesArray.forEach((director) => {
  if (!directors.includes(director)) {
    directors.push(director);
  }
  return directors;
});

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesDramaSpielberg = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return moviesDramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const sumScore = moviesArray.reduce((acc, element) => {
    if (element.score) {
      return acc + Number(element.score);
    }
    return acc;
  }, 0);
  const average = sumScore / moviesArray.length;
  return +average.toFixed(2);
}
// Iteration 4: Drama movies - Get the average of Drama Movies PORQUE EN AL 3 Y 4 FUNCIONA SOLO SI PONGO + AL FINAL

function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  if (!dramaMovies.length) {
    return 0;
  }

  const dramaMoviesScore = dramaMovies.reduce((acc, element) => {
    return acc + element.score;
  }, 0);
  return dramaMoviesScore / dramaMovies.length.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
  const moviesOrdered = moviesArrayCopy.sort((a, b) => {
    if (a.title < b.title) return -1;
    else if (a.title > b.title) return 1;
  });
  const moviesOrderedYear = moviesOrdered.sort((a, b) => {
    return a.year - b.year;
  });
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

  const titles = moviesArray.map((element) => element.title);

  const orderAlphabetically = titles.sort((a, b) => {
    return a.localeCompare(b);
  });

  return orderAlphabetically.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
