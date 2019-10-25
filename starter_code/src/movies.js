/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


let movieRates = movies.map(function (movie) {
    var rate = Number(movie.rate)
    return rate;
})

console.log(movieRates);

function ratesAverage() {
let reducedRate = movieRates.reduce(function (accumulator, element) {
    var sum = accumulator + element;
    var roundedSum = sum;
    return roundedSum;
}, 0); 

console.log((reducedRate/250).toFixed(2));

}
ratesAverage();


// Iteration 2: Drama movies - Get the average of Drama Movies


var dramaMovies = movies.filter(function (type) {
    return type.genre.includes("Drama");
})

let dramaRates = dramaMovies.map(function (movie) {
    var movieRate = Number(movie.rate);
    return movieRate
})

function dramaMoviesRate (array) {
    return ratesAverage(array)
}

dramaMoviesRate(dramaRates);


// Iteration 3: Ordering by year - Order by year, ascending (in growing order)

movies.sort(function(a,b) {
    return a.year - b.year
});


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

var spielMovies = movies.filter(function (spielberg) {
    return spielberg.director.includes("Steven Spielberg");
    
})
function howManyMovies(spielberg) {
   return spielberg.length

}
howManyMovies(spielMovies);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

var sortedMovies = movies.sort(function(a,b) {

    if(a.title < b.title) { return -1; }
    if(a.title> b.title) { return 1; }
        return 0;

});

console.log(sortedMovies)

function orderAlphabetically(sorted) {
    return sorted.slice(0,20); 
} 

orderAlphabetically(sortedMovies)



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

var moviesDuration = movies.filter(function(movie) {
    
    var hours = Number(movie.duration.substring(0,1));
    var minutes = Number(movie.duration.substring(3,5)) ;
    
    movie.duration = (hours * 60 + minutes);
    
    return movie.duration
})
​
function turnHoursToMinutes(movie) {
    return movie
}
​


// BONUS Iteration: Best yearly rate average - Best yearly rate average
