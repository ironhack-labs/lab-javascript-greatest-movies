"use strict";
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

//var decimalNumber = parseFloat(movies[rate].toFixed(2));

function ratesAverage(array){
    var total = array.reduce(function (accumulator, item) {
        return accumulator + Number(item.rate); 
    },0).toFixed(2);
    return total/array.length;
}
ratesAverage(movies);

// Get the average of Drama Movies


var total = array.reduce(function(accumulator, item) {
    if (item.genre === "Drama") {
        return 1;
    } else {
        return -1;
    }
});


function dramaMoviesRate(array) {
    var sum = array.reduce(function (accumulator, item) {
        return accumulator + Number(item.rate); 
    },0).toFixed(2);
    return sum/array.length;
}

dramaMoviesRate(total);

//var dramaAverage; 


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
