// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
/*function getAllDirectors(movies) {
   return movies.map(elm => elm.director)
}*/
const getAllDirectors = (movies) => movies.map(elm => elm.director)
/*function getAllDirectors(movie) {
    const directorNames = movies.map(elm => elm.director);
    return directorNames;
}*/
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//const howManyMovies = (movies) => movies.filter(elm => elm.genre.includes('Drama') && elm.director === 'Steven Spielberg').length

function howManyMovies(movies) {
    const spilMovies = movies.filter(elm => elm.genre.includes('Drama') && elm.director === 'Steven Spielberg')
    return spilMovies.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
    let finalResult = 0
    let rateSum = movies.reduce((acc, elm) => acc + elm.rate, 0)
    if (movies.length !== 0) {
        finalResult = rateSum / movies.length
        return Number(finalResult.toFixed(2))
    }else {
        return 0;
    }
}



// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter(elm => elm.genre.includes('Drama'))
    if (dramaMovies.length !== 0) {
        let rateSum = movies.reduce((acc, elm) => acc + elm.rate, 0)
        let finalResult = parseFloat((rateSum / movies.length).toFixed(2))
        return finalResult
    } else {
        return 0
    }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => movies.sort((a, b) => a - b)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return movies.sort(function (a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    });
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
