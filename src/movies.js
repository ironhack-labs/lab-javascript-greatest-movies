// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directors = movies.map(elm => elm.director)
    return directors
}
getAllDirectors(movies)
// ----TEST for shorter function----
// const getAllDirectors = elm => movies.map(elm => elm.director)
// getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const dramaMovies = movies.filter(
        elm => elm.director === 'Steven Spielberg' && elm.genre.includes("Drama"))
    return dramaMovies.length
}
howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// He intentado comprender esta parte y crear una función. He estado tirando un poco por la calle 
// de en medio y he creado la función que funciona(o eso creo...) pero en Jasmine no me lo da como valido...
// function ratesAverage(movies) {
//     if (movies.lenght === 0) {
//         return 0
//     }
//     let totalRate = movies.reduce((acc, val) => acc + val.rate / movies.length, 0)
//     return totalRate.toFixed(2)
// }
// ratesAverage(movies)

// Tengo muchas dudas con esta función... entiendo como buscar la media pero no sé como implementarlo para que Jasmine me lo valide...
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    const calculateAvg = movies.reduce((acc, val) => acc + (val.rate || 0), 0)
    let total = (calculateAvg / movies.length * 100) / 100
    return parseFloat(total).toFixed(2)
}
ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
// Me encuentro con el mismo problema de esta función! creo que no estoy entendiendo bien los pasos que me pide Jasmine...
function dramaMoviesRate(movies) {
    const genreDrama = movies.filter(elm => elm.genre.includes("Drama"))
    const dramaRate = genreDrama.length
    if (dramaRate === 0) {
        return 0
    }
    const rateAvg = genreDrama.reduce((acc, val) => acc + val.rate / genreDrama.length, 0)
    return rateAvg.toFixed(2)
}
dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// FUNCION que solo funciona para la ordenación por año
// function orderByYear(movies) {
//     const sortYearTitle = [...movies].sort((a, b) => a.year - b.year)
//     return sortYearTitle
// }
// orderByYear(movies)

// He tardado bastante en implementar esta función y poner algo de lógica 
function orderByYear(movies) {
    const sorting = [...movies].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    return sorting
}
orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const sortMovies = [...movies].sort((a, b) =>
        a.title.localeCompare(b.title))
    const firstTwenty = sortMovies.slice(0, 20)
    return firstTwenty
}
orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average