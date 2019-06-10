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
ratesAverage(movies)
console.log('2' + 3)

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average∫