// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let directors = movies.map(function(film) {
        return film.director
    })

    return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let amount = 0
    movies.filter(function(movie) {
            if(movie.director === 'Steven Spielberg') {
                if(movie.genre.includes('Drama')){
                    amount++
                }
            }
    })
    return amount
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if(movies.length === 0) {
        return 0
    }
    let sum = movies.reduce(function(acc, movie) {
        if(movie.rate){
            return acc + movie.rate
        } else {
            return acc
        }
        
    }, 0)
    return Math.round(((sum/movies.length))*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    if(movies.length === 0) {
        return 0
    } 
    
    let drama = movies.filter(function(movie) {
        return movie.genre.includes('Drama')
    })
    return  ratesAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let ordered = movies.sort(function(a, b){
        if(a.year === b.year){
            return a.title - b.title
        }
      return a.year - b.year
    })
    let newArr = ordered.map(function(m){
        return m
    })
    return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let ordered = movies.sort(function(a, b) {
        return a - b
    })
    ordered.length = 19
   
    let arr = ordered.map(function(m) {
        return m.title
    })
   
    return arr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
