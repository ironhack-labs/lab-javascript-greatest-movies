const movies = require('./data');

const moviesSmall = [
  {
    title: 'Forrest Gump',
    year: 1994,
    director: 'Robert Zemeckis',
    duration: '2h 22min',
    genre: ['Comedy', 'Drama', 'Romance'],
    score: 8.8
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    director: 'Irvin Kershner',
    duration: '2h 4min',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    score: 8.8
  }
];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((el) => el.director);
}
//console.log(getAllDirectors(movies));

// Bonus
function getUniqueDirectors(arr) {
  return getAllDirectors(arr).filter((el, i, array) => array.indexOf(el) === i);
}

//console.log(getUniqueDirectors(movies).length);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter(
    (el) => el.director === 'Steven Spielberg' && el.genre.includes('Drama')
  ).length;
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (!arr.length) return 0;
  return +(
    arr.reduce((total, el) => (el.score ? total + el.score : total + 0), 0) /
    arr.length
  ).toFixed(2);
}
//console.log(scoresAverage([]));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  return scoresAverage(arr.filter((el) => el.genre.includes('Drama')));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = [...arr];
  return newArr
    .sort((a, b) => a.year - b.year)
    .sort((a, b) => {
      if (a.year === b.year) {
        return a.title > b.title ? 1 : -1;
      } else {
        return 0;
      }
    });
}

//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  return arr
    .map((el) => el.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  return arr.map((el) => {
    const hours = Number(el.duration.slice(0, 1)) * 60;
    const minutes =
      el.duration.length > 2
        ? Number(el.duration.slice(3).replace('min', ''))
        : 0;
    // const hoursToMinutes = +timeArr[0].replace('h', '') * 60;
    // const minutesToNum = timeArr[1] ? +timeArr[1].replace('min', '') : 0;

    el.duration = minutes + hours;
    return typeof el.duration;
  });
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
