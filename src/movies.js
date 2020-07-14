
function getAllDirectors (array) {
  const directorArray = array.map(movie => {
    return movie.director
  })
  return directorArray
}
// console.log(getAllDirectors(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (array) {
  const directorSpielberg = array.filter((movie) => {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      return movie
    }
  })
  const onlyTitle = directorSpielberg.map(movie => movie.title)
  return onlyTitle.length
}
// console.log(howManyMovies(movies))

// // Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array) {
  const sumRatingCalc = array.reduce((total, movie) => {
    return (total + (movie.rate || 0)) // Does this make sense??? [6, , ] should average out to 6 not 2
  }, 0)
  const averageCalc = sumRatingCalc / array.length || 0
  return Math.round(averageCalc * 100) / 100
}
// console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
// This function receives and array of movies and calculates the average rating of movies whose genre is drama
// The plan:
//    Separate drama movies from the rest of the movies
//    Use our already made function ratesAverage to calculate the average rating of those movies
// Lisette:
// This function needs to filter out the average rating but only if the genre of the movie is drama
// The plan: Filter out the drama movies from all the movies, followed by calculating the average rating.
function dramaMoviesRate (array) {
  const dramaMovies = array.filter(movie => movie.genre.includes('Drama'))
  return ratesAverage(dramaMovies)
}

// console.log(dramaMovieRates(movies));

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// This function (orderByYear) will order the movies in a chronological order by 
// looking at the production year and sort them accordingly.

function orderByYear (array) {
  const clone = Array.from(array)
  return clone.sort((movieA, movieB) => {
    if (movieA.year < movieB.year) {
      return -1
    } else if (movieA.year > movieB.year) {
      return 1
    } else {
      if (movieA.title < movieB.title) {
        return -1
      } else if (movieA.title > movieB.title) {
        return 1
      }
      return 0
    }
  })
}
// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// This function will print the first 20 movies of the array "movies" in an alphabetical order
function orderAlphabetically (array) {
  const clone = Array.from(array)
  const sorted = clone.sort((movieA, movieB) => {
    if (movieA.title < movieB.title) {
      return -1
    } else if (movieA.title > movieB.title) {
      return 1
    } else {
      return 0
    }
  })
  return sorted.reduce((total, movie) => {
    if (total.length < 20) {
      total.push(movie.title)
    }
    return total
  }, [])
}
// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  // 1h 22min
  // 2h
  // 30min
  const hourRegex = /(\d+)h/g
  const minuteRegex = /(\d+)min/g
  const test = array.map(movie => {
    const hours = hourRegex.exec(movie.duration)[1]
    const minutes = minuteRegex.exec(movie.duration)[1]
    const cloneMovie = { ...movie }
    cloneMovie.duration = hours * 60 + minutes
    return cloneMovie
  })
  return test

}

// // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
