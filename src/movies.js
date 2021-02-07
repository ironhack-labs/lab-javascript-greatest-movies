// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = function (movies) {
  return movies.map((movie) => movie.director);
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getUniqueDirectors = function (movies, getAllDirectors) {
  return getAllDirectors(movies).filter(
    (director, index) => getAllDirectors(movies).indexOf(director) === index
  );
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = function (movies) {
  if (movies.length === 0) {
    return 0;
  }
  const stevenDrama = movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return stevenDrama.length;
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = function (movies) {
  if (movies.length === 0) return 0;

  let count = movies.length;
  const sum = movies.reduce((accumulator, movie) => {
    if (typeof movie.rate == "number") {
      return accumulator + movie.rate;
    } else {
      return accumulator + 0;
    }
  }, 0);

  const average = Number((sum / count).toFixed(2));
  return average;
};
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = function (movies) {
  const drama = movies.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(drama);
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = function (movies) {
  let array = [...movies];
  array.sort((movieA, movieB) => movieA.year - movieB.year);
  array.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
  });
  return array;
};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = function (movies) {
  let newArray = [...movies];
  let alphaSort = newArray.sort((a, b) => a.title.localeCompare(b.title));
  let titles = [];
  alphaSort.forEach((value) => titles.push(value.title));
  titles.splice(20, titles.length - 20);
  return titles;
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = function (movies) {
  let moviesInMinutes = JSON.parse(JSON.stringify(movies));
  moviesInMinutes.forEach((movie) => {
    movie.duration = movie.duration.toString();
    movie.duration = movie.duration.split(" ");
  });
  moviesInMinutes.forEach((movie) => {
    if (movie.duration.length > 1) {
      movie.duration[0] = movie.duration[0].replace("h", "") * 60;
      movie.duration[1] = movie.duration[1].replace("min", "") * 1;
      movie.duration = movie.duration[0] + movie.duration[1];
    } else if (movie.duration[0].includes("h")) {
      movie.duration = movie.duration[0].replace("h", "") * 60;
    } else if (movie.duration[0].includes("min")) {
      movie.duration = movie.duration[0].replace("min", "") * 1;
    }
    return movie.duration;
  });
  return moviesInMinutes;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = function (movies) {
  if (movies.length === 0) return null;

  let filmYears = {};

  movies.forEach((movie) => {
    if (filmYears[movie.year]) {
      filmYears[movie.year].push(movie);
    } else {
      filmYears[movie.year] = [movie];
    }
  });

  let rates = [];
  let years = [];

  for (let prop in filmYears) {
    rates.push(ratesAverage(filmYears[prop]));
    years.push(prop);
  }

  let max = Math.max(...rates);
  let winner = rates.indexOf(max);

  return `The best year was ${years[winner]} with an average rate of ${rates[winner]}`;
};
