// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let arr = movies.map((movie) => movie.director);
  let newArr = arr.filter(function (director, index, array) {
    for (i = 0; i <= index; i++) {
      if (i === index) {
        return director;
      }
      if (array[i] === director) break;
    }
  });
  return newArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let arr = movies.filter(function (movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return 1;
    }
  });
  return arr.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (!movies.length) return 0;
  const totRates = movies.reduce(function (tot, currentMovie) {
    if (!currentMovie.rate) {
      return tot;
    }
    return tot + currentMovie.rate;
  }, 0);
  return parseFloat((totRates / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedArr = movies.map((movie) => {
    return movie;
  });
  sortedArr.sort(function (a, b) {
    if (a.year === b.year) {
      if (b.title < a.title) {
        return 1;
      }
    }
    return a.year - b.year;
  });
  return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let newMoviesArr = [];
  for (i = 0; i < movies.length; i++) {
    newMoviesArr[i] = movies[i].title;
  }
  newMoviesArr.sort(function (a, b) {
    {
      if (b < a) {
        return 1;
      }
    }
  });
  return newMoviesArr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
