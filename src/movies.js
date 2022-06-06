// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directorsList = arr.map(function (el) {
    return el.director
  })
  return directorsList
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sBergMovies = arr.filter(function (movies) {
    if ((movies.genre.indexOf('Drama') >= 0)
      && (movies.director === 'Steven Spielberg')) {
      return true;
    }
  })

  return sBergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr2) {
  const scores = arr2.reduce(function (prev, curr) {
    return prev + curr.score
  }, 0)
  const newResult = scores / arr2.length;
  return Number.parseFloat(newResult);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr3) {
  const drama = arr3.filter(function (el) {
    if (el.genre.indexOf('Drama') >= 0) {
      return el
    }
  })
  const dramascores = scoresAverage(drama);
  return dramascores;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const movieListYear = arr.sort(function (a, b) {
    return a.year - b.year
  })
  return movieListYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const order = arr.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  })
  const list = order.map(function (el) {
    return el.title
  })
  const shortList = list.slice(0, 20);
  return shortList;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function movieDuration(duration) {
  const hour = duration.split('h')[0];
  const hourNum = Number(hour)
  const min = duration.split('h')[1].split('min')[0].trim()
  const minNum = Number(min);
  const result = ((hourNum * 60) + minNum)
  return `${result} min`
}

function turnHoursToMinutes(arr) {
  const alteredTime = arr.map(function (el) {
    const time = movieDuration(el.duration)
    const newElement = { ...el, duration: time }
    return newElement;
  })
  return alteredTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
