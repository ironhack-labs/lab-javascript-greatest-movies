/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    let yearArray = [...movies]
    yearArray.sort((a, b) => {
        if(a.year > b.year) return 1
        if(a.year < b.year) return -1
        if(a.year === b.year && a.title > b.title) return 1
        if(a.year === b.year && a.title < b.title) return -1
    })
    return yearArray
}

//orderByYear(movies)




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    const stevenSpilberg = movies.filter(elm =>
        elm.director === "Steven Spielberg" && elm.genre.includes("Drama")
    )
    return stevenSpilberg.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(movies) {
    let movieOrder = movies.map(elm => elm.title).sort((a, b) => a.localeCompare(b))
    let shortList = movieOrder.splice(0, 20)
    return shortList
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(avgRates) {
    if(avgRates.length === 0) return 0
    else {
        let ratesSum = avgRates.filter(elm => elm.rate).reduce((acc, elm) => acc + elm.rate, 0)
        let averageRating = ratesSum / avgRates.length
        let ratesDecimals = averageRating.toFixed(2)
        return +ratesDecimals
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaTotal = movies.filter(elm => elm.genre.includes("Drama"));
    if(dramaTotal.length === 0){
        return 0
    } else {
        let dramaSum = dramaTotal.reduce((acc, elm) => acc + elm.rate, 0)
        console.log(dramaSum)
        let dramaAverage = dramaSum / dramaTotal.length
        let dramaDec = dramaAverage.toFixed(2)
        return +dramaDec
    }

}

//function dramaMoviesRate(movies) {
//   let dramaMovies =}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
