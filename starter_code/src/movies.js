/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes() {
    
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    var rateSum = movies.reduce(function (acc, item) {
       return acc + Number(item.rate); 
    },0)
    return (Math.round(rateSum/movies.length * 100)/ 100);
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
    // var dramaRate = movies.find(function(element){
    //    return element.rate; 
    // })
    var dramaMovies = movies.filter(function(item){
        if (item.genre.indexOf("Drama") !== -1) {

            return true;
        }
    });
    if (dramaMovies.length === 0){
        return;
    }
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

// aqui
// Order by title and print the first 20 titles


// aqui
// Best yearly rate average
