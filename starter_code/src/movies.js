/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
  const itemHoursToMinutes = dur => ((parseInt(dur.split(' ')[1], 10) * 60) + parseInt(dur.split(' ')[2], 10));
  const result = arr.map((item) => {
    item.duration = itemHoursToMinutes(item.duration);
    return item;
  });
  return result;
};

// Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {

};

// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {

};

// Order by time duration, in growing order
const orderByDuration = (arr) => {

};

// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {

};

// Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {

};

// Best yearly rate average
const bestYearRatings = (arr) => {

};
