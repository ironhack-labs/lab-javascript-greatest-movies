/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// this is just a helper function
function stringToMinutes(string) {
    var arr = string.split("h");
    if (arr.length < 2) {
        arr.unshift("0");
    }
    var hours = Number(arr[0]);
    var minutes = Number(arr[1].split("min")[0]);

    return hours * 60 + minutes;
}

function turnHoursToMinutes(moviesArray) {
    let result = moviesArray.map((el) => {
        return {
            title: el.title,
            year: el.year,
            director: el.director,
            duration: stringToMinutes(el.duration),
            genre: el.genre,
            rate: el.rate
        }
    })
    return result
}

// Get the average of all rates with 2 decimals


function ratesAverage(moviesArray) {
    let rate = moviesArray.map(movie => {
        return movie.rate
    })
    if (rate.length == 0) { return undefined }
    let sum = rate.reduce((acc, currValue) => {
        return acc + currValue
    })
    let result = sum / moviesArray.length
    result = Math.round(result * 1e2) / 1e2;
    return result
}



// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
    let result = ratesAverage(moviesArray.filter(movie => movie.genre.includes('Drama')))

    console.log(result)
    return (result)
}
// Order by time duration, in growing order

function orderByDuration(movieArray) {

    return movieArray.sort((a, b) => {
        if (a.duration > b.duration) { return 1 }

        else if (a.duration < b.duration) { return -1 }
        else { if (a.title < b.title) { return -1 } }
    })

}
// How many movies did STEVEN SPIelBERG


function howManyMovies(moviesArray) {
    let dramaMoviesBySpielberg = moviesArray.filter(movie => (movie.genre.includes('Drama')) && (movie.director.includes('Steven Spielberg')))
    if (moviesArray.length == 0) { return undefined }
    return `Steven Spielberg directed ${dramaMoviesBySpielberg.length} drama movies!`

}
// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let onlyTheTitleArray = moviesArray.map(movie => {
        return movie.title
    })
    let sortedTitleArray = onlyTheTitleArray.sort()
    let slicedArray = sortedTitleArray.slice(0, 20)
    return slicedArray

}
// Best yearly rate average
