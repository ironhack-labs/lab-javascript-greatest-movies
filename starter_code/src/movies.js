/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function convertToMin(hourAndMin) {
  if (hourAndMin.includes("h")) {
    return (
      Number(hourAndMin.substring(0, hourAndMin.indexOf("h"))) * 60 +
      Number(
        hourAndMin.substring(
          hourAndMin.indexOf(" ") + 1,
          hourAndMin.indexOf("m")
        )
      )
    );
  } else
    return Number(
      hourAndMin.substring(hourAndMin.indexOf(" ") + 1, hourAndMin.indexOf("m"))
    );
}

function turnHoursToMinutes(movies) {

  return movies.map(x => {
    const y = Object.assign({}, x);
    y.duration = convertToMin(String(y.duration));
    return y;
  });
}

// Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  let sum = moviesArray.reduce((acc, cv) => (acc += Number(cv.rate)), 0);
  let avrg = sum / moviesArray.length;
  return avrg;
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  dramaMovies = moviesArray.filter(x => x.genre.includes("Drama"));
  return dramaMovies.length === 0
    ? undefined
    : Number(ratesAverage(dramaMovies).toFixed(2));
}

// Order by time duration, in growing order

function orderByDuration(moviesArray) {
  return moviesArray.sort((a, b) => {
    if (a.duration != b.duration) return a.duration - b.duration;
    else if (a.title > b.title) return -1;
  });
}
// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
  moviesSteven = moviesArray.filter(
    x => x.director.includes("Steven Spielberg") && x.genre.includes("Drama")
  );
  return moviesArray.length == 0
    ? undefined
    : "Steven Spielberg directed " + moviesSteven.length + " drama movies!";
}

// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  slicedArrayWithTitles = [];
  sortedArray = moviesArray.sort((a, b) => {
    if (a.title < b.title) return -1;
    else if (b.title > a.title) return 1;
    else return 0;
  });

  slicedArray = sortedArray.slice(0, 20);
  slicedArray.forEach(x => slicedArrayWithTitles.push(x.title));
  return slicedArrayWithTitles;
}

// Best yearly rate average

function bestYearAvg(movies) {

  result = [];


  for (i = 0; i <= 117; i++) {

    if (yearAverage(movies, 1900 + i) > 0) {
      result.push({ year: 1900 + i, average: yearAverage(movies, 1900 + i) });
    }
  }

  highestRate = result.sort((a, b) => b.average - a.average)[0];
  console.log(highestRate);
  return (movies.length === 0) ? undefined : "The best year was " + highestRate.year + " with an average rate of " + highestRate.average;
}

function yearAverage(matrix, yearToCheck) {

  filteredArray = matrix.filter(x => {
    return Number(x.year) === Number(yearToCheck)
  });

  if (filteredArray.length != 0) {
    average =
      filteredArray.reduce(
        (accumulator, currentValue) =>
          (accumulator += Number(currentValue.rate)),
        0
      ) / filteredArray.length;
  } else average = 0;

  return average;
}

bestYearAvg(movies);

