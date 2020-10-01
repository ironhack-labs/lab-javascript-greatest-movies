

// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = function(arr) {
    let directors = arr.map(movie => movie.director)
    return directors
}

console.log(getAllDirectors(movies).length)
console.log(movies.length)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = function(arr) {
    if (arr.length === 0) {
        return 0
    }
    let stephenMovies = arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
return stephenMovies.length
}

console.log(howManyMovies(movies))



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = function(arr) {
    if (arr.length === 0) {
        return 0
    }
    let rateTotal = arr.reduce((acc, current) => {
        return acc + current.rate }, 0)
    return Math.round(100 * rateTotal / arr.length) / 100;
}

console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = function(arr) {
    let dramaMovie = arr.filter(movie => movie.genre.includes("Drama"))
    if (dramaMovie.length === 0) {
        return 0
    }
    let rateTotalDrama = dramaMovie.reduce((acc, current) => {
        return acc + current.rate }, 0)
    return Math.round(rateTotalDrama / dramaMovie.length * 100) / 100;
}

console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = arr => {
    let newSortedArray = arr.sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year  
    })

    return newSortedArray
}

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = arr => {
    let orderedArray = JSON.parse(JSON.stringify(arr))
    let titlesorderedArray = []
    orderedArray.map(movie => titlesorderedArray.push(movie.title))
    titlesorderedArray.sort()
    return titlesorderedArray.slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinute = arr => {
    let duration = []
    let hours = []
    let minute = []
    let durationArray = arr.forEach(movie => duration.push(movie.duration.split(" ")))
    let newArrayDuration = duration.forEach(hours => 
    hours[0] = hours[0][0]*60
    )
    console.log(newArrayDuration)
    console.log(duration)
    
}

turnHoursToMinute(movies)
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average)