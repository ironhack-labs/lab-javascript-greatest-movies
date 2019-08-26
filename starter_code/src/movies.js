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

  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  return (dramaMovies.length == 0)? 0 : ratesAverage(dramaMovies);
 
}

console.log(dramaMoviesRate(movies));
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = movies => {
  
  let moviesOrdered = movies.sort((a, b) => {

    if (a.duration < b.duration) return -1;
    if (a.duration > b.duration) return 1;
  
    if (a.title < b.title) return -1; 
    if (a.title > b.title) return 1;
    
    return 0;
    
  });

  return moviesOrdered;
}

let moviesOrdered = orderByDuration(movies);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = movies => {

  let SpielbergMovies = movies.filter(movie => movie.director == 'Steven Spielberg' && 
                                               movie.genre.includes('Drama'));

  let totalMovies = SpielbergMovies.length;

  return totalMovies;
}

console.log(howManyMovies(movies));
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
