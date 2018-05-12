/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const itemHoursToMinutes = ({ duration: dur }) => {
  const splitsArray = dur.toString().split(' ');
  const hoursInMinutes = splitsArray[0].includes('h')
    ? 60 * (parseInt(splitsArray[0], 10) || 0)
    : 0;
  const minutes = splitsArray[0].includes('h')
    ? parseInt(splitsArray[1], 10) || 0
    : parseInt(splitsArray[0], 10) || 0;
  const result = hoursInMinutes + minutes;
  return result;
};
const turnHoursToMinutes = (arr) => {
  const result = arr.map((item) => {
    const copy = Object.assign({}, item);
    copy.duration = itemHoursToMinutes(copy);
    return copy;
  });
  return result;
};

// Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
  const ratesArray = arr.map((item) => {
    const copy = Object.assign({}, item);
    return parseInt(copy.rate, 10);
  });
  const avg = (1 / ratesArray.length) *
    ratesArray.reduce((prev, curr) => prev + curr, 0);
  return (parseFloat(avg.toFixed(2)));
};

// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  const dramasArray = arr.filter(item => item.genre.includes('Drama'));
  if (dramasArray.length === 0) return undefined;
  ratesAverage(dramasArray);
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
