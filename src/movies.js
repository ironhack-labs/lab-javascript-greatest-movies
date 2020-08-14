// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directorsList = movies.map(function(name) {
            return name.director
        })
    return directorsList
    }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const listOfSpielbergDramas = movies.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
          return true
        }
      })
      return listOfSpielbergDramas.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    const filmsWithRating = movies.filter(function(movie) {
      if (movie.rate) {
        return true
      }
    })
    const averageRate = filmsWithRating.reduce(function(acc, val) {
      return (acc + val.rate)}, 0)
    return Number ((averageRate/movies.length).toFixed(2))
    }
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
