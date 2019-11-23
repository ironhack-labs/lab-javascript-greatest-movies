/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let movies = arr;

  if (movies.length != 0) {
  
    arr.sort( (a,b) => {
      if (a.year != b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    })

  return movies
  }
  
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let movies = arr

  return movies.filter( movie => {
    return (movie.director == 'Steven Spielberg') && (movie.genre.indexOf("Drama") >= 0)
  }).length

}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let movies = arr;

  movies.sort( (a,b) => {
    return (a.title).localeCompare(b.title)
  })

  movies = movies.map( e => e.title).filter( (e,i) => i < 20)

  return movies
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
