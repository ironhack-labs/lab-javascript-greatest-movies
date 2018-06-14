/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map(function (curMovie) {
        if (curMovie.duration.length === 8) {//hours and minutes
            return {
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration: (Number(curMovie.duration.charAt(0)) * 60 + Number(curMovie.duration.substring(3, 5))),
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
        else if (curMovie.duration.length === 7) {//hour and minutes
            return {
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration: (Number(curMovie.duration.charAt(0)) * 60 + Number(curMovie.duration.substring(3, 4))),
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
        else if (curMovie.duration.length === 3) {//hour
            return {
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration: Number(curMovie.duration.charAt(0)) * 60,
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
        else if (curMovie.duration.length === 5) {//minutes
            return {
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration: Number(curMovie.duration.substring(0, 2)),
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
        else if (curMovie.duration === '1h 00min' || '2h 00min' || '3h 00min') {
            return {
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration: Number(curMovie.duration.substring(0, 1)) * 60,
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
        else {//minute
            return {
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration: Number(curMovie.duration.substring(0, 1)),
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
    })
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    var sum = 0;

    movies.map(function (curMovie) {
        sum += curMovie.rate;
    })
    return sum / movies.length
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var sum = 0;
    var counter = 0;

    movies.map(function (curMovie) {
        if (curMovie.genre.includes('Drama')) {
            sum += (curMovie.rate);
            counter++;
        }
    });
    sum = sum * 1.0;
    counter = counter * 1.0;
    return 1.0 * (sum / counter)
}

// Order by time duration, in growing order
function orderByDuration(movies) {
    return movies.sort(function (x, y) {
        if (x.duration > y.duration) {
            return 1//shifts a up
        }
        else if (y.duration > x.duration) {
            return -1;//shifts a down
        }
        else {
            if (x.title.localeCompare(y.title) === 0) {
                return 0
            }
            else if (x.title.localeCompare(y.title) === -1) {
                return 0
            }
            else {
                return 1
            }
        }
    })
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
    if (movies.length === 0) {
        return
    }
    var counter = 0;

    movies.map(function (curMovie) {
        if ((curMovie.genre[0] === ('Drama')) && (curMovie.director[0] === ('Steven Spielberg'))) {
            counter++;
        }
    });

    return "Steven Spielberg directed " + counter + " drama movies!"
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    var only20 = [];
    return movies.sort(function (x, y) {

    });
}

// Best yearly rate average
function bestYearAvg(movies) {

}