const movies = require(`./data`);
// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const allDirectorsArr = array.map((movie) => {
    return movie.director;
  })
  // Remove duplicate Directors
  const allDirectorsArrUnique = allDirectorsArr.filter((director, index) => {
    return allDirectorsArr.indexOf(director) === index
  })
  return allDirectorsArrUnique
}
console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const stevenSpielbergMovies = array.filter(movie => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  })
  // Find this new array's length (number of movies directed by Steven Spielberg)
  let numberStevenSpielbergMovies = stevenSpielbergMovies.length
  return numberStevenSpielbergMovies
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  const sumOfScore = array.reduce((previousValue, movie) => {
    return (previousValue + movie.score)
  }, 0)
  const arrayLength = array.length
  return Number((sumOfScore/arrayLength).toFixed(2))
}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  // Filter to get only an list of Drama Movies
  const dramaMovies = array.filter((movie) => {
    return movie.genre.includes("Drama")
  });
  // Sum the total score of Drama Movies
  const sumOfScoreDramaMovies = array.reduce((previousValue, movie) => {
    return (previousValue + movie.score)
  }, 0)
  let numberOfDramaMovie = dramaMovies.length;
  return Number((sumOfScoreDramaMovies/numberOfDramaMovie).toFixed(2))
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let newArray = JSON.parse(JSON.stringify(array))
  return newArray.sort((a, b) => {
    return a.year - b.year
  })
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let newArray = JSON.parse(JSON.stringify(array))
  return newArray.sort((a, b) => {
    return a.title.localeCompare(b.title)
  })
} 
console.log(orderAlphabetically(movies))

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {}
//   for (let i = 0; i < array.length; i++)
//     const hours = array[i].duration[0]
//     const minutes = array[i].duration[4:5]
//     const newDurationInMinutes = (hours * 60) + minutes
// }
// console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array) {}



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
