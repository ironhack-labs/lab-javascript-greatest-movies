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
    return (parseInt(copy.rate, 10) || 0);
  });
  const avg = (1 / ratesArray.length) *
    ratesArray.reduce((prev, curr) => prev + curr, 0);
  return (parseFloat(avg.toFixed(2)));
};

// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  const dramasArray = arr.filter(item => item.genre.includes('Drama'));
  if (dramasArray.length === 0) return undefined;
  return ratesAverage(dramasArray);
};

// Order by time duration, in growing order
const orderByDuration = (arr) => {
  const modifiedArray = turnHoursToMinutes(arr)
    .sort((a, b) => a.duration - b.duration || a.title.localeCompare(b.title));
  return modifiedArray;
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {
  if (arr.length === 0) return undefined;
  const count = arr
    .filter(item => item.director === 'Steven Spielberg')
    .filter(item => item.genre.includes('Drama'))
    .length;
  return `Steven Spielberg directed ${count} drama movies!`;
};
// Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
  const result = arr.sort((a, b) => a.title.localeCompare(b.title));
  const count = (result.length > 20 ? 20 : result.length);
  return result.slice(0, count).map(x => x.title);
};

// Best yearly rate average
const bestYearAvg = (arr) => {
  if (arr.length === 0) return undefined;
  const arrByYears = arr
    .reduce((prev, curr) => (prev[curr.year]).push(curr), {});
  const best = Object.values(arrByYears)
    .reduce((prev, curr) => (prev.avgRate < ratesAverage(curr)
      ? ({ year: curr.year, avgRate: ratesAverage(curr) })
      : prev), { avgRate: -1, year: 0 });
  return `The best year was ${best.year} with an average rate of ${best.avgRate}.`;
};
