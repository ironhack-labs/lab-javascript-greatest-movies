// const movies = [
//   { title: "aab" },
//   { title: "aaa" },
//   { title: "abc" },
//   { title: "acb" },
//   { title: "abb" },
// ];

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
  let directorsList = moviesArr.map((movie) => {
    return movie.director;
  });
  return directorsList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let dramaMovies = arr.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  let spielbergDramas = dramaMovies.filter((movie) => {
    return movie.director.includes("Steven Spielberg");
  });
  return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratingsOnly = [];
movies.forEach((r) => {
  ratingsOnly.push(r.rate);
});

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let totalRate = arr.reduce((acc, currVal) => {
    if (currVal.rate) {
      return acc + currVal.rate;
    } else {
      return acc;
    }
  }, 0);
  return Number((totalRate / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let dramaRatesTotal = arr.map(() => {});
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let titlesList = arr.map(function (t) {
    return t.title;
  });
  titlesList.sort();
  if (titlesList.length < 20) {
    return titlesList;
  }
  return titlesList.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average)
