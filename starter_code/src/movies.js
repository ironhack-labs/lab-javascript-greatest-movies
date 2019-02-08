/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function separateDuration(durationString) {
    return durationString.split(" ")
}

function oneArgument(duration) {
    return duration[0].indexOf("h") === -1 ?
        +duration[0].replace("min", " ") : +duration[0].replace("h", "") * 60
}

function twoArguments(duration) {
    return +duration[0].replace("h", "") * 60 + +duration[1].replace("min", " ")
}

function durationInMinutes(durationArray) {
    return durationArray.length === 1 ? oneArgument(durationArray) : twoArguments(durationArray)
}

function newObject(movie, minutes) {
    return Object.assign({}, movie, { duration: minutes })

}

function turnHoursToMinutes(movies) {
    var newMovies = []
    movies.map(function(movie) {
        newMovies.push(newObject(movie, durationInMinutes(separateDuration(movie.duration))))
    })
    return newMovies
}

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    var sum = arr.reduce((acc, val) => {
        return acc + Number(val.rate)
    }, 0)
    return sum / arr.length
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
    var sum = arr.filter(movie => movie.genre = 'Drama').reduce((acc, val) => {
        return acc + Number(val.rate)
    }, 0)
    return sum / arr.length, 2

}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average