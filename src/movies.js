// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  let directors = movies.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let allSpielbergMovies = movies.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return allSpielbergMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let ratingsCombined = movies.reduce(function (sum, value) {
    if (value.rate === "" || value.rate == null) {
      return sum;
    }
    return sum + value.rate;
  }, 0);
  return Number((ratingsCombined / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    // If there are 0 movies in the array, return 0  
      if (movies.length === 0) {
        return 0;
      }
    // Create new array with only Dramas  
      let onlyDramaMovies = movies.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
          return true;
        }
      });
    // Reduce the new Array to sum  
    if (onlyDramaMovies.length === 0) {
        return 0;
        }
      let dramaMoviesCombined = onlyDramaMovies.reduce(function (sum, value) {
        return sum + value.rate;
      }, 0);
     // Return Average rating (Array sum/items of array) 
      return Number((dramaMoviesCombined / onlyDramaMovies.length).toFixed(2));
    }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let orderedMovies = movies.slice().sort(function (a, b) {
    if (a.year === b.year) {
   
               return a.title.localeCompare(b.title);
           }
    return a.year - b.year;
    })
    return orderedMovies;
    }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
