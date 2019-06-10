/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
    totalTime = 0
    let durationFilm = []
    let newListOfFilms = movies.map(film => {
        durationFilm = film.duration.split(" ")
        if (durationFilm.length === 2) {
            totalTime = parseInt(durationFilm[0]) * 60 + parseInt(durationFilm[1])
        } else {
            if (durationFilm[0].includes("h")) {
                totalTime = parseInt(durationFilm[0]) * 60
            } else {
                totalTime = parseInt(durationFilm[0])
            }
        }
        return {...film, duration: totalTime }
    })
    return newListOfFilms
}
turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    let avg = movies.reduce((prev, current) => {
        return prev + current.rate
    }, 0) / movies.length
    return parseFloat(avg.toFixed(2))
}


// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaQty = 0
    let existsOneDramaMovie = false
    let avg = movies.reduce((prev, current) => {
        if (current.genre.length > 0) {
            if (current.genre.indexOf('Drama') >= 0) {
                dramaQty += 1
                existsOneDramaMovie = true
                return prev + current.rate
            } else {
                return prev + 0
            }
        } else {
            dramaQty = 1
            return current.rate
        }

    }, 0) / dramaQty
    if (existsOneDramaMovie) {
        return parseFloat(avg.toFixed(2))
    } else {
        return undefined
    }

}

dramaMoviesRate(movies)

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average∫