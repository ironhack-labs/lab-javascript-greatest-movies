// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(function (movie) {
    return movie.director;
  }
  )

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  return movies.filter(function (movie) {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  }
  ).length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if (moviesArr.length === 0) {
    return 0
  }
  for (let movie of moviesArr) {
    if (!movie.score) {
      movie.score = 0;
    }
  }
  const totalScore = moviesArr.reduce(function (accum, currentValue) {

    return accum + currentValue.score
  }, 0)
  return Number((totalScore / moviesArr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter(function (movie) {
    return movie.genre.includes("Drama")
  })
  const dramaMoviesTotalScore = dramaMovies.reduce(function (accum, currentValue) {
    return accum + currentValue.score
  }, 0)
  if (dramaMovies.length === 0) {
    return 0
  }
  return Number((dramaMoviesTotalScore / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let sortedArr = moviesArr.slice(0);
  return sortedArr.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      }
      return 0
    }
    return a.year - b.year;
  })

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  let sortedArr = moviesArr.slice(0);
  return sortedArr.sort(function (a, b) {
    if (a.title < b.title) return -1
    else if (a.title > b.title) return 1
    return 0
  }).filter(function (movie) {
    return sortedArr.indexOf(movie) < 20
  }).map(function (movie) {
    return movie.title
  })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  return moviesArr.map(function (movie) {
    const durationArr = movie.duration.split(' ')
    for (let i = 0; i < durationArr.length; i++) {
      if (durationArr.length < 2) {
        durationArr.push(0)
      }
      durationArr[i] = parseInt(durationArr[i])
    }
    const duration = durationArr.reduce(function (accum, duration) {
      return accum * 60 + duration
    })
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: duration,
      genre: movie.genre,
      score: movie.score
    }
  })
}

// Solved iteration 7 in another way

// function turnHoursToMinutes(moviesArr) {
//   return moviesArr.map(function (movie) {
//     const durationArr = movie.duration.split(' ')
//     for (let i = 0; i < durationArr.length; i++) {
//       durationArr[i] = parseInt(durationArr[i])
//       console.log(durationArr[i])
//     }
//     if (durationArr.length === 2) {
//       return {
//         title: movie.title,
//         year: 1972,
//         director: movie.director,
//         duration: durationArr[0] * 60 + durationArr[1],
//         genre: movie.genre,
//         score: movie.score
//       }
//     } else if (durationArr.length === 1) {
//       return {
//         title: movie.title,
//         year: movie.year,
//         director: movie.director,
//         duration: durationArr[0] * 60,
//         genre: movie.genre,
//         score: movie.score
//       }
//     }
//   })
// }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

// filter by year, then find average by reduce
function bestYearAvg(moviesArr) {

  sortedMoviesByRate = moviesArr.slice(0).sort((a, b) => a.score - b.score || a.year - b.year)
  let currentHighestAverageMovieRating = 0
  let highestYearAverage = 0;
  // if moviesArr had one element
  if (moviesArr.length === 1) {
    return `The best year was ${moviesArr[0].year} with an average score of ${moviesArr[0].score}`
  } else if (moviesArr.length === 0) {
    return null
  }
  // for loop to iterate over the movies and filter each year then I used reduce to find the average score of that year
  for (let i = sortedMoviesByRate.length - 1; i >= 0; i--) {

    const currentTotalMovieRating = sortedMoviesByRate.filter(function (movie) {
      return movie.year === sortedMoviesByRate[i].year
    })

    if (currentTotalMovieRating.length === 1) {
      console.log(`The best year was ${currentTotalMovieRating[0].year} with an average score of ${currentTotalMovieRating[0].score}`)
    }
    const currentAverageMovieRating = currentTotalMovieRating.reduce(function (accum, currentScore) {
      return accum + currentScore.score
    }, 0) / currentTotalMovieRating.length

    if (currentAverageMovieRating > currentHighestAverageMovieRating) {
      currentHighestAverageMovieRating = currentAverageMovieRating
      highestYearAverage = sortedMoviesByRate[i].year
    } else if (currentAverageMovieRating === currentHighestAverageMovieRating && sortedMoviesByRate[i].year < highestYearAverage) {
      highestYearAverage = sortedMoviesByRate[i].year
    }

  }
  return `The best year was ${highestYearAverage} with an average score of ${currentHighestAverageMovieRating}`
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
