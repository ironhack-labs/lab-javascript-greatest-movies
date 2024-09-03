// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map((eachMovie) => {
    return eachMovie.director
  })
  return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let countMovies = 0
  moviesArray.filter((movie) => {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
      countMovies++
    }
  })
  return countMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0
  }
  let sumScore = moviesArray.reduce((acc, eachMovie) => {
    if (eachMovie.score !== undefined) {
      return acc + eachMovie.score
    } else {
      return acc
    }
  }, 0)
  let average = (sumScore / moviesArray.length).toFixed(2)
  return parseFloat(average)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((eachMovie) => {

    if (eachMovie.genre.includes("Drama")) {
      return true
    } else {
      return false
    }
  })

  if (dramaMovies.length === 0) {
    return 0;
  }

  let totalDrama = dramaMovies.reduce((acc, eachMovie) => {
    if (eachMovie.score) {
      return acc + eachMovie.score
    } else {
      return acc
    }
  }, 0)
  let average = (totalDrama / dramaMovies.length).toFixed(2)
  return parseFloat(average)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let ordered = moviesArray.toSorted((movie1, movie2) => {
    if(movie1.year < movie2.year) {
      return -1
    } else if (movie2.year < movie1.year) {
      return 1
    } else {
      return movie1.title.localeCompare(movie2.title)
    }
  })
  return ordered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let onlyTitle = moviesArray.map((eachMovie) => {
    return eachMovie.title
  })

  let orderedTitle = onlyTitle.toSorted((movie1, movie2) => {
    if(movie1 < movie2) {
      return -1
    } else if (movie2 < movie1) {
      return 1
    } else {
      return movie1.localeCompare(movie2.title)
    }
  })
  return orderedTitle.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
