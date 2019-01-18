/* eslint no-restricted-globals: 'off' */
function turnHoursToMins(x) {
    var newArray = x.map(function(obj) {
        var timeArray = obj.duration.split(" ");
        var hoursToMinutes = parseInt(timeArray[0]) * 60;
        var minutos = parseInt(timeArray[1]);
        obj.duration = hoursToMinutes + minutos;
        return obj;
    })
    return newArray
}
console.log(turnHoursToMins(movies))

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    return arr.reduce(function(acc, elm) {
        return acc + (parseFloat(elm.rate) / arr.length);
    }, 0).toFixed(2)
}

console.log(ratesAverage(movies))


// Get the average of Drama Movies

function dramaMoviesRate(y) {
    let dramaMovies = movies.filter (function(movie){
        return movie.genre.indexOf('Drama') != -1;
    });
    if (dramaMovies.length != 0) {
        return ratesAverage (dramaMovies)
    }else {
        return undefined;
    } }

    console.log(dramaMoviesRate(movies))


// Order by time duration, in growing order
function orderByDuration (arr) { 
arr.sort(function(a, b){
    if (a.duration > b.duration) {
        return 1;
    } else if (a.duration < b.duration) {
            return -1;
        } else  if (a.duration === b.duration) { 
            if (a.title > b.title) {
                return 1;
            } else {
                return -1
            }
        }
    })
    return arr
}

console.log(orderByDuration(movies))

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
