// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (arr) => arr.map((movie) => movie.director);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let getAllDirectorsUnique = (arr) => {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i].director) === -1) {
      uniqueArray.push(arr[i].director);
    }
  }
  return uniqueArray;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = (arr) =>
  arr.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (arr) =>
  arr.reduce((acc, elem) => {
    if ("rate" in elem) {
      acc += +(elem.rate / arr.length).toFixed(2);
    }
    return acc;
  }, 0);

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (arr) =>
  ratesAverage(arr.filter((movie) => movie.genre.includes("Drama")));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = (arr) => {
  return [...arr].sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (arr) =>
  [...arr]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((movie) => movie.title);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinutes = (arr) =>
  arr.map((movie) => {
    let hours = +movie.duration.match(/\d*(?=h)/);
    let minutes = +movie.duration.match(/\d*(?=min)/);
    arr.duration = hours * 60 + minutes;
    return arr;
  });

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

let bestYearAvg = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let highest;
  let yearsRatings = arr.reduce((acc, elem) => {
    if (`${elem.year}` in acc) {
      acc[`${elem.year}`].push(elem.rate);
    } else {
      acc[`${elem.year}`] = [elem.rate];
    }
    return acc;
  }, {});
  for (const [year, ratings] of Object.entries(yearsRatings)) {
    if (ratings.length > 1) {
      yearsRatings[year] = ratings.reduce((acc, elem) => {
        acc += elem / ratings.length;
        return +acc.toFixed(2);
      }, 0);
    } else {
      yearsRatings[year] = ratings[0];
    }
  }
  let years = Object.keys(yearsRatings);
  highest = years[0];
  for (let i = 1; i < years.length; i++) {
    if (yearsRatings[years[i]] > yearsRatings[highest]) {
      highest = years[i];
    }
  }
  return `The best year was ${highest} with an average rate of ${yearsRatings[highest]}`;
};
