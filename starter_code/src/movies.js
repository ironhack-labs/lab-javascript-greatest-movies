/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
    var moviesWithMinutes = movies.map(movie => {
        var hours = movie.duration.indexOf("h")
        if (hours !== -1) {
            hours = movie.duration.substring(0, hours)
        }
        else {
            hours = 0
        }
        var mins = movie.duration.indexOf("m")
        if (mins !== -1) {
            mins = movie.duration.substring(movie.duration.indexOf("h") + 1, mins)
        } else {
            mins = 0;
        }
        horas = Number(hours)
        minutos = Number(mins)
        movie.duration = (horas * 60) + minutos
        return movie;
    })
    return moviesWithMinutes;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var total = 0;
    movies.map(movie => {
        total += Number(movie.rate);
    })
    return total / movies.length
}
// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var dramaMovies = movies.filter(movie => {
        return movie.genre.indexOf('Drama') !== -1
    })
    return ratesAverage(dramaMovies)
}

// Order by time duration, in growing order
function orderByDuration(movies) {
    var withNumbers = turnHoursToMinutes(movies);
    console.log(withNumbers)
    withNumbers.sort((left, right) => left.title - right.title)
    console.log(withNumbers)
}

orderByDuration(movies)


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
    var dramaMovies = movies.filter(movie => {
        return movie.genre.indexOf('Drama') !== -1
    })

    var steven = dramaMovies.filter(movie => {
        return movie.director === 'Steven Spielberg'
    })

    var length = steven.length
    return length.toString();
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    var titles = movies.map(movie => {
        return movie.title;
    })

    var orderedList = []
    if (movies.length < 20) {
        for (i = 0; i < movies.length; i++) {
            orderedList.push(titles[i])
        }
    }
    else {
        for (i = 0; i < 20; i++) {
            orderedList.push(titles[i])
        }
    }
    return orderedList.sort()

}

orderAlphabetically(movies)
// Best yearly rate average
