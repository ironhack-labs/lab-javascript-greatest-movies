// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let bySpielberg = moviesArray.filter((film) => {
    return film.genre.includes("Drama") && film.director === "Steven Spielberg";
  });
  return bySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let total = moviesArray.reduce((acc, movie) => {
    if (typeof movie.score === "number") {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  let result = total / moviesArray.length;
  return Math.round(result * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let total = dramaMovies.reduce((acc, movie) => {
    if (typeof movie.score === "number") {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  let result = total / dramaMovies.length;
  return Math.round(result * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedMovies = structuredClone(moviesArray);
  return sortedMovies.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) {
      return 1;
    } else if (movieA.year < movieB.year) {
      return -1;
    } else if (movieA.title > movieB.title) {
      return 1;
    } else if (movieA.title < movieB.title) {
      return -1;
    } else {
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let sortedMovies = structuredClone(moviesArray);
  sortedMovies.sort((elem1, elem2) => {
    if (elem1.title > elem2.title) {
      return 1;
    } else if (elem1.title < elem2.title) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedMovies.slice(0, 20).map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let duration;

    let time = movie.duration.split(" ");
    if (time.length === 2) {
      let hours = Number(time[0].replace("h", ""));
      let minutes = Number(time[1].replace("min", ""));

      duration = hours * 60 + minutes;
    } else if (time.length === 1) {
      if (time[0].includes("h")) {
        let hours = Number(time[0].replace("h", ""));

        duration = hours * 60;
      } else if (time[0].includes("min")) {
        duration = Number(time[0].replace("min", ""));
      }
    }
    return { ...movie, duration };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
