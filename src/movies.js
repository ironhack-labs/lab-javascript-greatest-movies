// The `movies` array from the file `src/data.js`.
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

const getMessageYear = (movies) => `The best year was ${movies[0].year} with an average score of ${movies[0].score}`

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//const getAllDirectors = (movies) => movies.map((obj) => obj.director).filter((director, index, matrix) => matrix.indexOf(director) === index);

function getAllDirectors (movies) { 
  return Object.keys(movies.reduce((directors, movie) => {
    if(!directors[movie.director]){
      directors[movie.director] = true;
    }
    return directors;
  }, {}));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter((object) => object.director === 'Steven Spielberg' && object.genre.indexOf('Drama') !== -1).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies){
  return movies.reduce((avg, movie, index) => {
    avg += movie.score ? (movie.score / movies.length) : 0;
    return movies.length - 1 === index ? parseFloat(avg.toFixed(2)) : avg;
  }, 0)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies){
  return scoresAverage(movies.filter((movie) => movie.genre.includes('Drama')))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return isEmpty(movies) ? null : [...movies].sort((a,b) => {
    if(a.year > b.year){
      return 1;
    } else if(a.year < b.year) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.map((movie) => movie.title)
    .sort((a,b) => a.localeCompare(b))
    .slice(0, 20);
} 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map((obj) => ({duration: calculateDateToMinutes(obj)}))
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  return isEmpty(movies) ? null : 
    getMessageYear(
      getAllYears(movies)
        .map((year) => (
          {
            year: year, 
            score: scoresAverage(getScoreYear(movies, year))
          }
        ))
        .sort((a, b) => b.score - a.score)
    );
}

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
