let allDirectors = []


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {

    allDirectors = moviesArray.map(dir => dir.director)

    return allDirectors


}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// let unique = []

// unique = allDirectors.filter((dir1, dir2) => {
//     if (dir1.indexOf())

// console.log(unique);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

    const steveMovies = moviesArray.filter(num => num.director === 'Steven Spielberg')
    const steveDramaMovies = []

    steveMovies.filter(function (drama) {
        drama.genre.map(function (d) {
            d === 'Drama' ? steveDramaMovies.push(drama.title) : null
        })
    })

    return steveDramaMovies ? steveDramaMovies.length : 0
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
    const movieRate = moviesArray.map(e => e.rate)
    let totalRate = 0

    movieRate.forEach(e => totalRate += e)

    return (totalRate / movieRate.length) ? Math.round((totalRate / movieRate.length) * 100) / 100 :
        totalRate === 0 ? 0 : 2
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {

    const dramaMovies = []
    let totalRate = 0;

    moviesArray.filter(function (drama) {
        drama.genre.map(function (d) {
            d === 'Drama' ? dramaMovies.push(drama.rate) : null
        })
    })

    dramaMovies.forEach(e => totalRate += e)

    return (totalRate / dramaMovies.length) ? Math.round((totalRate / dramaMovies.length) * 100) / 100 : 0

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    const orderByYear = moviesArray.map(e => e.year).sort()
    const objectOrderByYear = {}
    const arrayOrderByYear = []

    orderByYear.forEach(function (e, idx) {
        objectOrderByYear.year = e
        arrayOrderByYear.push({ year: objectOrderByYear.year })
    })

    return arrayOrderByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
