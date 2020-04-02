/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let newMovies = [...arr]
        return newMovies.sort((a,b) =>{
    if(a.year === b.year) {
        return a.title.localeCompare(b.title)
    }
    else {
        return a.year - b.year
    }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
    let sbMovies = arr.filter(obj => obj.director === "Steven Spielberg" && obj.genre.includes("Drama"));
    return sbMovies.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
