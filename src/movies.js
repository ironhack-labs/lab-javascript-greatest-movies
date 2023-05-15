// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => element.director);
  /* BONUS clean array
  return [...new Set(movies.map((element) => element.director))];
  */
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const movSpilDrama = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return movSpilDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoreAvg = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score / moviesArray.length;
    } else {
      return accumulator;
    }
  }, 0);
  return Math.round(scoreAvg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  const dramasAvg = dramas.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score / dramas.length;
    } else {
      return accumulator;
    }
  }, 0);

  return Math.round(dramasAvg * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//NOT FULLY WORKING
function orderByYear(moviesArray) {
  //sort alphabetically
  const alphOrder = moviesArray.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  //map the years to a new array
  const mapped = alphOrder.map((element) => element.year);
  //sort by crescent order
  const sorted = mapped.sort(function (a, b) {
    return a - b;
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //sort alphabetically
  const alphOrder = moviesArray.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  //filter the first 20 movies
  const filtered = alphOrder.filter((item, index) => index < 20);
  //map to return only the titles
  const mapped = filtered.map((element) => element.title);
  return mapped;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
