// Iteration 1: All directors? - Get the array of all directors.
// function getAllDirectors(array) {
//     let newDirectorsList = array.map(function(director) {
//       return array.director
//    })
//   return newDirectorsList
//   }
  
//   getAllDirectors(movies)
function getAllDirectors(array) {
    let newDirectorsList = array.map(function(director) {
      return director.director
   })
  return newDirectorsList
  }


    
// function getAllDirectors(array, object) {
//     let directorKey = Object.keys(object)[2]
//     const directorNames = array.map(function (director) {
//        return director.directorKey                                
//     })
//   }   
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    let spielbergDramaMovies = array.filter(function(movie) {
     return movie.director === "Steven Spielberg" && movie.genre.includes("Drama") 
    })
    return spielbergDramaMovies.length
    }
    
    howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// function ratesAverage(movies) {
//     const allRates = movies.reduce(function(acc, movie) {
//       return acc + movie.rate
//   }, 0)
//     if (movies.length === 0) {
//       return 0
//     } else {
//       return allRates/movies.length
//     }
//   }
function ratesAverage(array) {
    const allRates = array.reduce(function(acc, movie) {
      return acc + movie.rate
  }, 0)
    if (array.length === 0) {
      return 0
    } else {
      return allRates/array.length
    }
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
  const dramaFilter = array.filter(function(movie){
    return movie.genre.includes('Drama')
  })
  return ratesAverage(dramaFilter)
  }

// dramaMoviesRate(movies)
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){

      yearOrder = array.slice().sort(function(a,b){
      if (a.year === b.year){
        if (a.title > b.title){
          return 1
        } else if (a.title < b.title){
          return -1
        } else {
          return 0
        }
      } else {
        return a.year - b.year
      }
    })
    return yearOrder
  }
  
  orderByYear(movies)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    for (i=0; i <= 20; i++) {
    const sortedFilms = array.slice().sort(function (a,b) {
      if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return - 1
      }
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1
      }
      return 0
  })
    return sortedFilms
  }
}
orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
