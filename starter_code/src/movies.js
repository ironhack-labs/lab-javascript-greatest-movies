/* eslint no-restricted-globals: 'off' */
let roundBy2 = (num) => {
    return Number(num.toFixed(2))
}
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

let ratesAverage = (movieArr) => {
    let allMoviesArr = movieArr.map(number => Number(number.rate))
    return(roundBy2(allMoviesArr.reduce((accumulator, currentValue) => accumulator + currentValue) / allMoviesArr.length))
}

// Iteration 2: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (movieArr) => {
    let allDramaMovies = movieArr.filter(movies => movies.genre.includes('Drama'))
    return roundBy2(allDramaMovies.reduce((total, movie) => total += (movie.rate || 0), 0) / allDramaMovies.length) || 0 
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
let orderByDuration = (movieArr) => {
    return allMovies = movieArr.sort((a, b) =>  a.duration - b.duration || a.title.localeCompare(b.title))
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
let howManyMovies = (movieArr) => {
    let allSteven =  movieArr.filter((movies) => (movies.director == "Steven Spielberg" && movies.genre.includes("Drama")) )
    return allSteven.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (moviesArr) => {
    let first20 = moviesArr.map((movie) => movie.title ).sort((a,b) => a.localeCompare(b) ).splice(0,20)
    return first20
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinutes = (movieArr) => {
    let finalArr = []
    let movieDuration = movieArr.map((movie) => movie.duration )
    movieDuration.map((time) =>{
        if (time.includes("h")) {
            let arrSplit = time.split(" ")
            let hours = (parseFloat(arrSplit[0]) * 60) 
            let minutes = parseFloat(arrSplit[1]) || 0
            result = hours + minutes
            finalArr.push({duration: result})
        }
        else {
            finalArr.push({duration: parseFloat(time)})
        }
    })
    return finalArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

let bestYearAvg = (movieArr) => {
    a.reduce((acc, v) => {acc[v] = []; return acc}, new Object)
}