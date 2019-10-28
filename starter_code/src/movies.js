/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesYear) {
    let moviesByYear = [...moviesYear]
    moviesByYear.sort((a, b) => a.year - b.year)
    moviesByYear.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
        }
        return 0;
    })
    return (moviesByYear)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(stevenMovies) {
    let count = 0
    let movies = stevenMovies.filter(elm => elm.director === "Steven Spielberg")
    let dramaMovies = movies.filter(elm => elm.genre.includes("Drama"))
    dramaMovies.forEach(elm => count++);
    return count
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    topMovies = [...movies]
    topMovies.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    })
    while (topMovies.length > 20) {
        topMovies.pop()
    }
    let movies20 = topMovies.map(elm => elm.title)
    return movies20
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length < 1) {
        return 0
    }

    // let rate = movies.map(elm => elm.rate)
    // console.log(rate)

    // for (i = 0; i < rate.length; i++){
    //     if (isNaN(rate[i]) || rate[i] == "") {
    //         rate[i] = 0
    //     }
    // }

    const moviesRate = movies.reduce((acc, elm) => {
        if (elm.rate) {
            return acc + elm.rate
        } else {
            return acc
        }
    }, 0)

    let rate2 = (moviesRate / movies.length).toFixed(2)
    return +rate2
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let drama = movies.filter(elm => elm.genre.includes("Drama"))
    if (drama.length < 1) {
        return 0
    }
    let rateMovies = drama.map(elm => elm.rate)
    const rate = rateMovies.reduce((acc, elm) => {
        return acc + elm
    }, 0)
    return +(rate / drama.length).toFixed(2)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    let h = 0
    let m = 0
    let minutes = array.map(element => {
        if (element.duration.includes('h')) {
            h = +(element.duration[0])
        }
        if (element.duration.includes('min')) {
            m = +(element.duration.slice(element.duration.length - 5, element.duration.length - 3))
        }
        let minutes = h * 60 + m
        return {
            ...element,
            duration: minutes
        }
    })
    return minutes
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average