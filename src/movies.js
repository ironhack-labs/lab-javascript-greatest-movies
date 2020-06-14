// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = movies => {
    let getDirectors = movies.map(movie => movie.director)
    return getDirectors
    }

console.log(getAllDirectors);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = moviesArr => {
       let filteredDrama = moviesArr.filter(function (movie) { return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg' })
       return filteredDrama.length
};


howManyMovies();

// Iteration 3: All rates average - Get the average of all rates with 2 decimals



// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
