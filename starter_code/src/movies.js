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

// Intentar refactorizar?


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

function ratesAverage(arr) {
  if (arr.length === 0 ) {
    return 0;
  }
  const totalSum = arr.reduce(function(sum, movie){
    return sum + movie.rate;
  }, 0);
  const avg = totalSum / arr.length;
  const avgRounded = Math.round(avg * 100) / 100;
  return avgRounded;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  const dramaMovies = arr.filter((item) => {
    return (item.genre.indexOf('Drama') >= 0);
  });
  if (dramaMovies.length === 0 ) {
    return 0;
  }
  const totalSum = dramaMovies.reduce(function(sum, movie){
    return sum + movie.rate;
  }, 0);
  const avg = totalSum / dramaMovies.length;
  const avgRounded = Math.round(avg * 100) / 100;
  return avgRounded;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {

}

turnHoursToMinutes();

// BONUS Iteration: Best yearly rate average - Best yearly rate average
