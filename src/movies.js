// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(function (movie) {
        return movie.director
    })
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    let count = 0;
    let dramaMovies = movies.filter(function (movie) {
      if (movie.genre.includes("Drama")) {
        return movie;
      } else {
          return 0; 
      }
    });
    let spielbergDrama = dramaMovies.filter(function (movie) {
      if (movie.director.includes("Spielberg")) {
        count += 1;
      }
    });
    return count;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0){
        return 0;
    }
    let sumRates = movies.reduce(function(acc, val){
        return acc + (val.rate || 0)
    }, 0);
    return parseFloat((sumRates/movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
