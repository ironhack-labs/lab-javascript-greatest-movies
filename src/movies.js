/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (arr) {
    let arrCopy = Array.from(arr);
    let compare = (a, b) => a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title);

    return arrCopy.sort(compare)
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (arr) {
    let newArr = []
    let filterDrama = arr.filter(a => a.director === "Steven Spielberg" && a.genre.includes("Drama") ? newArr.push(a) : null);
    
    return newArr.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
    let arrCopy = Array.from(arr);
//sort by title
    let compareTitles = (a, b) => a.title.localeCompare(b.title);
// return titles only and limit to first 20 values
    return arrCopy.sort(compareTitles).map(a => a.title).slice(0, 20)
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (arr){
    let arrCopy = Array.from(arr)
    if (!arrCopy.length) {
        return 0;
    }
    let newArr = arrCopy.map(a => a.rate)
    let avgRate = Math.round(newArr.reduce((a, b) => a + b, 0) / newArr.length * 100) / 100;

   return !avgRate ? 0 : avgRate
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (arr) {
    let newArr = arr.filter(a => a.genre.includes("Drama")).map(a => a.rate)
    let dramaAvg = Math.round(newArr.reduce((acc, el) => acc + el, 0) / newArr.length * 100) / 100;
    return !dramaAvg ? 0 : dramaAvg
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
