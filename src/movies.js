const movies = require(`./data`);

// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  return arrayOfMovies.map(item => item.director)
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  return arrayOfMovies.filter(item => (item.genre.includes('Drama') && item.director === "Steven Spielberg")).length
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return 0;
  }
  const sum = arrayOfMovies.reduce((total, movie) => {
    if (!movie.score){
      return total;
    }
    return movie.score + total;
  }, 0);
  return +(sum / arrayOfMovies.length).toFixed(2);
}

// console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayOfMovies) {
  if (arrayOfMovies.findIndex(array => array.genre.includes('Drama')) === -1){
    return 0;
  }
  return +(arrayOfMovies.filter(item => item.genre.includes('Drama')).reduce((total, movie) => movie.score + total, 0) / arrayOfMovies.filter(item => item.genre.includes('Drama')).length).toFixed(2);
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies) {
  const newArray = JSON.parse(JSON.stringify(arrayOfMovies));
  newArray.sort(function (movie1, movie2) {
    if (movie1.year < movie2.year) {
      return -1;
    }
    if (movie1.year > movie2.year){
      return 1;
    } else if (movie1.title < movie2.title){
      return -1
    }
  })
  return newArray
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  if (arrayOfMovies.length < 20){
    return arrayOfMovies.map(item => item.title).sort();
  }
  const newArray = arrayOfMovies.map(item => item.title).sort();
  return newArray.slice(0, 20);
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function hoursToMinutes(movie) {
  const newMovie = JSON.parse(JSON.stringify(movie));
  let minutes = 0;
  newMovie.duration = newMovie.duration.split(" ");
  for (let item of newMovie.duration) {
    if (item.endsWith("h")) {
      minutes += parseInt(item[0]) * 60;
    }
    if (item.endsWith("min")) {
      let time = item.replace("min","");
      minutes += parseInt(time);
    }
  }
  newMovie.duration = minutes;
  return newMovie;
}

function turnHoursToMinutes(arrayOfMovies) {
  return arrayOfMovies.map(hoursToMinutes);
}

console.log(turnHoursToMinutes(movies));
console.log(parseInt("352"))

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
