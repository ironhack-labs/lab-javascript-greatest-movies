/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayMovies) {

    return  arrayMovies.map(movie => {

        var hoursMinutes = (parseInt(movie.duration.split(' ')[0])) * 60;
        var minutes = parseInt(movie.duration.split(' ')[1]);


        if (hoursMinutes && minutes) {
            return {...movie, duration: hoursMinutes + minutes};
        } else if (!hoursMinutes && minutes) {
            return {...movie, duration: minutes};
        } else if (hoursMinutes && !minutes) {
            return {...movie, duration: hoursMinutes};
        }

        //  var newDuration = (parseInt(movie.duration.split(' ')[0]) * 60) + parseInt(movie.duration.split(' ')[1]);
        //  console.log(newDuration);
        //  return {...movie, duration: newDuration};
    })

}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
