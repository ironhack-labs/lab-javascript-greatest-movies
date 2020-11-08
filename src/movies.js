// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (array) => {
  const newArray = [];
  array.map(function (value) {
    newArray.push(value.director);
  });
  return newArray;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const removeDuplicates = (array) => {
  return array.filter((value, index) => array.indexOf(value) === index);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => {
  if (!array.length) {
    return 0;
  }
  return array.filter(function (value) {
    const steveArray =
      value.director === 'Steven Spielberg' && value.genre.includes('Drama');
    return steveArray;
  }).length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function (array) {
  return (
    Math.round(
      array.reduce(function (accumulator, value, index, originalArray) {
        if (value.rate === undefined) {
          return accumulator + (0 / originalArray.length) * 100;
        } else {
          return accumulator + (value.rate / originalArray.length) * 100;
        }
      }, 0)
    ) / 100
  );
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function (array) {
  return ratesAverage(array.filter((value) => value.genre.includes('Drama')));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
  let newArray = [...array];
  return newArray.sort(function (a, b) {
    if (a.year - b.year === 0) {
      if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
      if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
    }
    return a.year - b.year;
  });
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
  let newArray = [...array];
  return newArray
    .sort(function (a, b) {
      if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
      if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
    })
    .map((value) => value.title)
    .slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
