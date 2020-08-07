// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  let mappedArray = moviesArray.map((movie) => {
    return movie.director;
  });

  return mappedArray;
}

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let spielbergArray = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergArray.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  let moviesArrayWithRate = moviesArray.map((movie) => {
    if (typeof movie.rate !== "number") {
      movie.rate = 0;
      return movie;
    } else {
      return movie;
    }
  });

  if (moviesArrayWithRate.length === 0) {
    return 0;
  }
  let sum = moviesArrayWithRate.reduce((acc, cValue) => {
    return acc + cValue.rate;
  }, 0);

  return Number((sum / moviesArrayWithRate.length).toPrecision(3));
}

console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  let dramaMoviesArray = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMoviesArray.length === 0) {
    return 0;
  }
  let sum = dramaMoviesArray.reduce((acc, cVal) => {
    return acc + cVal.rate;
  }, 0);
  return Number((sum / dramaMoviesArray.length).toPrecision(3));
}
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let copiedArray = JSON.parse(JSON.stringify(moviesArray));
  copiedArray.sort((a, b) => {
    if (a.year === b.year && a.title < b.title) {
      return -1;
    } else if (a.year === b.year && a.title > b.title) {
      return 1;
    }
    return a.year - b.year;
  });
  return copiedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copiedArray = JSON.parse(JSON.stringify(moviesArray));

  copiedArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });

  let copiedArrayNames = copiedArray.map((movie) => {
    return movie.title;
  });
  if (copiedArray.length <= 20) {
    return copiedArrayNames;
  } else {
    return copiedArrayNames.slice(0, 20);
  }
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
