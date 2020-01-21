/* eslint no-restricted-globals: 'off' */



// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies]

    let orderByYear = moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        } else {
            return a.year - b.year
        }


    })
    return orderByYear
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    if (movies.length === 0) {
        return 0
    }
    let numberMovies = 0
    let moviesCopy = [...movies]

    const dramaFilter = moviesCopy.filter(elm => elm.genre.includes("Drama") && elm.director === "Steven Spielberg")

    // console.log(dramaFilter.length)



    return dramaFilter.length

}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const title = movies.map(elm => elm.title)
    // console.log(title)
    if (title.length > 20) {
        let moreThanTwenty = title.sort();

        return moreThanTwenty.slice(0, 20)
    }
    return title.sort()
}



// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length == 0) {
        return 0
    }
    moviesCopy = movies.map(elm => {
        if (elm.rate) {
            return elm.rate
        } else {
            return 0
        }


    })
    // console.log(moviesCopy)
    let rates = moviesCopy.reduce((acc, elm) => {
        return acc + elm
    }, 0)
    // console.log("rates" + rates)
    // console.log("lengt" + moviesCopy.length)


    let averageRates = (rates / moviesCopy.length).toFixed(2)

    // console.log(rates)
    // console.log(moviesCopy.length)
    // // averageRates = averageRates.toFixed(2)

    // // console.log("average" + averageRates)

    return +averageRates



}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let moviesCopy = [...movies]

    const dramaFilter = moviesCopy.filter(elm => elm.genre.includes("Drama"))

    return ratesAverage(dramaFilter)


    //     const rates = movies.map(elm => elm.rate).reduce((acc, elm) =>
    //         acc + elm, 0)
    //     // console.log("rates" + rates)
    //     const averageRates = rates / movies.length

    //     return averageRates


}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    let hoursToMinutes
    let moviesMinutes
    let sumMinutes
    const movieTime = movies.map(elm => {

        if (typeof elm.duration == 'number') {
            elm.duration = elm.duration + ""
        }
        if (elm.duration.includes("h") && elm.duration.includes("min")) {
            hoursToMinutes = elm.duration[0] * 60
            moviesMinutes = elm.duration.slice(-5, -3)
            moviesMinutes = parseInt(moviesMinutes)
            sumMinutes = hoursToMinutes + moviesMinutes
            // console.log(sumMinutes)
            return {
                duration: sumMinutes
            }

        } else if (elm.duration.includes("min")) {
            moviesMinutes = elm.duration.slice(-5, -3)
            moviesMinutes = parseInt(moviesMinutes)

            // console.log(moviesMinutes)
            return {
                duration: moviesMinutes
            }
        } else if (elm.duration.includes("h")) {
            hoursToMinutes = elm.duration[0] * 60
            console.log(hoursToMinutes)




            return {
                duration: hoursToMinutes
            }
        }


    })
    return movieTime

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

// console.log(sumMinutes)
// const hoursToMinutes = movieTime.forEach(elm => elm[0] * 60)
// const moviesMinutes = movieTime.forEach(elm => parseInt(elm.slice(-5, -3)))

//     const minutes = hoursToMinutes + moviesMinutes
//     if (minutes < 31) {

//     } else if (minutes > 341) {

//     } else return minutes
// }