// The `movies` array from the file `src/data.js`.
const averageOperation = (sumTotal, totalElements) => Math.round((sumTotal / totalElements) * 100) / 100;

const isEmpty = (movies) => !movies.length ? true : false;

const calculateDateToMinutes = (time) => time.duration.toLowerCase().replace('h','').replace('min','')
  .split(' ')
  .map((objNum, index) => !index ? objNum * 60 : objNum * 1)
  .reduce((acc,cur) => acc + cur, 0);

const getAllYears = (movies) => movies
  .map((obj) => obj.year)
  .filter((years, index) => movies.map((obj) => obj.year).indexOf(years) === index)
  .sort()

const getScoreYear = (movies, year) =>  movies
  .filter((movie) => movie.year === year)
  .map((movie) => movie.score)

const getMessageYear = (movies) => `The best year was ${movies[0].year} with an average score of ${movies[0].score}`

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => movies.map((obj) => obj.director).filter((director, index, matrix) => matrix.indexOf(director) === index);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => movies.filter((object) => object.director === 'Steven Spielberg').filter((object) => object.genre.indexOf('Drama') !== -1).length

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (movies) => isEmpty(movies) ? 0 :averageOperation(movies.map((obj) => obj.score).filter((score) => typeof score === 'number').reduce((acc, cur) => acc + cur, 0), movies.map((obj) => obj.score).length)

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) => !movies.length || !movies.filter((object) => object.genre.indexOf('Drama') !== -1).length ? 0 : averageOperation(
  movies.filter((object) => object.genre.indexOf('Drama') !== -1).filter((object) => typeof object.score === 'number').map((obj) => obj.score).reduce((acc,cur) => acc + cur, 0),
  movies.filter((object) => object.genre.indexOf('Drama') !== -1).filter((object) => typeof object.score === 'number').map((obj) => obj.score).length
);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => isEmpty(movies) ? null : movies.sort(() => -1).sort((a,b) => a.year - b.year);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => movies.map((obj) => obj.title).sort().filter((obj, index) => index < 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => movies.map((obj) => ({duration: calculateDateToMinutes(obj)}))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (movies) => isEmpty(movies) ? null : 
  getMessageYear(
    getAllYears(movies)
      .map((year) => (
        {
          year: year, 
          score: averageOperation(
            getScoreYear(movies, year).reduce((acc, cur) => acc + cur, 0), 
            getScoreYear(movies, year).length)
        }
      ))
      .sort((a, b) => b.score - a.score));

console.log(bestYearAvg([
  { year: 2000, score: 9 },
  { year: 2000, score: 8 },
  { year: 1978, score: 10 },
  { year: 1978, score: 7 }
]));

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
    bestYearAvg,
  };
}
