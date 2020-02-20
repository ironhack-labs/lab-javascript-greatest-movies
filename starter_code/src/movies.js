/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const newArr = [...array];
  newArr.sort((a, b) => {
    if (a.year == b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year;
    }
  });
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  let spielbergMovies = array.filter(
    movie =>
      movie.director.toLowerCase() === "steven spielberg" &&
      movie.genre.indexOf("Drama") !== -1
  );
  if (spielbergMovies.length > 0) {
    return spielbergMovies.length;
  } else {
    return 0;
  }
}
howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const newArr2 = [...array];
  newArr2.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  let finalArr = newArr2.slice(0, 20).map(movie => movie.title);
  return finalArr;
}

orderAlphabetically(movies);
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  if (array.length > 0) {
    const rateAv = array.map(movie => {
      if (movie.rate && typeof movie.rate === "number") {
        return movie.rate;
      } else {
        return 0;
      }
    });
    let sum = rateAv.reduce((prevVal, currentVal) => prevVal + currentVal);
    return Math.round((sum / rateAv.length) * 100) / 100;
  } else {
    return 0;
  }
}

ratesAverage(movies);
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaMovies = array.filter(movie => movie.genre.indexOf("Drama") !== -1);
  if (dramaMovies.length > 0) {
    const rateDra = dramaMovies.map(drama => drama.rate);
    let sum = rateDra.reduce((prevVal, currentVal) => prevVal + currentVal);
    return Math.round((sum / dramaMovies.length) * 100) / 100;
  } else {
    return 0;
  }
}

dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
