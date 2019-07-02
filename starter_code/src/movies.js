/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// this is just a helper function
function stringToMinutes(string) {
    var arr = string.split("h");
    if (arr.length < 2) {
        arr.unshift("0");
    }
    var hours = Number(arr[0]);
    var minutes = Number(arr[1].split("min")[0]);

    return hours * 60 + minutes;
}

var moviesNew = movies.map(movie => {
    console.log(stringToMinutes(movie.duration));
});
console.log(moviesNew);



function turnHoursToMinutes(movies) {
    var moviesNew = movies.map(movie => {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: stringToMinutes(movie.duration),
            genre: movie.genre,
            rate: movie.rate
        }
    });
    return moviesNew;
}


// Get the average of all rates with 2 decimals

function ratesAverage(array) {
    array.reduce((array.rate, array.length) => )
}

// array.reduce((accumulator, currentValue) => accumulator + currentValue)
// string into number: parseFloat!




// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
