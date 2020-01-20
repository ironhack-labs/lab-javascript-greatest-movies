/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let result = arr.sort(function (a, b) {
    if (a.year - b.year > 1) return 1
    if (a.year - b.year < 1) return -1
    if (a.year === b.year) {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0
    }
  });
  return [...result];
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let result = arr.filter(function (movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
      return true;
    }
  });
  return result.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let titles = arr.map(function (item) {
    return item.title;
  })
  titles = titles.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  })
  if (titles.length < 20) {
    return titles;
  } else {
    let firstTwenty = [];
    for (let i = 0; i < 20; i++) {
      firstTwenty.push(titles[i]);
    }
    return firstTwenty;
  }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let rates = arr.map(function (item) {
    return item.rate || 0;
  });
  let finalRate = rates.reduce(function (sum, rate) {
    return sum + rate;
  }, 0);
  if (rates.length > 0) {
    let twoDecimals = finalRate / rates.length;
    return parseFloat(twoDecimals.toFixed(2));
  } else {
    return 0;
  }
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let dramaMovies = arr.filter(function (movie) {
    return movie.genre.includes("Drama");
  })
  if (dramaMovies.length === 0) return 0;
  let dramaRates = dramaMovies.map(function (movie) {
    return movie.rate;
  })
  let totalRate = dramaRates.reduce(function (sum, rate) {
    return sum + rate;
  })
  let finalRate = totalRate / dramaRates.length;
  return parseFloat(finalRate.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average