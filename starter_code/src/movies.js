/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    array.reduce(function(accum,currentValue){
        var rate = 0;
        accum.rate += currentValue;

    },0);
}
    

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    if (!array.length) {
        return undefined;
    } else {
        var result = array.filter(function(movie) {
            return movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') > -1 ;
        });
        if (!result.length) {
            return 'Steven Spielberg directed 0 drama movies!';
        };
        return 'Steven Spielberg directed ' + result.length + ' drama movies!';
    };
};

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
    title.sort()
}

// Best yearly rate average
