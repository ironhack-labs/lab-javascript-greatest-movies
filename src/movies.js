// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arrayOfAllMovies => arrayOfAllMovies.map(movies => movies.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Defines howManyMovies
// Should return a number
// Should return 0 if the array is empty
// Return 0 if he did not direct none of the movies in the array
// Only drama movies! Should return 1
// Only Steven Spielberg movies! Should return 2
// Should return 4

function howManyMovies(arr) {

    const spielbergMovies = arr.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama'))

    return spielbergMovies.length
}

howManyMovies(movies)


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Defines ratesAverage
// You should return a number!
// You should return the average rate of 2 movies with rate 8 each!
// It should be rounded to 2 decimals digits
// It should return 0 if there is no movie
// Return average even if one of the movies does not have rate!

    // para sacar dos decimales usamos .toFixed(2)

function ratesAverage(arr) {

    if (arr.length === 0) {
        return 0
    } else {
        const avgRates = arr.reduce((acc, elm) => elm.rate ? acc + elm.rate : acc, 0)
        
    }
    
    return Number((avgRates / arr.length).toFixed(2))

}
    
// ¿¿¿NO ENTIENDO PORQUE NO FUNCIONA???





// Iteration 4: Drama movies - Get the average of Drama Movies

// Defines dramaMoviesRate
// You should return a number!
// Return the rate of a single element array!
// It should return the average of the array!
// It should return the average of the array, float!
// Only Drama Movies! You should return the average of Drama movies only!
// Should return 0 if there is no Drama movie!

function dramaMoviesRate(arr) {

    const dramasMovies = arr.filter(elm => elm.genre.includes('Drama'))

    if (dramasMovies.length == 0) {
        return 0
    } else {
        const dramasRates = dramasMovies.reduce((acc, elm) => acc + elm.rate, 0)
        const avgRates = parseFloat((dramasRates / dramasMovies.length).toFixed(2))
    }

    return avgRates

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
