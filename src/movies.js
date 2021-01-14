// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrMovies){
    return mappedArray = arrMovies.map(e=> e.director)
    // console.log(arrMovies)
}

// console.log(getAllDirectors(movies))
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const cleanDirectors = [...new Set(getAllDirectors(movies))]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrmovies){
    const directedSteven = arrmovies.filter(eDirector => eDirector.director === "Steven Spielberg" && eDirector.genre.includes("Drama"))
    return directedSteven.length
}
howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrMovies) {
    if(arrMovies.length===0){
        return 0
    }
    const numArray = arrMovies.map(e => e.rate)
    const suma = numArray.reduce((a,b) => {
        return a + b
    },0)
    const prom = (suma/arrMovies.length).toFixed(2)
    // console.log(prom)
    return prom
}

// console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovies){
    const dramatic = arrMovies.filter(e => e.genre.includes("Drama"))
    const promedio = ratesAverage(dramatic)
    return promedio
}

// console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrMovies){
    const moviesByYear = arrMovies.sort((a, b) => a.year - b.year);
    return moviesByYear

}

// console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arrmovies){
    const movieNew = arrmovies.map(e => e.title)
    movieNew.sort()
    const prim20 = movieNew.slice(0,20)
    return prim20
}

console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrmovies){
    const prueba = arrmovies.map(e => e)
    return prueba
}

console.log(turnHoursToMinutes(movies))
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
