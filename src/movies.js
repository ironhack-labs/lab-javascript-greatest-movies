

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(function(movie){
        return movie.director
      })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergDrama = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return spielbergDrama.length
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {return 0};
    let totalRates = movies.reduce(function(sum, movie) {
      return sum + movie.rate;
    }, 0)
    let averageRate = totalRates / movies.length
    return Number(averageRate.toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function (movie) {
        return movie.genre.includes("Drama");})
    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    return movies.slice().sort(function(a, b) {
        if (a === b){
          return a.title.localeCompare(b.title);
          } else {
        return a.year - b.year
            }
    })
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const movieTitle = movies.map(movie => movie.title);
      return movieTitle.sort(function(a,b) {
        return a.localeCompare(b);
      }).slice(0,20)
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
