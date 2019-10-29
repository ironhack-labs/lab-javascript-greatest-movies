/* eslint no-restricted-globals: 'off' */

//Iteration 1: Ordering by year - Order by year, ascending(in growing order)
     
        
function orderByYear(movies) {
    let moviesArray = [...movies]
    moviesArray.sort((a, b) => {
        if (a < b) {
            return -1
        }
        if (a === b && a.title < b.title) {
            return -1
        }
        return 1
    })
    return moviesArray
 }
        
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    return array.filter((movie) => {

        return movie.director == "Steven Spielberg" && movie.genre.indexOf('Drama') != -1
           
    }).length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(title) {
    
    let alphabetically = title.slice()
    if (title < 20) {
        return title
    }
        

}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage() {
    
}

    

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
