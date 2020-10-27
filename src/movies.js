// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map(elm => {
        return elm.director
        
    })
    return directors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spielberg = movies.filter(function (movie) {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    )
    })
    return spielberg.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies[0] === undefined) {
        return 0
    }
    
    let rate= movies.map(elm=>elm.rate)
    
    const averagemovie = rate.reduce((rate, singlerate) => (rate+singlerate)/movies.length)
    return parseFloat(averagemovie.toFixed(2))
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let drama = movies.filter((movie)=>{
        if (movie.genre.includes("Drama")) {
            return true
        }
    })
    const averageDrama = ratesAverage(drama)
    return parseFloat(averageDrama.toFixed(2))
    }
   
   


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const yearOrder = movies.slice().sort((a, b) => b.year - a.year)
    return yearOrder.reverse()
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const alfaTitle = movies.map(elm => elm.title)
    return alfaTitle.sort().slice(0,20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const durationMovie = movies.map(function(movie){
        let horas = movie.duration[0]*60
        let minutos = movie.duration.substring(3, 5)
        let totalminutos = horas + parseFloat(minutos)
        let totalhoras= parseFloat(movie.duration)[0]+(parseFloat(minutos)/60)
        return totalminutos,  totalhoras
    })
    return durationMovie
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
    if (movies[0] == undefined) {
     return null
    }
 
    }
    
        
