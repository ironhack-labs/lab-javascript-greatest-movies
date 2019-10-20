/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    let totalRates = movies.reduce(function (accumulator, movie) {
        return accumulator + movie.rate * 1;
    }, 0);
    return Math.round(totalRates / movies.length * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function (movie) {
        return movie.genre.includes("Drama")
    })
    if (dramaMovies.length == 0) {
        return 0;
    } else {
        let totalDramaRates = dramaMovies.reduce(function (accumulator, dramaMovie) {
            return accumulator + dramaMovie.rate * 1;
        }, 0);
        return Math.round(totalDramaRates / dramaMovies.length * 100) / 100;
    }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(movies) {
    movies.sort(function (a, b) {
        if (a.year === b.year) {
            return (a.title).localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    })
    return movies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    let dramaBySpielberg = movies.filter(function (movie) {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    })
    return dramaBySpielberg.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return movies.map(function (movie) {
        return movie.title
    }).sort(function (a, b) {
        return a.localeCompare(b)
    }).slice(0, 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return JSON.parse(JSON.stringify(movies))
        .map(function (movie) {
            const hours = movie.duration.match(/\d+(?=h)/g);
            const minutes = movie.duration.match(/\d+(?=min)/g);
            if (hours !== "") {
                movie.duration = (Number(hours) * 60 + Number(minutes));
                return movie;
            }
            movie.duration = Number(minutes);
            return movie;
        })
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average