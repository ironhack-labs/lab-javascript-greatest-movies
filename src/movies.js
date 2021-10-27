// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to map through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named getAllDirectors() that receives an array of movies as an argument and returns a new (mapped array).
function getAllDirectors(arr) {
  const directors = arr.map(function(movie) {
    return movie.director;
  });
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function isSpielbergDrama(movie){
  const director = movie.director
  const genres = movie.genre
  const isDrama = genres.includes("Drama")
  const isSpielberg = director === "Steven Spielberg"
  return isSpielberg && isDrama
}

function howManyMovies(movies) {
  return movies.filter(isSpielbergDrama).length 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function sumScores (acc, movie){
  const score = movie.score
  return acc + score
  }

function ratesAverage(movies) {
  const sum = movies.reduce(sumScores, 0)
  const sumAverage = sum / movies.length
  return Math.round(sumAverage*100)/100                 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  // filter out the drama movies
  const dramas = movies.filter(function (movie) {
    return movie.genre.indexOf('Drama') !== - 1
  })
  return ratesAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = JSON.parse(JSON.stringify(movies)).sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(function (movie) {
    return movie.title
  })
  const sorted = titles.sort(function (a, b) {
    return a.localeCompare(b);
  })
  const res = sorted.slice(0, 20);
  return res;
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
