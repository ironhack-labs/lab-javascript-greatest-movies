/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  return arr.concat().sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      } 
    }
    return a.year - b.year;
  });
}

// Intentar refactorizar


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  function spielberg(arr) {
    return arr.director === "Steven Spielberg";
  }
  const spielbergMovies = arr.filter(spielberg);
  const filteredResult = spielbergMovies.filter((item) => {
    return (item.genre.indexOf('Drama') >= 0);
  });
  return filteredResult.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const sorted = arr.concat().sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    } 
  });
  const extracted = [];
  sorted.forEach(element => {
    extracted.push(element.title);
  });
  const first20 = extracted.slice(0, 20);
  return first20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
