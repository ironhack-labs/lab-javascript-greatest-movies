/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(array){

    var ratesSum = array.reduce(function(acc, current){

        return acc + current.rate;

    }, 0);

    return ratesSum/array.length;
}

ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(array){

    var DramaArray = array.filter(function(movie){
        return movie.genre.find(function(element){
            return element === 'Drama';
        });
        
    });

    var ratesSum = DramaArray.reduce(function(acc, current){

        return acc + current.rate;

    }, 0);

    return ratesSum/DramaArray.length;

}
dramaMoviesRate(movies);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(array){

    var DramaArray = array.filter(function(movie){
        return movie.genre.find(function(element){
            return element === 'Drama';
        });
    });

    var sd = 0;

    var StevenDramaArray = DramaArray.filter(function(movie){
        return movie.director === 'Steven Spielberg';sd++

    });
    if(StevenDramaArray.length === 0){
        return undefined;
    }

    return StevenDramaArray.length;




}

// Order by title and print the first 20 titles


// Best yearly rate average
