/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    var arraysMoviesDuration = movies.map(function(movie) {
        var splittedDuration = movie.duration.split(" ");
        if(splittedDuration.length == 2) {
        var totalMinutesInHour = parseInt(splittedDuration[0]) * 60
        var totalMinutes = parseInt(splittedDuration[1])
        } else if (splittedDuration.length == 1) {
            if(splittedDuration[0].indexOf("h") != -1) {
                var totalMinutesInHour = parseInt(splittedDuration[0]) * 60
                var totalMinutes = 0
            } else {
                var totalMinutesInHour = 0
                var totalMinutes = parseInt(splittedDuration[0])
            }
        }
            return Object.assign({}, movies, {duration: totalMinutes + totalMinutesInHour})
    })
    return arraysMoviesDuration
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    return +(movies.reduce((ac, movie) => ac + movie.rate , 0) / movies.length).toFixed(2)
}

// Get the average of Drama Movies

function filterByGenre(movies, genre) {
    return movies.filter((movie) => movie.genre.includes(genre));
}

function dramaMoviesRate(movies) {
    let dramaMovies = filterByGenre(movies, "Drama")
    if (dramaMovies.length == 0) { return undefined} 
    return ratesAverage(dramaMovies)
}

// Order by time duration, in growing order

function orderByDuration(movies) {
    let durationFix = turnHoursToMinutes(movies)
    console.log(durationFix)
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
    if(movies.length == 0){ return undefined }
    let stevenMovies = filterByGenre(movies, "Drama").filter((movies) => movies.director == "Steven Spielberg")
    return "Steven Spielberg directed " + stevenMovies.length + " drama movies!"
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    return movies.sort((movie1, movie2) => { 
        if (movie1.title < movie2.title){
            return -1;
        }
        if (movie1.title > movie2.title){
            return 1;
        }
        return 0;
    }).map((movie) => movie.title).splice(0, 20)
}

// Best yearly rate average

function bestYearAvg(movies) {
    if(movies.length == 0) {return undefined}
}