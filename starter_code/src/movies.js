'use strict'

// Turn duration of the movies from hours to minutes



// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    var sum = movies.map(movies => {
        return parseFloat(movies.rate);
    }).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    return sum / array.length;
};




// Get the average of Drama Movies


function dramaMoviesRate(array) {
    var suma = array.filter(function(value, i) {
        return value.genre.includes("Drama")
    }).map(function(value) {
        return value.rate;
    }).reduce(function(accum, value) {
        return accum + value;
    });

    return suma / array.length;
}



// Order by time duration, in growing order

function orderByDuration(array) {
    return array.sort(function(a, b) {
        if (a.duration === b.duration) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return a.duration - b.duration;
        }
    })
}





// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
    return array.filter(function(genero) {
        if (array.director === 'Steven Spielberg' && genero.genre === 'Drama') {
            return array.title;
        }
    })

}



// Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let order = array.filter(movie => movie.rate < 10 && movie.rate > 8.6);
    return order.sort();
}


// Best yearly rate average