/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(elem) {
        var hours = 0;
        var minutes = 0;
        if (elem.duration.indexOf('h') !== -1) {
            hours = parseInt(elem.duration[0], 10) * 60;
        }
        if (elem.duration.indexOf('min') !== -1) {
            minutes = parseInt(
                elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3),
                10
            );
        }
        return Object.assign({}, elem, { duration: hours + minutes });
    });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    var average = arr.reduce(function(acc, current) {
        return (acc += parseFloat(current.rate));
    }, 0);
    var result = average / arr.length;

    return Math.round(result * 100) / 100;
}

// Get the average of Drama Movies

function dramaMoviesRate(arr) {
    var counter = 0;
    var average = arr.reduce(function(acc, current) {
        if (current.genre.length === 1 && current.genre.includes('Drama')) {
            if (current.rate) {
                acc += parseFloat(current.rate);
            }
            counter++;
        }
        return acc;
    }, 0);

    var result = average / counter;

    if (counter === 0) return undefined;
    else return Math.round(result * 100) / 100;
}

// Order by time duration, in growing order

function orderByDuration(arr) {
    var arrCopy = turnHoursToMinutes(arr);

    arrCopy.sort(function(a, b) {
        return a.duration - b.duration;
    });

    // arrCopy.forEach(function(elem) {
    //     elem.duration = elem.duration.toString();
    // });

    return arrCopy;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
    var result = [];

    var stevenSpielberg = arr.filter(function(movie) {
        return movie.director === 'Steven Spielberg';
    });

    var stevenSpielbergDrama = stevenSpielberg.filter(function(steven) {
        return steven.genre.includes('Drama');
    });

    stevenSpielbergDrama.forEach(function(stevenMovie) {
        result.push(stevenMovie.title);
    });

    // var dramaMovies = stevenSpielbergDrama.filter(function(drama) {
    //     if (drama.genre.length === 1) return drama;
    // });

    if (result.length === 0) return undefined;
    // else if (dramaMovies.length === 0) return 'Steven Spielberg directed 0 drama movies!';
    else return 'Steven Spielberg directed ' + result.length + ' drama movies!';
}

// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    var firstTwenty = [];
    var i = 0;

    if (arr.length >= 20) {
        while (i < 20) {
            firstTwenty.push(arr[i].title);
            i++;
        }
    } else {
        arr.forEach(function(element) {
            firstTwenty.push(element.title);
        });
    }

    var result = firstTwenty.sort();
    return result;
}

// Best yearly rate average
