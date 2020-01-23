/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = movies => {
  let byYear = [...movies].sort((movieA, movieB) => {
    if (movieA.year > movieB.year) return 1;
    else return -1;
  });
  return byYear;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
let howManyMovies = movies => {
  let bySteve = movies.filter(
    movies => movies.director === 'Steven Spielberg' && movies.genre.indexOf('Drama') != -1
  );
  return bySteve.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = arr => {
  let alphArr = [...arr].sort((s1, s2) => {
    if (s1.title > s2.title) return 1;
    else return -1;
  });
  alphArr.splice(20);
  return alphArr.map(movies => movies.title);
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = arr => {
  if (arr.length > 0) {
    let noZero = arr.filter(movies => movies.rate);
    let ratesArr = noZero.reduce((ac, cv) => (ac += cv.rate), 0) / arr.length;
    return +ratesArr.toFixed(2);
  }
  return 0;
};

// Iteration 5: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = arr => {
  let byDrama = arr.filter(movies => movies.genre.indexOf('Drama') !== -1);
  if (byDrama.length > 0) {
    let ratesArr = byDrama.reduce((ac, cv) => (ac += cv.rate), 0) / byDrama.length;
    return +ratesArr.toFixed(2);
  }
  return 0;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
