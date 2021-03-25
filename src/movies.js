// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(data) {
  const newList = data.map(function (dir) {
    return dir.director;
  });
  return newList;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(data) {
  const newList = data.filter(function (dir) {
    return dir.director === "Steven Spielberg" && dir.genre.includes("Drama");
  });
  return newList.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(data) {
  if (!data.length) {
    return 0;
  }

  const avg = data.reduce(function (total, current) {
    return total + current.rate;
  }, 0);
  return parseFloat((avg / data.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(data) {
  const newList = data.filter(function (dir) {
    return dir.genre.includes("Drama");
  });

  const avg = newList.reduce(function (total, current) {
    return total + current.rate;
  }, 0);
  return parseFloat(avg / newList.length);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(data) {
  const newList = data.sort(function (a, b) {
    return a.year - b.year;
  });

  return Array.from(newList);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(data) {
  const listMovies = data.filter(function (movies) {
    return movies.title;
  });
  const alphaList = listMovies.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  return alphaList.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
