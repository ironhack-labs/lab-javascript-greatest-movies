// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = aom => aom.map(movie => movie.director)
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
// How could you "clean" a bit this array and make it unified (without duplicates)?
let unified = getAllDirectors(movies);
let filtered = unified.filter((movie, a) => a === unified.indexOf(movie))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = movies => movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length < 1) return 0
    let allRate = arr.reduce((acc, val) => ({rate: acc.rate + val.rate}))
    return Number((allRate.rate / arr.length).tofixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
let averageDrama = dramamovie => {
    let newArr = dramamovie.filter(movie => movie.genre.includes("Drama"));
    return averageDrama(newArr)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = movieOrder => [...movieOrder.sort((a, b) => a.year - b.year !==0 ? a.year - b.year : a.title.localeCompare(b.title))]
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderByTitle = movieTitle => [...movieTitle].sort((a, b) => a.title.localeCompare(b.title));
let print = orderByTitle.map(ele => ele.title).splice(0, 20)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
