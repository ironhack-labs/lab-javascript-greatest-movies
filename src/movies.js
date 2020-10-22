// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => {
  return arr.map((elem) => elem.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (arr) => {
  let numOfTimes = 0;
  arr.filter((elem) => {
    if (elem.director === "Steven Spielberg" && elem.genre.includes("Drama")) {
      numOfTimes++;
    }
  });
  return numOfTimes;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
  if (!array.length) {
    return 0;
  }
  let ratesArray = [];
  for (let i = 0; i < array.length; i++) {
    //check if array[i].rate has falsy values and if so, attribute 0 to it
    if (!array[i].rate) {
      ratesArray.push(0);
    } else if (
      array[i].hasOwnProperty("rate") &&
      typeof array[i].rate === "number"
    ) {
      ratesArray.push(array[i].rate);
    }
  }
  return (
    Math.round((ratesArray.reduce((a, b) => a + b) / array.length) * 100) / 100
  );
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array) => {
  let dramaRates = [];
  array.filter((elem) => {
    if (elem.genre.includes("Drama")) {
      dramaRates.push(elem.rate);
    }
  });
  return (
    Math.floor((dramaRates.reduce((a, b) => a + b) / dramaRates.length) * 100) /
    100
  );
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray.sort((a, b) => a.year - b.year);
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.sort((a, b) => a.title - b.title);

  const orderTitle = [];

  newArray.filter((elem) => {
    orderTitle.push(elem.title);
  });

  const best20 = orderTitle.sort().splice(0, 20);

  return best20;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
