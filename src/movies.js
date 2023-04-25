// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // const allDirectors = moviesArray.map((movie) => movie.director)

  // Compares if the first index where the current is inside the same array...
  //is the same as the current value, if true, don't discards it
  // const filter = allDirectors.filter((director, index, self) => {
  //   return self.indexOf(director) === index
  // })

  // The two first const can be transformed into:
  const allDirectorsFiltered = moviesArray
    .map((movie) => movie.director)
    .filter((director, index, self) => self.indexOf(director) === index)

    // Old School method
  // let filtered = []
  // allDirectors.forEach((director) => {
  //   filtered.includes(director) ? void 0 : filtered.push(director)
  // })

  return allDirectorsFiltered
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDramaMovies = moviesArray
    .filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  
  return stevenDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const average = moviesArray
    .reduce((acc, movie) => {
      movie.score === undefined ? movie.score = 0 : movie.score * 1
      return acc + (movie.score * 1 ) / moviesArray.length
    }, 0)
  
  return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  )

  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
