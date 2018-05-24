/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayOfMovies) {

    var newArrayOfMovies = arrayOfMovies.map(function (movie) {

        var durationHours = 0;

        var hPos = movie.duration.indexOf("h");

        if (hPos >= 0) {

            durationHours = movie.duration.substr(0, hPos) * 1;

        }

        var durationMinutes = 0;

        var mPos = movie.duration.indexOf("m");

        if (mPos >= 0) {

            durationMinutes = movie.duration.substring(hPos >= 0 ? hPos + 2 : 0, mPos) * 1;

        }

        return { duration: durationHours * 60 + durationMinutes };
    })

    return newArrayOfMovies;

}

// Get the average of all rates with 2 decimals 
function ratesAverage(arrayOfMovies) {

    var sum = arrayOfMovies.reduce(function (sum, movie) {

        return sum + movie.rate;

    },
        0)

    return sum / arrayOfMovies.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies) {

    var dramaArray = arrayOfMovies.filter((movie) => movie.genre == "Drama")

    return dramaArray.length ? ratesAverage(dramaArray).toFixed(2) * 1 : undefined;
}

// Order by time duration, in growing order
function orderByDuration(arrayOfMovies) {

    return arrayOfMovies.sort(function (movieA, movieB) {

        var durDir = movieA.duration - movieB.duration;

        if (durDir != 0) {

            return durDir;

        }
        else {
            return movieA.title < movieB.title ? -1 : 1;
        }
    });

}


// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayOfMovies) {

    return arrayOfMovies.length
        ?
        "" + arrayOfMovies.filter(function (movie) {

            return movie.genre == "Drama" && movie.director == "Steven Spielberg";

        }).length

        :

        undefined;

}


// Order by title and print the first 20 titles


// Best yearly rate average
