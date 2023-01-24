// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const justDirectors = moviesArray.map((moviesArray) => {
        return moviesArray.director
    })

    return justDirectors //Debo acordarme de retornar fuera.
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((moviesArray) => {
        return moviesArray.director === 'Steven Spielberg' && moviesArray.genre.includes('Drama')
    })
    return spielbergMovies.length //con el .length obtengo el número al pedir la longitud del ARRAY!!!
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0

    const average = moviesArray.reduce((acc, moviesArray) => {
        //(moviesArray.score === 0) {return 0}
        return acc + moviesArray.score
    }, 0)
    //A partir de Aqui todo fuera de la Arrow Function
    let arrayAverage = average / moviesArray.length
    let averageWithDecimal = Number(arrayAverage.toFixed(2))

    return averageWithDecimal
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) { return 0 }
    const dramaMoviesArray = moviesArray.filter((moviesArray) => {
        return moviesArray.genre.includes('Drama')
    })
    return scoresAverage(dramaMoviesArray) //solo es necesario llamar a la función anterior. No complicarse...
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = [...moviesArray]


    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titlesArrayCopy = [...moviesArray]
    let cinema = titlesArrayCopy.map((element) => {
        return element.title
    })
    let titlesArrayCopy1 = cinema.sort()
    if (titlesArrayCopy1.length > 20) { return titlesArrayCopy1.slice(0, 20) }

    return titlesArrayCopy1
    //Sin ayuda se me hubiesen olvidado pasos aplicar el sort y slice.
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
