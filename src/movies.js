// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function (movie){
    return movie.directors;
  })
}

const directors = ['nolan', 'lucas', 'nolan']

//using filter
const filtered = directors.filter(function(director, i) {
return directors.indexOf(director) === i
})

//using set -- is a specific data structure that cannot contain duplicates

const filteredDirectors = new Set(directors)
const arr = [...new Set(directors)]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filtered = movies.filter(function (movie) {
    if (movie.director --- 'Steven Spielberg' &&
    movie.genre.includes('Drama')){
      return true
    }
 })
 return filtered.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  const avgScore = movies.reduce(function (sum, movie){
    if (movie.score === '' || movie.score === undefined) {
      movie.score = 0;
    }
    return sum + (movie.score || 0)
  }, 0 / movies.length;
  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramas = movies.filter(function (movie){
    return movie.genre.indexOf('Drama') !== -1
  })
  return ratesAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.slice().sort(function (a, b) {
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
  const ordered = movies.map(function (movie) {
    return movie.title
  }).sort(function (a, b) {
    return a.localeCompare(b);
  }).slice(0, 20);
  return ordered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
    let convertedDuration = 0;
    if (movie.duration.includes ('h')) {
      convertedDuration += Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
    }
    if (movie.duration.includes('min')) {
      convertedDuration += Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
    }
    return { ...movie, duration: convertedDuration };
  });
}

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
