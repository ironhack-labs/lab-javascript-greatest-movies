/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const yearsOfMovies = movies.slice().sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        } // else {
        //     return a.localeCompare(b) ????????????
        // }
    })

    return yearsOfMovies

}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    const dramaSpiel = movies.filter(elm => {
        return elm.director.includes("Steven Spielberg") && elm.genre.includes("Drama")
    })

    return dramaSpiel.length; // las pelis de drama de Spiel


}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {

    const alphabeticallMovies = movies.splice(0, 20) //.sort((a,b) => a.title.localeCompare(b.title) ) NO SÉ SI ES ASÍ PERO BUENO
    return alphabeticallMovies


}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length === 0) {
        return 0
    } else {
        const aveMovies = movies.reduce((acc, movies) => {
            if (typeof movies.rate === 'number') {
                return acc + movies.rate
            } else {
                return acc + 0
            }
        }, 0) / movies.length

        console.log(aveMovies)

        return parseFloat((aveMovies).toFixed(2))
    }
}



// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaMovies = movies.filter(elm => elm.genre.includes("Drama")) // pelis de drama 

    if (dramaMovies.length === 0) {
        return 0
    } else {
        const aveDramaMovies = dramaMovies.reduce((acc, movies) => {
            if (typeof movies.rate === 'number') {  // 
                return acc + movies.rate
            } else {
                return acc + 0
            }
        }, 0) / dramaMovies.length

        return parseFloat((aveDramaMovies).toFixed(2))
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {


}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
