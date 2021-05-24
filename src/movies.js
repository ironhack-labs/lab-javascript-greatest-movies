// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr){
  let directors = arr.map((e) => {
    return e.director
  })
  return directors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
  let spielberg = arr.filter((e) => {
    return e.director === "Steven Spielberg" && e.genre.includes('Drama')
  })
  return spielberg.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
  let count = 0
  if(arr.length === 0){
    return 0
  }else{
    let rates = arr.reduce((rateAccum, movie) => {
      if(movie.rate == '' || movie.hasOwnProperty('rate') === false){
        count += 1
        return rateAccum + 0
      } else {
        count += 1
        return rateAcc + movie.rate
      }
    },0)
    let avgRate = rates / count
    return Math.round(avgRate * 100) / 100
  }
}
// Iteration 4: Drama movies - Get the average of Drama Movies}
function dramaMoviesRate(arr){
  const dramaMovies = arr.filter((e) => {
    arr.genre.includes('Drama')
  })
  if(dramaMovies.length === 0){
    return 0
  }
    let dramaMoviesRate = dramaMovies.reduce(function(rate,movie)  {
      return rate + movie.rate
    },0)
    let avgRate = dramaMoviesRate / dramaMovies.length
    return Math.round(avgRate * 100)/100
  

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
  const moviesToSort = [...arr]
  const sortByYear = moviesToSort.sort(function(a,b){
    if(a.year > b.year){
      return 1
    }else if(a.year < b.year){
      return -1
    }else if(a.year === b.year){
      if(a.title > b.title){
        return 1
      }else if(a.title < b.title){
        return 1
    }
  }
  return sortByYear
})
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
