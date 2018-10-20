/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function stringToMinutes(string) {
    var arr = string.split('h')
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours*60+minutes
}

function turnHoursToMinutes(movies){
    var resultArr = movies.map(function(movie){
        return stringToMinutes(movie.duration);
    });
    return resultArr;
} 


// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
    var totalRating = movies.reduce(function(sum, rating){
    return sum + rating.rate ;
    }, 0);
    return totalRating / movies.length ;
}


// Get the average of Drama Movies


function dramaMoviesRate(movies){
    var onlyDrama = movies.filter(function(movie){
        return movie.genre.includes("Drama");
    });
    var totalDrama = onlyDrama.reduce(function(sum,rating){
        return sum + rating.rate;
    }, 0);
return totalDrama / onlyDrama.length;
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
