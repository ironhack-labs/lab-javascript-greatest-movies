// Iteration 1: All directors? - Get the array of all directors.

    const getAllDirectors = moviesArray => moviesArray.map(elm => elm.director);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

    const movies = moviesArray.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return movies.length
}
    

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const rateSum = moviesArray.reduce((acc, elm) => {

        if (typeof elm.rate === "number") {
        
            return acc + elm.rate
        }
        else {

        }
    }, 0)
    
    return Math.round((rateSum / moviesArray.length) * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {


    const dramaMovies = moviesArray.filter(elm => elm.genre.includes("Drama"))

    
     if (dramaMovies.length === 0) {
        return 0
    }
    
        
    const rateSumDrama = dramaMovies.reduce((acc, elm) => {
        
        if (typeof elm.rate === "number") {
            
            
            return acc + elm.rate
            
        }
        else {
            
         }

    }, 0)

    return Math.round ((rateSumDrama / dramaMovies.length) * 100) / 100
         
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    const arrayCopy = [...moviesArray]
    
    const year = arrayCopy.sort((a, b) => {

        if (a.year < b.year) return -1
        if (a.year > b.year) return 1
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
    
    }) 

    return year
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    
    const arrayCopy2 = [...moviesArray]

    const alphMovies = arrayCopy2.sort((a, b) => {
        
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1 

    })

    if (alphMovies.length > 20) {
        
        return alphMovies.slice(0, 20).map(elm => elm.title)
        
    } return alphMovies.map (elm => elm.title)
    



}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
