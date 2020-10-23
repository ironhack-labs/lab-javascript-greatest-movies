// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const directorsArray = movies.map(function (movie) {
    return movie.director;
  });
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaFromSteven = movies.filter(function (movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return dramaFromSteven.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const sumRate = movies.reduce(function (acc, movie) {
    if (movie.rate) {
      return acc + movie.rate;
    } else {
      return acc;
    }
  }, 0);

  const avgRate = sumRate / movies.length;
  const avgRateRounded = Math.round(avgRate * 100) / 100;
  return avgRateRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function (movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const sortedMovies = movies.sort(function (mov1, mov2) {
    return mov1.year - mov2.year;
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const titlesArray = movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  return titlesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
