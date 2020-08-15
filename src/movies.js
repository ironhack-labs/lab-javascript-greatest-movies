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

function dramaMoviesRate(movies) {
    const listOfDramaMovies = movies.filter(function(movie) {
          if (movie.genre.includes('Drama')) {
              return true
          }
      })
    if (listOfDramaMovies.length === 0) {
      return 0
    }
  const dramaMoviesTotalRating = listOfDramaMovies.reduce(function(acc, val) {
    return acc + val.rate
  }, 0)
  dramaMoviesTotalRating/listOfDramaMovies.length
    return Number ((dramaMoviesTotalRating/listOfDramaMovies.length).toFixed(2))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
    const sorted = movies.slice(0).sort(function (a, b) {
      if ( a.year === b.year) {
        if(a.title < b.title) {
          return -1
        }
        if( a.title > b.title) {
          return 1
        }
      }
        return a.year - b.year
    })
    return sorted
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
    const sorted = movies.sort(function (a,b) {
        
    return a.title.localeCompare(b.title);
    })
    return sorted;
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
