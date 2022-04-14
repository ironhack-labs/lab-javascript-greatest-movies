// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);
const data = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1994,
    director: 'Francis Ford Coppola',
    duration: '2h',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Steven Spielberg',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Thriller']
  }
];
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let newArr = arr.map((el) => el.director);
  return [...new Set(newArr)];
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let newArr = arr.filter((el) => {
    return (
      el.director === 'Steven Spielberg' &&
      el.genre.some((value) => value === 'Drama')
    );
  }).length;
  return newArr;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce(
    (acc, value) => acc + (value.score ? value.score : 0),
    0
  );
  const avg = parseFloat((sum / arr.length).toFixed(2));
  return avg;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let newArr = arr.filter((el) => el.genre.some((value) => value === 'Drama'));
  return scoresAverage(newArr);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return [...arr].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArr = [...arr].sort(({ title: a }, { title: b }) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return newArr.map((e) => e.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  arr.map((e) => {
    let newArr = e.duration.split(' ');
    e.duration =
      parseFloat(newArr[0]) * 60 + parseFloat(newArr[1] ? newArr[1] : 0);
  });
  return arr;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length === 0) return null;
  const yearsArr = arr.map((e) => e.year);
  const uniqueYears = [...new Set(yearsArr)];

  return uniqueYears;
}
//console.log(bestYearAvg(data));

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
