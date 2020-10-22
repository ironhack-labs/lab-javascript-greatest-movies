// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (arr) {
    let dirArr = arr.map(function (movie) {
      return movie.director;
  });
    return dirArr;
  };
  const listOfDirectors = getAllDirectors(movies);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies (arr) {
    let dramaSpielberg = arr.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
      });
    return dramaSpielberg.length;
  };
  const dramaBySpielberg = howManyMovies(movies);
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (arr) {
    if (arr.length > 0) {
    let rateArr = arr.map(function (movie) {
        if (movie.rate === undefined) {
            movie.rate === 0;
        };
      return movie.rate;
  }); 
    let sumRates = rateArr.reduce(function (total, rate) {
      return total + rate;
  }, 0);
    return Number(parseFloat(sumRates / arr.length).toFixed(2));
  }  else {
    return 0;
    };
};
  const rateAvg = ratesAverage(movies); 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (arr) {
    let dramaMovies = arr.filter(function(movie) {
        return movie.genre.includes("Drama");
      });
    if (dramaMovies.length > 0) {
      let rateDramaTotl = dramaMovies.map(function (movie) {
    return movie.rate ;
}); 
  let sumDramaRates = rateDramaTotl.reduce(function (total, rate) {
    return total + rate;
}, 0);
    return Number(parseFloat(sumDramaRates / dramaMovies.length).toFixed(2));
    } else {
      return 0;
    };
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newOrderedArray = [...arr];
    newOrderedArray.sort(function (a, b) {
      return a.year - b.year;
    });
  return newOrderedArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let newOrderedArray = [...arr];
    newOrderedArray.sort(function (a, b) {
      return a.title - b.title;
    });
    return newOrderedArray
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average