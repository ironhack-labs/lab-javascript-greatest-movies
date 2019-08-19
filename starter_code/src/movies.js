/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    const sum = arr.reduce((accumolator, currenValue) => {
        if (currenValue.rate == "") {
            return accumolator + 0
        }
        return accumolator + parseFloat(currenValue.rate)
    }, 0) //<--- it starts with the accumolator
    const avg = sum / arr.length;
    return Math.round(avg * 100) / 100; //<--- Making two decimals after comma
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const drama = arr.filter(movies => movies.genre.includes('Drama'));
    if (drama.length === 0) {
        return 0
    }
    return ratesAverage(drama);
    // const number = drama.reduce((accumolator, currenValue) => accumolator + parseFloat(currenValue.rate), 0)
    // return (number / drama.length)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
    const sortDuration = arr.sort((a, b) => {
        if (a.duration === b.duration) {
            return a.title < b.title ? -1 : 1
        }
        return parseFloat(a.duration) < parseFloat(b.duration) ? -1 : 1
    })
    return sortDuration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    const spielbergMovies = arr.filter(movies => movies.director == "Steven Spielberg")
    return spielbergMovies.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const alphabeticalOrder = arr.map(movie => movie.title).sort()
    if (alphabeticalOrder.length >= 20) {
        return alphabeticalOrder.slice(0, 20);
    }
    return alphabeticalOrder;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const duration = arr.map(length => parseFloat(length.duration) * 60 + parseFloat(length.duration.slice(2)))
    console.log(duration);


    //let duratio = arr.map(length => //parseFloat(length.duration.slice(0, 1) * 60) + parseFloat(length.duration.slice(3)))




    return clone
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average