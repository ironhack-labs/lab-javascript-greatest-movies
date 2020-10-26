// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies) {
    const allDirectors = movies.map(elm => elm.director)
    return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
   const spielbergDrama = movies.filter(elm =>
       elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return spielbergDrama.length;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    const moviesRating = movies.filter(elm => elm.rate)
    const rateSum = moviesRating.reduce((acc,elm) => (acc+elm.rate),0)
    const ratesAverage = (rateSum / movies.length)

    if (movies.length === 0) {
        return 0
    } 
    return ratesAverage
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const moviesRating = movies.filter(elm => elm.genre == "Drama")
    const rateSum = moviesRating.reduce((acc,elm) => (acc+elm.rate),0)
    const dramaMoviesRate = (rateSum / moviesRating.length) 

    if (moviesRating.length === 0) {
      return 0;
    }

    return dramaMoviesRate
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const moviesCopy = JSON.parse(JSON.stringify(movies));
    const orderedList = moviesCopy.sort((a, b) => a.year - b.year)
    return orderedList
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const titleList = movies.map((elem => elem.title))
    const primerosVeinte = titleList.slice(0, 20)
    return primerosVeinte

    const orderedMovies = titleList.sort((a, b) => a - b)
    
}
 
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
