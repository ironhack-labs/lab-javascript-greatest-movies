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
    else if (a.title > b.title) return 1;
    else if (b.title > a.title) return -1;
  });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {

  return moviesArray.length == 0
    ? undefined
    : "Steven Spielberg directed " + moviesArray.filter(x => x.director.includes("Steven Spielberg") && x.genre.includes("Drama")).length + " drama movies!";
}

// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

  //Sort the movies array alphabetically, slice the top 20 lines and then push into a new Array with only the titles

  slicedArrayWithTitles = [];

  moviesArray.sort((a, b) => {
    if (a.title < b.title) return -1;
    else if (b.title > a.title) return 1;
    else return 0;
  }).slice(0, 20).forEach(x => slicedArrayWithTitles.push(x.title));;

  return slicedArrayWithTitles;
}

// Best yearly rate average

function yearAverage(matrix, yearToCheck) {

  //The function calculates the average for a all the movies for produced in certain year. 

  //Filter the areas first fot the year

  filteredArray = matrix.filter(x => {
    return Number(x.year) === Number(yearToCheck)
  });

  //Then calculates the average using Reduce function

  if (filteredArray.length != 0) {
    average =
      filteredArray.reduce(
        (accumulator, currentValue) =>
          (accumulator += Number(currentValue.rate)),
        0
      ) / filteredArray.length;
  } else average = null;

  return average;
}

function bestYearAvg(movies) {

  //The function returns the highest average for a set of years

  //Creates a tables with all the year (moviesYear) - Iterates over the years and return the average movie rate for each of them in a result array

  moviesYear = [];
  result = [];
  movies.forEach(x => moviesYear.push(x.year));
  moviesYear.forEach(yearIterator => {
    if (yearAverage(movies, yearIterator) != null) {
      result.push({ year: yearIterator, average: yearAverage(movies, yearIterator) });
    }
  });

  //Go through the results Array and extract the highest average

  highestRate = result.sort((a, b) => {
    if (b.average != a.average) return b.average - a.average
    else if (b.year > a.year) return -1;
    else if (a.year > b.year) return 1;
  })[0];

  return (movies.length === 0) ? undefined : "The best year was " + highestRate.year + " with an average rate of " + highestRate.average;

}

