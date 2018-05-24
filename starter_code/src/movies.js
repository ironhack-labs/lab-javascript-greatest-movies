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


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
