/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
// const movies2 = [...movies];

// movies2.sort((a, b) => a.year - b.year);

function orderByYear(arr) {
  const arr2 = [...arr]; //preserve the original one
  //   movies2.sort((a, b) => a.year - b.year);
  arr2.sort(function(a, b) {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
  });
  return arr2; //return the sorted array
}

// console.log(moviesSorted);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  const arr2 = arr.filter(el => {
    return el.genre.includes("Drama") && el.director === "Steven Spielberg";
  });

  console.log(`Movies ${arr2}`);
  return arr2.length; //return the filtered array
}

howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const arr2 = [...arr];
  const arrSorted = arr2.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });

  const arr20 = arrSorted.slice(0, 20);

  const titles20 = arr20.map(function(movie) {
    return movie.title;
  });
  return titles20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  const arr2 = [...arr];
  const ratesArr = arr2.map(function(movie) {
    return movie.rate;
  });

  let rateTotal = ratesArr.reduce((sum, movie) => {
    return sum + movie.rate;
  }, 0);

  let averageRate = (rateTotal / ratesArr.length).toFixed(2);
  //   let averageRateRounder = Math.round(averageRate)
  let averageRateInt = parseInt(averageRate);

  return averageRateInt;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  const arrDram = arr.filter(e => {
    return e.genre.includes("Drama");
  });

  let rateTotal = arrDram.reduce((sum, movie) => {
    return sum + movie.rate;
  }, 0);

  return rateTotal / arrDram.length;
}

dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
