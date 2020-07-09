// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movieArray) {
    let directors = movieArray.map(function(item){
        return item.director;
    })

    return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

    
function howManyMovies(movieArray) {
    let filterMovies = movieArray.filter(function(item){
        return item.director === "Steven Spielberg" && movieArray.includes("Drama")
        }         
    })
    return filteredMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray) {
    if (movieArray.length == 0) {return 0;}

    let rate = movieArray.reduce(function (acc, elem) {
        let i = 0;
        if (!movieArray.rate){
            i++return acc +0} else { 
                return acc+movieArray.rate}}, 0)

        let scoreavg = (rate /(movieArray.length-i))
        return Math.round(scoreavg * 100) / 100;
    }
    



// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
