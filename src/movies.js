// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directors = movies.map(elm => elm.director)
    return directors
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const drama = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return drama.length


}




//console.log(drama)



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// aqui comprendo el codigo y estaba siguiendo el ejemplo de clase y creo que se hubiera llegado al resultado pero no a tener los checks de Jasmine, si no hubiera sido gracias a los compañeros

function ratesAverage(movies) {
    let average = movies.reduce((acc, elm) => {
        if (elm.rate) {
            return elm.rate + acc
        } else {
            return acc
        }
    }, 0)
    if (movies.length === 0) {
        return 0
    }
    return Math.round((average / movies.length) * 100) / 100

}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramamovies = movies.filter(elm => elm.genre.includes('Drama'))
    return ratesAverage(dramamovies)


}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const yearorder = [...movies].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
           return  a.year - b.year
        }
    })
    
    return yearorder
}
    
    
    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const alphabetical = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    const firsttwenty = alphabetical.map(elm => elm.title).slice(0, 20)
    return firsttwenty
    
}
    
    
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average