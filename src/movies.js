// The `movies` array from the file `src/data.js`.

//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(function(movie) {
    return movie.director
  })
  // 1.1 order directors
  const orderedDirectors = allDirectors.sort(function(a,b) {
    a.localeCompare(b)
  })
  // 1.1 iterate over, if next value is the same as current, set ''
  for (i = 0; i < orderedDirectors.length - 1; i++) {
    if (orderedDirectors[i] === orderedDirectors[i+1]) {
      orderedDirectors[i] = ''
    }
  }
  // 1.1 remove empty strings
  orderedDirectors.filter(function(director) {
    director !== ''
  })
  return orderedDirectors
}

// Iteration 1.1 - cleaning the array from duplicates

// sort array


// iterate and compare to the previous
// if previous is the same, set empty string

// filter all empty strings out

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMoviesSpielberg = movies.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return dramaMoviesSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {return 0}
  const scores = movies.map(function(movie) {
    return movie.score
  })
  const filteredScores = scores.filter(function(score) {
    return typeof score !== 'undefined'
  })
  //console.log(scores)
  const scoresSum = filteredScores.reduce(function(acc, val) {
    return acc + val
  })
  return Number((scoresSum / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = [...movies]
  const orderedMovies = moviesCopy.sort(function(a,b) {
    return a.year - b.year || a.title.localeCompare(b.title)
  })
  return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = [...movies]
  //console.log(moviesCopy)
  const orderedMovies = moviesCopy.sort(function(a,b) {
    return a.title.localeCompare(b.title)
  })
  //console.log(orderedMovies)
  const orderedMoviesFirst20 = orderedMovies.filter(function(movie, index) {
    return index < 20
  })
  const orderedTitles = orderedMoviesFirst20.map(function(movie) {
    return movie.title
  })
  return orderedTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  moviesCopy = [...movies]
  const timeInMin = moviesCopy.map(function(movie) {
    //console.log(Number(movie.duration.substr(0, 1)) * 60 + Number(movie.duration.substring(movie.duration.indexOf(' ')+1, movie.duration.indexOf('min'))))
    return Number(movie.duration.substr(0, 1)) * 60 + Number(movie.duration.substr(3, 2))
  })
  moviesTimeInMin = moviesCopy.map(function(movie, i) {
    movie.duration = timeInMin[i]
    return movie
  })
  return moviesTimeInMin
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

/* 1. */
// create an array with one item per year -> each item is the unique year number
function getEachYear(movies) {
  const eachYear = movies.map(function(movie) {
    return movie.year
  })
  // 1.1 order years
  const orderedYears = eachYear.sort(function(a,b) {
    a.year - b.year
  })
  // 1.1 iterate over, if next value is the same as current, set ''
  for (i = 0; i < orderedYears.length - 1; i++) {
    if (orderedYears[i] === orderedYears[i+1]) {
      orderedYears[i] = 0
    }
  }
  // 1.1 remove empty strings
  orderedYears.filter(function(year) {
    year !== 0
  })
  return orderedYears
}



/* 3. */
function avgScore(arr, year) {
  // create array filtered that year matches year of current iteration
  const moviesSelectedYear = arr.filter(function(el) {
    return el.year === year
  })
  // reduce to avg score
  const avgScore = scoresAverage(moviesSelectedYear)
  // return object {year: <current iteration year>, avgScore: <avg score>}
  return {year: year, avgScore: avgScore}
}



function bestYearAvg(movies) {
  if(movies.length === 0) {return null}
  const avgScorePerYear = []
  // create an array with one item per year -> each item is the unique year number
  const years = getEachYear(movies)
  // loop through this years array
  for (year of years) {
    // create array filtered that year matches year of current iteration
    // reduce to avg score, return object {year: <current iteration year>, avgScore: <avg score>}
    // push this object to new array avgScorePerYear
    avgScorePerYear.push(avgScore(movies, year))
  }
  // sort avgScorePerYear by avgScore
  avgScorePerYear.sort(function(a,b) {
    return b.avgScore - a.avgScore || a.year - b.year
  })
  const bestYear = avgScorePerYear[0]
  return `The best year was ${bestYear.year} with an average score of ${bestYear.avgScore}`
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

