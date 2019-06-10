/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
    totalTime = 0
    let durationFilm = []
    let newListOfFilms = movies.map(film => {
        console.log(film.duration)
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

        console.log(totalTime)
        return {...film, duration: totalTime }
    })
    return newListOfFilms
}
turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average