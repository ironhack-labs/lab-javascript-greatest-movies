// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let mappedDirectors = movies.map((singleMovie) => {
    return singleMovie.director
  })
  return mappedDirectors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let filteredMovies = movies.filter((singleMovie) => {
    return (singleMovie.genre.includes("Drama") && singleMovie.director === "Steven Spielberg")
  })
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  let averageScore = movies.reduce((sum, singleMovie) => {
    if (typeof singleMovie.score === "number") {
      return sum += singleMovie.score
    } else {
      return sum += 0
    }
  }, 0)
  return parseFloat((averageScore / movies.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0
  }
  let filteredMovies = movies.filter((singleMovie) => {
    return singleMovie.genre.includes("Drama")
  })
  if (filteredMovies.length === 0) {
    return 0
  }
  let averageDramaScore = filteredMovies.reduce((sum, singleMovie) => {
    return sum += singleMovie.score;
  }, 0)
  return parseFloat((averageDramaScore / filteredMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let cloneMovies = JSON.parse(JSON.stringify(movies))
  let orderedMovies = cloneMovies.sort((first, second) => {
    if (first.year > second.year) {
      return 1
    }
    else if (first.year < second.year) {
      return -1
    }
    else {
      if (first.title > second.title) {
        return 1
      }
      else if (first.title < second.title) {
        return -1
      }
      else {
        return 0
      }
    }
  })
  return orderedMovies
}

function orderAlphabetically(movies) {
  let cloneMovies = JSON.parse(JSON.stringify(movies))
  let orderedMovies = cloneMovies.sort((first, second) => {
    if (first.title < second.title) {
      return -1
    }
    else if (first.title > second.title) {
      return 1
    }
    else {
      return 0
    }
  })

  let titles = orderedMovies.map((singleMovie) => {
    return singleMovie.title
  })
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let cloneMovies = JSON.parse(JSON.stringify(movies))
  cloneMovies.forEach((singleMovie) => {
    singleMovie.duration = parseFloat(singleMovie.duration) * 60;
  })
  return cloneMovies
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
