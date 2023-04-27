// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  /*// const allDirectors = moviesArray.map((movie) => movie.director)

  // Compares if the first index where the current is inside the same array...
  //is the same as the current value, if true, don't discards it
  // const filter = allDirectors.filter((director, index, self) => {
  //   return self.indexOf(director) === index
  // })*/

  // The two first const can be transformed into:
  const allDirectorsFiltered = moviesArray
    .map((movie) => movie.director)
    .filter((director, index, self) => self.indexOf(director) === index)

  /*// Old School method
  // let filtered = []
  // allDirectors.forEach((director) => {
  //   filtered.includes(director) ? void 0 : filtered.push(director)
  // })*/

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
function orderByYear(moviesArray) {
  const movies = JSON.parse(JSON.stringify(moviesArray))
  return movies
    .sort((movieA, movieB) => {
      if (movieA.year === movieB.year) {
        if (movieA.title > movieB.title) return 1
        if (movieA.title < movieB.title) return -1
      }
      return movieA.year - movieB.year
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movies = JSON.parse(JSON.stringify(moviesArray))
  return movies
    .map(movie => movie.title)
    .sort()
    .splice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movies = JSON.parse(JSON.stringify(moviesArray))
  movies.map(movie => {
    const mIndex = movie.duration.indexOf('min') - 2
    const hToMin = movie.duration[0] * 60
    let minutes = 0

    movie.duration.indexOf("min") === - 1
      ? minutes = 0
      : minutes = Number(movie.duration.slice(mIndex, mIndex + 2))

    movie.duration = hToMin + minutes
  })

  return movies
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const movies = JSON.parse(JSON.stringify(moviesArray))
  let bestYear = 0, bestScore = 0

  // What if the array is empty? Return null
  if(movies.length < 1) return null

  movies.map(movie => movie.year)
    .filter((year, index, self) => self.indexOf(year) === index) // saves only the years
    .sort((a, b) => a - b) // sorts incrementally
    .forEach(year => { // let's evaluate one year at a time

      // Filters the movies with the year in turn
      const moviesPerYear = movies.filter((movie) => movie.year === year)

      // creates a variable for the Acc to register the sum of scores
      let yearScore = moviesPerYear.reduce((acc, movie) => {
        return acc + (movie.score / moviesPerYear.length) // Score average
      }, 0)

      // Adjusts the best score
      bestScore < yearScore
        ? ((bestScore = yearScore), (bestYear = year))
        : void 0
    })
  
  return `The best year was ${bestYear} with an average score of ${bestScore}`
}


// .filter((director, index, self) => self.indexOf(director) === index)