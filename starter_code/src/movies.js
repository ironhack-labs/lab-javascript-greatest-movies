/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)




function orderByYear(movies) {

    const yearArray = movies.map(elm => {
        return elm
    })

    yearArray.sort(function (a, b) {

        if (a.year < b.year) return -1
        if (a.year > b.year) return 1
        if (a.year === b.year) {

            if (a.title < b.title) return -1
            if (a.title > b.title) return 1

        }
    })

    return yearArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(movies) {

    const spielbergArray = movies.filter(mov => {
        return mov.director === "Steven Spielberg" && mov.genre.includes("Drama")
    })

    return spielbergArray.length

}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
    const titleArray = movies.map(elm => {
        return elm.title
    })

    titleArray.sort(function (a, b) {
        if (a < b) return -1
        if (a > b) return 1
    })


    if (titleArray.length < 20) {
        return titleArray
    } else {
        return titleArray.slice(0, 20)
    }
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {

    if (movies.length === 0) {
        return 0
    }

    const totalSum = movies.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0) / movies.length

    return (+totalSum.toFixed(2))
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {


    const dramaMovies = movies.filter(mov => {
        return mov.genre.includes("Drama")
    })

    if (dramaMovies.length === 0) {
        return 0
    }

    const dramaAvg = dramaMovies.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0)


    let answer = +dramaAvg / dramaMovies.length
    return answer
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
