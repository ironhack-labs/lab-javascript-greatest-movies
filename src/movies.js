// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray
    .filter((movie) => movie.director === "Steven Spielberg")
    .filter((movie) => movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let average = 0;
  let scoreSum = moviesArray
    .map((movie) => movie.score)
    .reduce((acc, cur) => acc + cur, 0);

  average = scoreSum / moviesArray.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (!dramaMovies.length) {
    return 0;
  }

  let average =
    dramaMovies.reduce((acc, cur) => acc + cur.score, 0) / dramaMovies.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyMovieArray = [...moviesArray];

  copyMovieArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return copyMovieArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newOrder = moviesArray
    .filter((movie) => typeof movie.title === "string")
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);

  return newOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copyMovieArray = moviesArray.map((movie) => {
    let hours = Number(movie.duration.slice(0, 1));
    let minutes = Number(movie.duration.slice(3, 5));
    let newDuration = hours * 60 + minutes;

    return { ...movie, duration: newDuration };
  });

  return copyMovieArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// didn' finish
function bestYearAvg(moviesArray) {
  const copyMovieArray = [...moviesArray];
  const orderByYear = orderByYear(copyMovieArray);
  let year = 0;
  let rate = 0;

  orderByYear.reduce((acc, cur) => {
    if (acc.year === cur.year) {
      let average = (acc.score + cur.score) / 2;
      if (average > rate) {
        rate = average;
        year = acc.year;
      }
    }
  }, 0);

  return `The best year was ${year} with an average score of ${rate}`;
}
