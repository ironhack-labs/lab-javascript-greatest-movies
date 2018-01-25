/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr) {
    var hours = 0;
    var minutes = 0;
    return arr.map(function(time) {
        var movieTime = time.duration.split(" ");
        // console.log(movieTime)

        hours = parseInt(movieTime[0].slice(0, 1) * 60);
        // console.log(hours)

        minutes = parseInt(movieTime[1].slice(0, 2));
// console.log(minutes)
        // return hours + minutes;
       return Object.assign({}, time, {duration: hours+minutes})
    });
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {

    var avg;

    return arr.reduce(function(rating) {
        

        avg = arr.rate / arr.rate.length;
    });
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
