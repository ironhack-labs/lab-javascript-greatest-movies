/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newOrderedArray = arr.slice(0);
    newOrderedArray.sort(function (a,b) {
      if (a.year > b.year) {
            return 1;
      } else if (a.year < b.year) {
            return -1;
      } else if (a.year === b.year) {
          if (a.title < b.title) {
              return -1;
          } else if (a.title > b.title) {
              return 1;
          } else {
              return 0
            }
          }
      });
    return newOrderedArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    let newMovieList = arr.filter(arr1 => arr1.director === "Steven Spielberg" && arr1.genre.includes("Drama") === true);
    return newMovieList.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let newArrayToOrder = arr.slice(0);
    newArrayToOrder.sort(function (a,b) {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        } else {
            return 0;
        }
    });
    return newArrayToOrder;
  };

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
