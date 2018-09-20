/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var sum = array.reduce(function(acc, currentValue){
        return acc + currentValue.rate
    }, 0);
    return sum/array.length
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
        var noDramaMamma;
        var dramaMovies = array.filter(function(movie){
            return movie.genre.find(function(sinGen){
                return sinGen === "Drama"
        });
    });
    if(!dramaMovies){
        return undefined;
    }
    if else(!noDramaMamma){
        return undefined;
    }
    else{
        return Math.round(ratesAverage(dramaMovies) * 100)/100;
    }
};


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
