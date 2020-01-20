/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    let newArray = [...movies].sort((a,b) => {
        if (a.year > b.year) return 1;
        else return -1;
    
    }) 
    return newArray
}   
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (totalMovies) {
    let newArray = [...totalMovies].filter(movie => movie.director === `Steven Spielberg` && movie.genre.indexOf(`Drama`) !== -1)
    return newArray.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let newArray = [...movies].sort((a,b) => {
        if (a.title > b.title) return 1;
        else return -1;
        
    }) 
    newArray.splice(20)
    return newArray.map(movie => movie.title)
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (movies){
    if (movies.length > 0) {
        let filteredMovies = movies.filter(movie => movie.rate || movie.rate > 0)
        rateAverage = filteredMovies.reduce ((ac, cu) => ac += cu.rate, 0) / movies.length
        return +rateAverage.toFixed(2)
    } return 0
}
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
