/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arr) {

    let orderedMovies = [...arr]

    return orderedMovies.sort((a, b) => a.years - b.years)


}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {

    let dramaMovies = arr.filter(elm => elm.director == 'Steven Spielberg' && elm.genre.includes("Drama"))

    return dramaMovies.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals



// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average