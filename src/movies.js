// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director)
    return[...new Set(allDirectors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length){
        return 0
      }
    let totalMovie = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return totalMovie.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0
    }
    const totalScore = moviesArray.reduce((acc, movie) => {
        if (typeof movie.score === 'number') {
            return acc + movie.score
        }
        return acc
    }, 0)
    const avgScore = totalScore / moviesArray.length
    return Number(avgScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    if (dramaMovies.length === 0) {
        return 0
      }
    const totalDramaScore = dramaMovies.reduce((acc, movie) => {
    if (typeof movie.score === 'number') {
        return acc + movie.score
    }
    return acc
    }, 0)
    const avgDramaScore = totalDramaScore / dramaMovies.length
    return Number(avgDramaScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray]
    moviesCopy.sort((a,b) => {
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
    return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray]
  moviesCopy.sort((a, b) => a.title.localeCompare(b.title))
  const movieTitles = moviesCopy.map(movie => movie.title)
  return movieTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let newMovie = {...movie}
        let duration = newMovie.duration.split(' ')
        let hours = 0
        let minutes = 0
        if (duration[0].includes('h')) {
          hours = parseInt(duration[0].replace('h', ''), 10)
        }
        if (duration[1] && duration[1].includes('min')) {
          minutes = parseInt(duration[1].replace('min', ''), 10)
        }
        newMovie.duration = hours * 60 + minutes
        return newMovie
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
}
