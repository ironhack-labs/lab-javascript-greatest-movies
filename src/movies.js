// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => movies.map(elm => {
    const directorsName = elm.director
    return directorsName
})
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const stevenArray = movies.filter(elm => elm.genre.includes('Drama') && elm.director === 'Steven Spielberg')
    return stevenArray.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => movies.reduce((acc, elm) => {
    if (!elm.rate) {
        return acc
    }
    return parseFloat((acc + elm.rate / movies.length).toFixed(2))
}, 0)
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const avgDrama = movies.filter(function (movies) {
        return (
            movies.genre.includes('Drama')
        )
    })
    let total = 0
    avgDrama.map(x => total += x.rate)
    return (total / avgDrama.length)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => movies.year.sort((a, b) => b.date - a.date)




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
