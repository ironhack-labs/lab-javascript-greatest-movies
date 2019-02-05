/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
let turnHoursToMinutes = movies.map(movie => {
    //apply the following function "movie" to each element of my array
    var x = movie.duration.charAt(0) * 60 + parseInt(movie.duration.slice(3, 5));
    //parseInt changes strings into integers
    //movie.duration = get the property duration of the object movie in my array
    movie.duration = x //now the property duration is equal to the equation created
    return movie; //movie is each element of my array, with all it's properties
})

console.log(turnHoursToMinutes);


// Get the average of all rates with 2 decimals 
let ratesAverage = movies.reduce((accumulator, movie) => {
    return accumulator + parseInt(movie.rate);
}, 0)

let averageRate = ratesAverage / movies.length
console.log(averageRate)


// Get the average of Drama Movies
var count = 0
let dramaMovieRate = movies.reduce((accumulator, movie) => {
    if (movie.genre.includes("Drama")) {
        count++;

        return accumulator + parseInt(movie.rate);
    } else return accumulator + 0;

}, 0)

let dramaAverage = dramaMovieRate / count;
console.log(dramaAverage)

// Order by time duration, in growing order
let orderByDuration = turnHoursToMinutes.sort((movie1, movie2) => {
    if (movie1.duration === movie2.duration) {
        turnHoursToMinutes.sort((title1, title2) => {
            return title1 - title2;
        })
    } else return movie1.duration - movie2.duration;

})

console.log(orderByDuration);

// How many movies did STEVEN SPIELBERG
let stevenMovies = movies.filter(movie => {
    if (movie.director === "Steven Spielberg") {
        return movie;
    }
})

console.log(stevenMovies.length)

// Order by title and print the first 20 titles

let orderAlphabetically = movies.sort((movie1, movie2) => {
    if (movie1.title > movie2.title) {
        return 1;
    }
    if (movie1.title < movie2.title) {
        return -1
    }
    return 0;

})

console.log(orderAlphabetically.slice(0,20))



// Best yearly rate average

function uniqueYears(array) {
var yearsList = [];
    for (var i=0; i < array.length; i++) {
    if (yearsList !== array ) {
        array.push(yearsList)
    }
} return yearsList;
} 

console.log(uniqueYears(movies))