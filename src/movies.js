/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arr => {
  const sorted = [...arr].sort((a, b) => (a.year > b.year ? 1 : -1));
  return sorted;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = arr => {
  return arr.filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const sorted = [...arr].map(movie => movie.title);
  sorted.sort();
  return sorted.splice(0, 20);
};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
  if (arr.length === 0) return 0;
  const average =
    arr
      .filter(movie => movie.rate)
      .reduce((acc, curval) => acc + curval.rate, 0) / arr.length;
  return parseFloat(average.toFixed(2));
};
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
  const newArr = arr.filter(movie => movie.genre.includes("Drama"));
  return ratesAverage(newArr);
};
// }
// ratesAverage(arr)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const handleTime = string => {
  if (!string.includes("h")) {
    return parseInt(string.replace(/\D/g, ""));
  } else if (!string.includes("min")) {
    return parseInt(string.replace(/\D/g, "")) * 60;
  } else {
    let arrayOfTime = string
      .replace(/\D/g, " ")
      .trim()
      .split("  ");
    const hour = arrayOfTime[0] * 60;
    const min = parseInt(arrayOfTime[1]);
    let time = hour + min;
    return time;
  }
};

const turnHoursToMinutes = arr => {
  let result = arr.map(movie => ({
    ...movie,
    duration: handleTime(movie.duration)
  }));
  return result;
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average
