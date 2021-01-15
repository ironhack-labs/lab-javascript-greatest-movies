// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArr) {
  const allDirectors = moviesArr.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  const spilverMovies = arr.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spilverMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const sum = movies.reduce((accumulator, currentValue) => {
    if (!currentValue.rate) {
      return accumulator + 0;
    } else {
      return accumulator + currentValue.rate;
    }
  }, 0);
  const average = +(sum / movies.length).toFixed(2);
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaMovies = [];
  dramaMovies = array.filter(function (el) {
    if (el.genre.includes("Drama")) {
      return el.rate;
    }
  });
  return ratesAverage(dramaMovies);
}
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const otherMovies = array.map((element) => element);
  otherMovies.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return otherMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const otherMovies = array.map((element) => element.title);
  const sortedArr = otherMovies.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
  const arrCc = sortedArr.splice(0, 20);
  return arrCc;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
