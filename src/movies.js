// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies2 = [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": ["Crime", "Drama"],
    "score": 9.3
  }
]
const test = [{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime", "Drama"],
  "score": 9.3
}]


function getAllDirectors(moviesArray) {
  return [...new Set(moviesArray.map(movie => movie.director))]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(el => el.director === 'Steven Spielberg' && el.genre.includes('Drama')).length
}

// console.log(howManyMovies(movies2));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0
  return +(moviesArray.reduce((acc, curr) => curr.score ? acc + curr.score : acc, 0) / moviesArray.length).toFixed(2)
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredArr = moviesArray.filter(el => el.genre.includes('Drama'))
  if (!filteredArr.length) return 0
  return +(filteredArr.reduce((acc, curr) => acc + curr.score, 0) / filteredArr.length).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year > b.year) return 1
    if (a.year < b.year) return -1
    return a.title.localeCompare(b.title)
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray].sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20).map(movie => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {
//   const newArr = moviesArray.map(movie => {
//     let [hours, minutes] = movie.duration.split(' ')
//     hours = hours.split("h")[0] * 60;
//     minutes = minutes.split("min")[0];
//     //   .reduce((acc, curr, idx) => idx === 0 ? acc + helperParseInt(curr) * 60 : acc + helperParseInt(curr), 0)
//     movie.duration = hours + +minutes
//     return movie
//   })
//   return newArr;
// }
function turnHoursToMinutes(moviesArray) {
  const newArr = moviesArray.map(function (movie) {
    return durationToMinutes(movie);
  });

  function durationToMinutes(movie) {
    if (typeof movie.duration === "number") {
      return movie;
    }

    movieDuration = movie.duration;

    const timeString = movieDuration.split(" ");
    // Example:
    // "2h 22min"   ["2h", "22min"]
    // "2h"   ["2h"]
    // "22min"  ["22min"]

    const minutesDuration = timeString.reduce(function (total, string) {
      if (string.includes("h")) {
        const numOfHours = parseInt(string);
        return total + numOfHours * 60;
      } else {
        const numOfMinutes = parseInt(string);
        return total + numOfMinutes;
      }
    }, 0);

    movie.duration = minutesDuration;
    return movie;
  }

  return newArr;
}

function helperParseInt(str) {
  return parseInt(str.replace(/[^\d]/g, ''))
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

