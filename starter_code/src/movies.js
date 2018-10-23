/* eslint no-restricted-globals: 'off' */
console.log (movies[0]);
// Turn duration of the movies from hours to minutes 
function stringToMinutes(string) {
    var arr = string.split('h')
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours*60+minutes
}
 
function turnHoursToMinutes(moviesarr){
    var newTime = moviesarr.map(function(movie){
        return movie.duration= stringToMinutes;
    });
}



// Get the average of all rates with 2 decimals 
function ratesAverage (moviesarr){
    var resultSum = moviesarr.reduce(function(sum, movie){
        return sum += parseFloat(movie.rate);
    },0)
    return resultSum / movies.length;
}

// Get the average of Drama Movies
function dramaMoviesRate (moviesArr){
    var dramaMovies = 
        moviesArr.filter (function (movie){
            return movie.genre.includes("drama");
        })
        var dramaAvRate = ratesAverage(dramaMovies);
        return dramaAvRate;
    }


// Order by time duration, in growing order
function orderByduration (moviesarr) {
    var sortedByDuration = 
    moviesarr.duration.sort (function (movieA, movieB) {
      if (movieA < movieB) {
        return -1;
      }
      else {
        return 1;
      }
    })
    return sortedByDuration;
};

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
