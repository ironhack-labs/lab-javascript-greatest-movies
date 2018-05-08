/* eslint no-restricted-globals: 'off' */


// ************ turnHoursToMinutes hacer con un reduce *****************/
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movieArray) {

    return movieArray.map(function (item) {
        var newMovieArry = Object.assign({}, item);
        var transformToMinutes = newMovieArry.duration.split(' ');

        if (transformToMinutes.length === 2) {
            var hour = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            var minutes = Number(transformToMinutes[1].replace('min', ''));
            newMovieArry.duration = hour + minutes;
        }

        if (transformToMinutes.length === 1) {
            if (transformToMinutes[0].includes('h')) {
                newMovieArry.duration = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            }
            else if (transformToMinutes[0].includes('min')) {
                newMovieArry.duration = Number(transformToMinutes[0].replace('min', ''));
            }

        }
        return newMovieArry
    })
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var ratesAverage = movies.reduce(function (preview, next) {
        return preview + parseFloat(next.rate)
    }, 0) / movies.length;

    return Math.round(ratesAverage * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var filterMoviesDrama = movies.filter(function (item) {
        return item.genre.some(
            function (item) {
                return item === 'Drama';
            })
    });

    return filterMoviesDrama.length ? ratesAverage(filterMoviesDrama) : undefined;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
    var moviesParseToMinutes = turnHoursToMinutes(movies);

    return moviesParseToMinutes.sort(function (item1, item2) {
        return item2.duration - item1.duration;
    });

}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movieArray) {
    if (!movieArray.length) {
        return undefined;
    }

    var steveMovies = movieArray.filter(function (item) {
        return item.director === 'Steven Spielberg' &&
            item.genre.some(
                function (item) {
                    return item === 'Drama';
                });
    });

    return 'Steven Spielberg directed ' + steveMovies.length + ' drama movies!';
}
// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    var moviesTitle = moviesArray.map(function (item) {
        return item.title;
    }).sort(function (title1, title2) {
        return title1.localeCompare(title2)
    });

    return moviesTitle.length > 20 ? moviesTitle.filter((item, i) => i < 20) : moviesTitle;
}

// Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0) {
        return undefined;
    }

    var year = movies.map(item => item.year).unique();




    var arrayYears = movies.reduce(function (preview, next) {

    }, {})
}