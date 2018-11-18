/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arrayOfMovies) {
    var hour;
    var minutes;
    var duration = [];

    var moviesInMinutes = arrayOfMovies.map(function (movie) {
        if (movie.duration.indexOf(`h`) === -1) {
            hour = 0;
            duration = movie.duration.split(`min`)
            minutes = Number(duration[0]);
            movie.newDuration = minutes;
        }
        else if (movie.duration.indexOf(`m`) === -1) {
            minutes = 0;
            duration = movie.duration.split(`h`)
            hour = Number(duration[0]);
            movie.newDuration = hour * 60;
        }
        else {
            duration = movie.duration.split(`h `)
            duration[1] = duration[1].slice(0, (0, duration[1].length - 3));
            hour = Number(duration[0]) * 60;
            minutes = Number(duration[1]);
            movie.newDuration = (hour + minutes);
        }
        var updatedMovie = {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.newDuration,
            genre: movie.genre,
            rate: movie.rate
        }
        return updatedMovie;
    });
    return moviesInMinutes;
};

// // Get the average of all rates with 2 decimals 
function ratesAverage(arrayOfMovies) {
    var totalRating = arrayOfMovies.reduce(function (total, movie) {
        return total + Number(movie.rate);
    }, 0);
    return totalRating / arrayOfMovies.length;
}

// // Get the average of Drama Movies

// // Order by time duration, in growing order

// // How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
