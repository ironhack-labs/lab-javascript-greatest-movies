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
    let sum = rate.reduce((acc, currValue) => {
        return acc + currValue
    })
    let result = sum / moviesArray.length
    return result
}



// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
    console.log(moviesArray.filter(movie => { movie.genre.contains = "drama" }))

}
// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
