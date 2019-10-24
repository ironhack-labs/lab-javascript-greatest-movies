/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
  let num = arr.reduce((a, b) => a + b.rate, 0);
  return parseFloat(num / arr.length);
};

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
  let drama = movies.filter(m => {
    return m.genre.includes("Drama");
  });
  return Number(ratesAverage(drama).toFixed(2)) || 0;
};
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByYear = movies => {
  let sorted = movies.sort((a, b) => {
    if (Number(a.year) > Number(b.year)) {
      return 1;
    } else if (Number(a.year) < Number(b.year)) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return sorted;
};
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  let newa = movies.filter(m => {
    return m.genre.includes("Drama");
  });
  let newa2 = newa.filter(m => {
    return m.director === "Steven Spielberg";
  });
  return newa2.length;
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies =>
  movies
    .map(m => m.title)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .slice(0, 20);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  if (typeof movies != "object") return [];
  times = movies.map(m => m.duration.split(" ").map(e => parseInt(e)));
  times = times.map(m => m.map((e, j) => (j === 0 ? e * 60 : e)));
  times = times.map(m => m.reduce((a, b) => a + b));
  let newArr = [...movies].map((m, i) => movies[i]);
  newArr.forEach((m, i) => (newArr[i].duration = times[i]));
  return newArr;
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  let bestMoviesOfThatYear = [];
  let orderedMovies = orderByYear(movies);
  let currentYear = 0;
  let highestAverage = 0;
  let highestYearAverage = 0;
  orderedMovies.forEach(movie => {
    if (movie.year != currentYear) {
      //we have changed years
      let average = ratesAverage(bestMoviesOfThatYear);
      if (average > highestAverage) {
        highestAverage = average;
        highestYearAverage = currentYear;
      }
      currentYear = movie.year;
    } else {
      //where in the same year so we keep collecting movies
      bestMoviesOfThatYear.push(movie);
    }
  });
  console.log(highestAverage, highestYearAverage);
  return `The best year was ${highestYearAverage} with an average rate of ${highestAverage}`;
}
console.log("bestYearAvg", bestYearAvg(movies));
