// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0
    moviesArray.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            count++
        }
    })
    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } else {
        const total = moviesArray.reduce((accumulator, movie) => {
            if (!movie.score) {
                movie.score = 0
            }
            return accumulator + movie.score
        }, 0)
        return Math.round(((total / moviesArray.length) + Number.EPSILON) * 100) / 100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = moviesArray.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
    return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = []
    const orderedMovies = moviesArray.sort((a, b) => {
            return a.title.localeCompare(b.title)
    })
    const firstMovies = orderedMovies.slice(0, 20)
    firstMovies.forEach(movie => newArray.push(movie.title))
    return newArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = moviesArray.map((movie) => {
        const newMovie = {
            ...movie
          }

        const duration = newMovie.duration.split(' ')
        if(duration.length > 1) {
          hours = parseInt(duration[0].replace('h', ''))
          minutes = parseInt(duration[1].replace('min', ''))
          newMovie.duration = (hours * 60) + minutes
        } else if (duration[0].includes('min')) {
          minutes = parseInt(duration[0].replace('min', ''))
          newMovie.duration = minutes
        } else if (duration[0].includes('h')) {
          hours = parseInt(duration[0].replace('h', ''))
          newMovie.duration = hours * 60
        }
        return newMovie
    })
    return newArray
  
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
   
}
