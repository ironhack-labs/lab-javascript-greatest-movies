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
    item.duration = itemHoursToMinutes(item);
    return item;
  });
  return result;
};

const w = turnHoursToMinutes([{ duration: '2h 12m' }, { duration: '2h' }]);
w;
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
