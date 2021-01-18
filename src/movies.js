// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (moviesArr) {
    
    const allDirectors = moviesArr.map(elm => {

        return elm.director

    })

    return allDirectors
    
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (moviesArr) {

    const StevenSpilbergMovies = moviesArr.filter(elm => {
        return elm.director === 'Steven Spielberg' && elm.genre.includes('Drama')
    })

    return StevenSpilbergMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (moviesArr) {

if (moviesArr.length != 0) {
    const sumRating = moviesArr.reduce((acc, elm) => {

        if (elm.hasOwnProperty('rate')){
            
            return acc + Number(elm.rate)

        } else {

            elm.rate = ''
            return acc + Number(elm.rate)
        }   
    }, 0)

    return Number((sumRating / moviesArr.length).toFixed(2))

}   else {return 0}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (moviesArr) {



    const dramaMoviesArr = moviesArr.filter (elm => {

        return elm.genre.includes('Drama')

    })

    if (dramaMoviesArr.length != 0){

        const sumDramaMoviesRating = dramaMoviesArr.reduce ((acc, elm) => {

            if (elm.hasOwnProperty('rate')){
                
                return acc + Number(elm.rate)

            } else {

                elm.rate = ''
                return acc + Number(elm.rate)
            }   
        }, 0)

        return Number((sumDramaMoviesRating / dramaMoviesArr.length).toFixed(2))
    } else {return 0}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (moviesArr) {

const moviesArrTitleCopy = [...moviesArr]

moviesArrTitleCopy.sort((a, b) => {

    let titleA = a.title.toUpperCase()
    let titleB = b.title.toUpperCase()

    if (titleA < titleB) {
        return -1
    }
    if (titleA > titleB) {
        return 1
    }
    return 0;

})

const moviesArrYearCopy = [...moviesArrTitleCopy]

moviesArrYearCopy.sort((a, b) => {

    return a.year - b.year

})

console.log(moviesArrYearCopy)

return moviesArrYearCopy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (moviesArr) {

    const moviesArrCopy = [...moviesArr]

    const moviesArrCopyTitle = moviesArrCopy.map (elm => {
        return elm.title
    })

    console.log (moviesArrCopyTitle)

    return moviesArrCopyTitle.sort().splice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
