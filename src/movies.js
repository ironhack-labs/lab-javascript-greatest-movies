// Iteration 1: All directors? - Get the array of all directors.
let directors = []
function getAllDirectors(arr) {
    directors = arr.map(x => x.director)
    return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let dramaFilms = 0

function howManyMovies(arr) {
    let films = arr.filter(x => isSteve = x.director === "Steven Spielberg" && x.genre.includes("Drama"))
    return films.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) return 0
    else {
        let calc = arr.reduce((a, b) => {
            let isEmpty = b.rate === undefined ;
            if (!isEmpty) a = a + b.rate
            else a = a 
            return a
        }, 0)
        let average = calc / arr.length
        return +(average.toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let dramaAverage = 0;
    let totalDrama = 0
    let counter = 0;
    let dramaFilms = arr.filter(film => {
        let isDrama = film.genre.includes("Drama");
        if (isDrama) {
            totalDrama += film.rate
            counter++
        }
        return totalDrama
    })
    if (counter) dramaAverage = totalDrama / counter
    else dramaAverage = 0;
    return +(dramaAverage.toFixed(2))
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

    let sortYearFilms = arr.sort((a, b) => {
        let sameYear = a.year === b.year
        if(sameYear) return a.title.localeCompare(b.localeCompare)
        else return a.year - b.year
    })
    return sortYearFilms
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
