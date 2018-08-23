/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

    return movies.map(function (elem) {
        var hourToMins = 0;
        var mins = 0;
        var duration = elem.duration.split(' ');
        if(duration.length > 1){
            if (duration[0].indexOf('h') != -1) {
                hourToMins = duration[0].slice(0, duration[0].indexOf('h')) * 60
            }
            if (duration[1].indexOf('m') != -1) {
                mins = duration[1].slice(0, duration[1].indexOf('m'))
            }
        
        }
        else {
            if (duration[0].indexOf('m') != -1) {
                mins = duration[0].slice(0, duration[0].indexOf('m'))
            } else{
                hourToMins = duration[0].slice(0, duration[0].indexOf('h')) * 60
            }
        }        
        var calc = (parseInt(hourToMins) + parseInt(mins));
        //var splitWords = elem.split(0);

        return Object.assign({ duration: calc });
    })
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
