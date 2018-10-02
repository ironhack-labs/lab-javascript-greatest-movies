/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (duration) {
    var duration2=duration.split(" ");
    var durationTotal=0;
    
    if (duration2.length===1) {
    durationTotal+=parseInt(duration2[0]);
    return durationTotal;
    } else {
    var durationHour=parseInt(duration2[0]);
    var durationMin=parseInt(duration2[1]);
    var durationTotal=(durationHour*60)+durationMin;
    }
    return durationTotal;
  }

// Get the average of all rates with 2 decimals 
// Don't understand the tips "Maybe you want to "reduce" the data to a single value"
function ratesAverage (array) {
    var calculAverage = 0;
    var average = array.map(function (movie) {
        calculAverage +=parseFloat(movie.rate);
    });
    return calculAverage / array.length;
}

// Get the average of Drama Movies
function dramaMoviesRate (array) {
    var dramaMovies = array.filter(function(movie) {
        return movie.genre.includes("Drama");
    });
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration (array) {
    var order = array.sort(function (a, b) {
        if (a.duration !== b.duration) {
            return a.duration - b.duration;
        }
    });
    return order;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (array) {
   var count=0;
    var StevenSpielberg = array.filter(function(movie) {
        if(movie.director===" Steven Spielberg" && movie.genre.includes("Drama")) {
            count += 1;
        }
    });
    return count;
}

// Order by title and print the first 20 titles

 

// Best yearly rate average
