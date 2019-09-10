// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array){
  return parseFloat((array.reduce((sum, element) => sum + parseFloat(element.rate), 0) / array.length).toFixed(2))
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaGenre = movies.filter(movie => {
    movie.genre.inludes("Drama")
  });
  


  console.log(dramaGenre);
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
