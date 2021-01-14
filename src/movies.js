// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
  const directorsArray = array.map(function (el) {
    return el.director;
  });
  return directorsArray;
}

getAllDirectors(movies);

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function removeDuplicate(array) {
  let newDirectorsArray = [];
  newDirectorsArray = array.filter(function (el) {
    if (newDirectorsArray.includes(el)) {
    } else {
      return el;
    }
  });
  return newDirectorsArray;
}

console.log(removeDuplicate(getAllDirectors(movies)));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  let moviesNumber = 0;
  let spielbergMovies = [];

  spielbergMovies = array.filter(function (el) {
    if (el.director === "Steven Spielberg" && el.genre.includes("Drama")) {
      return el;
    }
  });
  moviesNumber = spielbergMovies.length;
  return moviesNumber;
}

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let totalAverage = 0;
  let averageScore = [];

  averageScore = array.map(function (el) {
    return el.rate;
  });

  totalAverage = averageScore.reduce(function (total, el) {
    if (el) {
      return total + el;
    } else {
      return total;
    }
  }, 0);

  return Number((totalAverage / averageScore.length).toFixed(2));
}

console.log(ratesAverage(movies));

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
  otherMovies.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  otherMovies.splice(20, array.length);
  return otherMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
