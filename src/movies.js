// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const showDirectors = movies.map(elm => elm.director)
    return showDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// let uniqueDirectors = Array.from(new Set(showDirectors))
// console.log(uniqueDirectors)
// return uniqueDirectors;
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergDramaMovies = movies.filter(elm => elm.director === ('Steven Spielberg') && elm.genre.includes('Drama'))
    return spielbergDramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const calculateAverage = movies.reduce((acc, elm) => acc + elm.rate, 0)
    return parseFloat((calculateAverage/movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const calculateDramaRate = movies.filter(elm => elm.genre.includes('Drama'))
    const reducedDrama = calculateDramaRate.reduce((acc, elm) => acc + elm.rate, 0)
    return reducedDrama/calculateDramaRate.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const copiedMovies = [...movies]
    const sortedMovies = copiedMovies.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            }
        } else {
            return a.year - b.year
        }
    })
    
    return sortedMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const copiedMovies2 = [...movies]
    const showTitle = copiedMovies2.map(elm => {
        return elm.title
    })
    
    const alphaOrder = showTitle.sort((a, b) => {
        if(a.title < b.title) { 
            return -1; }
        if(a.title > b.title) {
            return 1; }
        return 0;
    })
    const firstTwenty = alphaOrder.splice(0, 20)
    return firstTwenty
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
