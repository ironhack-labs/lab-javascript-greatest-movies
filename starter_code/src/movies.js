/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
/*function turnHoursToMins(movies) {
    return movies.map(function(movie) {
        let newDuration = "";

        if (movie.duration.indexOf("h") == -1){
            newDuration = parseInt(movie.duration);
        } else if (movie.duration.indexOf("m") == -1){
            newDuration = parseInt(movie.duration) * 60;
        } else {
            newDuration = parseInt(movie.duration.split(" ")[0] * 60) + parseInt(movie.duration.split(" ")[1]);
        } 
        return Object.assign({}, movie, { duration: newDuration });
    });
}

console.log(turnHoursToMins(movies))*/

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


// How many movies did STEVEN SPIELBERG

let howManyMovies = ((arr) => {
    let stevenMovies = arr.filter((obj) => {
      if (obj.director === 'Steven Spielberg' && obj.genre.includes("Drama"))  {
        return obj
      }
    })
    return stevenMovies
})

console.log (howManyMovies(movies))

// Order by title and print the first 20 titles


// Best yearly rate average
