// Iteration 1: All directors? - 
function getAllDirectors(movies){
  return movies.map((movie) => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  const stevenMovies = movies.filter((movie) => movie.director === "Steven Spielberg");
  const dramaMovies = stevenMovies.filter((movie) => movie.genre.includes("Drama"));
  return dramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if(movies.length > 0 ) {
    const rates = movies.map((movie) => movie.rate || 0);
    let ratesAverage = rates.reduce((total, next) => total + next, 0) / rates.length;
    ratesAverage = ratesAverage.toFixed(2);
    return parseFloat(ratesAverage);
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(dramaMovies);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = movies.sort((a, b) => a.year - b.year);
  return sortedMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const twentyMovies = movies.slice(0, 20);
  const sortedMovies = twentyMovies.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });

  return sortedMovies.map((movie) => movie.title);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
