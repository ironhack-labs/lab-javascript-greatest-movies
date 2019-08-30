/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

// 1 define function
// 2 loop thru the movies array
// 3 grab the rate value from each object
// 4 push into an empty array (make sure you create one)
// 5 take the average of all numbers in your new array

// movies.reduce (function (rate ,b) {
//     return {rate: arguments.rate + b.rate};
// })


function ratesAverage(movies) {

    let sum = 0;
    for (i = 0; i < movies.length; i++) {
        console.log(movies[i].rate)
        sum += parseFloat(movies[i].rate)
        console.log(sum)

    }

    return sum / movies.length

}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let sum = 0;

    let dramaMovies = movies.filter( x =>  x.genre .includes ("Drama"))

    console.log(dramaMovies)

    if (dramaMovies.length == 0) {
        return 0
    }

    for (i = 0; i < dramaMovies.length; i++) {

        if (dramaMovies [i].rate == ""){
            dramaMovies [i].rate = 0 

        }

        sum += parseFloat(dramaMovies[i].rate)
    }

    // let avg = parseFloat(sum / dramaMovies.length).toFixed(2);
    let avg = Number(parseFloat(sum / dramaMovies.length).toFixed(2))

    return avg


    // for (i = 0; i = genre.drama; i++) {
    //     console.log()
    // }


}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration() {

}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies() {

}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
