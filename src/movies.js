// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directors = movies.map(movies => movies.director)
    return directors

}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function removeDuplicates(movies) {
    const directors = movies.map(movies => movies.director)
    return directors.filter((value, index) => directors.indexOf(value) === index)

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const moviesSpielberg = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama")).length
    return moviesSpielberg
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const averageRates = movies.reduce((acc, elm) => {
        if (elm.rate){
            return elm.rate + acc
        } else {
            return acc
        } 
    },0 )
    return Math.round((averageRates / movies.length) * 100) / 100
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(elm => elm.genre.includes("Drama"))
    if (dramaMovies.length === 0) return 0
    const dramaMoviesRate = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)

    return Math.round((dramaMoviesRate / dramaMovies.length) * 100) / 100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const yearSort =[...movies].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } 
        return a.year - b.year
    })

    return yearSort
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    
    const alphaSort = [...movies].sort((a,b) => a.title.localeCompare(b.title))
    const first20 = alphaSort.slice(0, 20).map(movies => movies.title)
    return first20

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
   const duration = movies.filter(elm => elm.duration)
   Console.log(duration)
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) return null


    
}