// The `movies` array from the file `src/data.js`.

//const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const mappedArray = movies.map(eachMovies => {
    return eachMovies.director
  });
  return mappedArray
}

//     return eachNumer * 2

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSteven = movies.filter(eachMovies => {
    return eachMovies.director.includes('Spielberg') && eachMovies.genre.includes('Drama')
  })
  return dramaSteven.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  } else {
    const sumScores = movies.reduce((acc, eachMovies) => {
      return acc + eachMovies.score
    }, 0)

    const totalScore = sumScores / movies.length
    return parseFloat((totalScore).toFixed(2))
  }
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachMovies => {
    return eachMovies.genre.includes('Drama')
  })
  const averageDramaMovies = scoresAverage(dramaMovies)
  if (dramaMovies) {
    return averageDramaMovies
  } else {
    return 0
  }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort(function (a, b) {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return 1
    }
    return 0
  }),
    moviesCopy.sort(function (a, b) {
      if (a.year < b.year) {
        return -1
      } else if (a.year > b.year) {
        return 1
      } else {
        return 0
      };
    })
  return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const newArr = arr.map(eachMovie => {
    return eachMovie.title
  })

  newArr.sort(function (a, b) {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
    return 0
  })
  return newArr.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesCopy) {
  const durationTime = arr.map(eachMovie => {
    return eachMovie.duration
  })
  const parts = durationTime.split('h');
  const total = parseInt(parts[0] * 60 + parseInt(parts[2]))
  console.log(total)
  return total
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) { }



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
