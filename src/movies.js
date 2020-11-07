// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = function (array) {
  const newArray = [];
  array.map(function (value) {
    newArray.push(value.director);
  });
  return newArray;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = function (directors) {
  if (!directors.length) {
    return 0;
  }
  directors.reduce(function (accumulator, value) {
    if (value.director === 'Steven Spielberg') {
      return accumulator + 1;
    } else {
      ('nothing');
    }
  }, 0);
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function (array) {
  array.reduce(function (accumulator, value, index, originalArray) {
    return accumulator + array[index].rate / originalArray.length;
  }, 0);
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function (array) {
  array.filter(function (value) {
    if (value.genre.includes('drama')) {
      console.log('drama');
    }
  });
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
