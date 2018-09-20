/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var sum = array.reduce(function(acc, currentValue){
        return acc + currentValue.rate;
    },0);
    return sum/array.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dramaMovies = array.filter(function(movie){
      return movie.genre.find(function(singleGenre){
        return singleGenre === 'Drama';
      });
    });
    if(!dramaMovies.length){
      return undefined;
    }
    return ratesAverage(dramaMovies);
}
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    var stevenMovies = array.filter(function(movie){
        return movie.director === 'Steven Spielberg';
    });
    console.log(stevenMovies);
}

// Order by title and print the first 20 titles


// Best yearly rate average
