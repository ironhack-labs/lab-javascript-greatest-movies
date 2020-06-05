// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map(function(movie) {
        return movie.director
    });
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let drama = movies.filter(function(movie) {
      return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    })
    return drama.length
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    let average = movies.reduce(function(acc, val) {
       return acc + (val.rate || 0) / movies.length
    }, 0)
    return Math.round(average * 100) / 100
};
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let drama = arr.filter(function(movie) {
    return movie.genre.includes("Drama")
  });
  let maped = drama.map(function(e) {
    return e.rate
  })
    let averageDrama = maped.reduce(function(acc, val) {
     return acc + (val|| 0) / maped.length
  }, 0)
  return Math.round(averageDrama * 100) / 100
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
