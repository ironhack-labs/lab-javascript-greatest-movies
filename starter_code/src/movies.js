/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(sortedArray) {
    let newArr = [];
    newArr = sortedArray.sort((a, b) => a.year > b.year ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1);
    return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function dramaMovies(array) {
    let dramaMovies = array.filter(movie => movie.genre.includes("Drama"))
    return dramaMovies
}

function howManyMovies(array) {
    let drama = dramaMovies(array)    
    let stevenDramaMovies = drama.filter(steven => steven.director.includes("Steven Spielberg"))
    return stevenDramaMovies.length
  }
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    
    let movieByTitle = array.map(movie => movie.title)
    let topTwenty = movieByTitle.sort((a, b) => (a > b) ? 1 : -1)
       topTwenty.length > 20 ? topTwenty.splice(20) : topTwenty;
 
    return topTwenty
 }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    let avgRate = 0;
    if (!array.length) return 0;
    else {
    let rateMovies = array.reduce((acc, currVal) => {
      return acc + currVal.rate;
      }, 0)
      avgRate = Math.round((rateMovies/array.length) * 100)/100
      return avgRate
    }
    }

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let rateDrama = dramaMovies(array)
    return ratesAverage(rateDrama)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
