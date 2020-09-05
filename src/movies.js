// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = (arrayOfMovies) => arrayOfMovies.map(arrayOfMovies => arrayOfMovies.director)

console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


let howManyMovies = (arrayOfMovies) => arrayOfMovies.filter(movie => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))).length

//console.log(howManyMovies(movies.length))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesList = (arrayOfMovies) => {
    let ratingsList = arrayOfMovies.map(arrayOfMovies => arrayOfMovies.rate)
    let filteredratingsList = ratingsList.filter(e => e !== undefined)
    return filteredratingsList
}

console.log(ratesList(movies))

function ratesAverage(arrayOfMovies) {

    if (arrayOfMovies.length === 0)
        return 0


    return Math.round(((ratesList(arrayOfMovies).reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arrayOfMovies.length) * 100)) / 100
}
console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrayOfMovies) {
    let dramaMovies = arrayOfMovies.filter(movie => movie.genre.includes("Drama"))
    return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by 

function orderByYear(listOfMovies) {
    let result = listOfMovies.slice()

    result.sort(
        function compare(a, b) {
            if (a.year < b.year) return -1; // a is less than b
            if (a.year > b.year) return 1; // a is greater than b
            if (a.year === b.year) {
                    if (a.title < b.title) return -1; // a is less than b
                    if (a.title > b.title) return 1; // a is greater than b
                    if (a.title === b.title) return 0;
            }
        }
    )
    return result
}
console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(listOfMovies) {
    let result = listOfMovies.map(listOfMovies => listOfMovies.title)

        result.sort(
            function compare(a, b) {
                if (a < b) return -1; // a is less than b
                if (a > b) return 1; // a is greater than b
                if (a === b) return 0;
                }
        )
        return result.slice(0,20)
    }
    console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
