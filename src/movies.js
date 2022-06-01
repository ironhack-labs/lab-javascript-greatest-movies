// The `movies` array from the file `src/data.js`.
const movies = require(`./data`);
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(anArrOfObj) {
  let directorsArray = anArrOfObj.map((item) => {
    return item.director;
  })
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*function howManyMovies(anArrOfObj) {
  anArrOfObj.filter(typeOfFilm => {
    typeOfFilm.genre[typeOfFilm.genre.indexOf('Drama')]
  })
}*/
function howManyMovies(data) {
  const spielbergDrama = data.filter(element => (
    element.director === "Steven Spielberg" && element.genre.includes("Drama")));
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(data) {
  const sum = data.reduce((acc, val) => {
    if (!val.score) {
      return acc;
    }
    return acc + val.score;
}, 0)
  return 1 * (sum / data.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(data) {
  const dramaMovies = data.filter(movie =>
    movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data) {
  const copy = [... data]; //or copy = Array.from(data)

  return copy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    } return a.year - b.year;
})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(data) {
  answer = data.sort(data.title)
  return answer.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
    bestYearAvg,
  };
}
