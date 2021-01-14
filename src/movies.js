// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(obj) {
  let arr = [];
  arr = obj.map(function (ele) {
    return ele.director;
  });
  return arr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function howManyMovies(arr) {
  let dramas = [];
  dramas = arr.filter(function (ele) {
    if (ele.director === "Steven Spielberg")
      if (ele.genre.includes("Drama")) return 1;
      else return 0;
  });
  return dramas.length;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let sum;
  if (movies.length === 0) {
    return 0;
  }

  sum = movies.reduce(function (total, movie) {
    if (!movie.rate) return total;
    else return total + movie.rate;
  }, 0);

  console.log(sum);

  return Number((sum / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramas = [];
  if (movies.length === 0) return 0;
  if (movies.length === 1) return movies[0].rate;
  dramas = movies.filter(function (ele) {
    if (ele.genre.includes("Drama")) return 1;
    else return 0;
  });
  return ratesAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  sorted = movies.map((element) => element);
  sorted.sort(function (a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    else return 0;
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  titles = movies.map((element) => element.title);
  titles.sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
