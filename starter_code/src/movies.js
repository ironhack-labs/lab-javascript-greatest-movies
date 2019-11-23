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

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
