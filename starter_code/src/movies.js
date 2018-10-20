/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function stringToMinutes(string) {
    var arr = string.split('h')    
    if (arr.length < 2) {
        arr.unshift("0")        
    }    
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours*60+minutes
}
function turnHourstoMinutes(movies){
    return movies.map(function(){
        movie.duration=stringToMinutes(movie.duration)
    });
}

// Get the average of all rates with 2 decimals 
function ratesAverage (movies){
  movies.reduce(function(sum, movie){
        return sum + movies.rate;
},0)
var average = sum
}


// Get the average of Drama Movies
function dramaMoviesRate (movies){

}


// Order by time duration, in growing order

function orderByDuration (duration){

}

// How many movies did STEVEN SPIELBERG
function howManyMovies (stevenSpielberg){

}


// Order by title and print the first 20 titles

function orderAlphabetically (title){

}


// Best yearly rate average
function bestYearAvg (average){
    
}
