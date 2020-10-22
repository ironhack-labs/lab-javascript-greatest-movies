// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = movies => {
    return movies.map(movie => {
        return movie.director
    })
}

// console.log(getAllDirectors(movies))
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let getStevenSpilbergDramas = movies.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return getStevenSpilbergDramas.length;
}

console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
 function ratesAverage(array) {
  let avarageRate = array.reduce(function (acc, val) {
    return acc + val.rate / array.length;
  }, 0);
  return Number(avarageRate.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
    return ratesAverage["drama"]
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
