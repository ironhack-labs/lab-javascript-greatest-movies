/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  var newArray = Object.assign([], array)
  newArray.sort(function(a, b){
    if(a.year != b.year){
      return a.year - b.year
    } else {
      return a.title.localeCompare(b.title)
    }
  })
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
  var movies = Object.assign([], array)
  var count = 0;
  movies.filter(function(movie){
    return movie.director == "Steven Spielberg"
  }).forEach(function(movie){
    movie.genre.forEach(function(genre){
      if(genre == "Drama"){
        count++;
      }
    })
  })
  return count;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
  var movies = Object.assign([], array)
  return movies.map(function(movie){
    return movie.title
  }).sort(function(a, b){
    return a.localeCompare(b)
  }).filter(function(movie, index){
    return index < 20;
  })
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
  let average = array.reduce(function(total, movie){
    if(movie.rate != undefined){
      return total + (movie.rate/array.length)
    } else {
      return total += 0;
    }
  }, 0)
  return Number(average.toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
