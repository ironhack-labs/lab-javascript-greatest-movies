/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// function orderByYear(movies) {

// const moviesCopy = [...movies]
//     const sortedMovies = moviesCopy.sort(() => {
//         if (a.year == b.year) {
//             a.title - a.title
//         }


//         console.log(a.title, b.title)
//         console.log("----")
//         console.log(a.year, b.year)
//         console.log("2----2")
//         return [a.year - b.year]
//     })
// }

// orderByYear(movies)





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


// function howManyMovies(PARAM) {

// }

// const howManyMovies = function (PARAM) {

// }

// const howManyMovies = (param) => { }


function howManyMovies(arrMovies) {
    let moviesFiltered = arrMovies.filter(peli => peli.director.includes("Steven Spielberg") && peli.genre.includes("Drama"))


    return moviesFiltered.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrMovies) {
    const arrMoviesMap = arrMovies.map(elm => elm.title)

    arrMoviesMap.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    })

    // console.log(arrMoviesMap)
    return arrMoviesMap.slice(0, 20)

}

orderAlphabetically(movies)

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrMovies) {
    const arrMoviesRate = arrMovies.map(elm => elm.rate)
    let arr2 = arrMoviesRate.reduce((acc, elm) => acc + elm, 0)
    const average = arr2 / arrMoviesRate.length

    // console.log(parseInt(average.toFixed(2)))
    if (arrMoviesRate.length === 0) {
        return 0
    }

    return parseFloat(average.toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrMovies) {
    const arrMoviesDrama = arrMovies.filter(elm => elm.genre.includes("Drama"))
    let avgDramaMap = arrMoviesDrama.map(elm => elm.rate)
    let avgDrama = avgDramaMap.reduce((acc, elm) => acc + elm, 0)
    const averageDrama = avgDrama / avgDramaMap.length

    console.log(avgDramaMap)
    if (arrMoviesDrama.length === 0) {
        return 0
    }
    return parseFloat(averageDrama.toFixed(2))

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
