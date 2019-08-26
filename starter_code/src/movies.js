/* eslint no-restricted-globals: 'off' */



// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = movies => {

  let average = (movies.reduce(
                        (ac, movie) => 
                        ac + +movie.rate, 0))
                        /movies.length;
  
  return +average.toFixed(2);
}
console.log(ratesAverage(movies));
 
// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {

  let dramaMovies = movies.filter(movie => movie.genre.indexOf('Drama') >= 0);

  return (dramaMovies.length == 0)? 0 : ratesAverage(dramaMovies);
  
}

console.log(dramaMoviesRate(movies));
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
