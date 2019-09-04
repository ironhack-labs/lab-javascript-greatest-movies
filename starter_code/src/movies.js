/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    let sum = movies.reduce((total,movie) => total + Number(movie.rate), 0)
    let average = sum/movies.length
    return Number(average.toFixed(2))
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let isDrama = movies.filter(element => {
        return element.genre.indexOf('Drama') !== -1;
    });

    if (isDrama.length === 0) {
        return 0;
    }
    return ratesAverage(isDrama); 
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    let orderedArr = movies.sort((a, b) => {
        if (a.duration < b.duration) {
            return -1;
        } else if (a.duration > b.duration) {
            return 1;
        } else if (a.duration === b.duration) {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            } else {
                return 0;
            }
        }
    })
    return orderedArr;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    let stevenTotal = movies.filter(function (drama) {
        return drama.director == "Steven Spielberg" && drama.genre.includes("Drama");
    });
    return stevenTotal.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return orderedArray = movies.map((movie) => movie.title).sort().slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map((movie) => {
        movie = Object.assign({}, movie);
        let hour = String(movie.duration).match(/\d+h/g);
        let min = String(movie.duration).match(/\d+min/g);
        hour = hour != null ? Number(hour[0].replace('h', '')) : 0;
        min = min != null ? Number( min[0].replace('min', '')) : 0;
        movie.duration = hour * 60 + min;
        return movie;
    })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
