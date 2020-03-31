/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){

    const dramaMovies = arr.filter(elm => {
    
        if (elm.genre.includes('Drama') && elm.director === "Steven Spielberg"){
            return true
        }
    })
    return dramaMovies.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    const showTitle = arr.map(elm => elm.title).sort()
    return showTitle
    
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){

    const bestMovies = arr.map(elm => elm.rate.length > 8)

    return bestMovies

}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average




