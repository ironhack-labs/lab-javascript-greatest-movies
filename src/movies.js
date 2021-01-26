// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrayOfMovies) {
  let arrayOfDirectors = arrayOfMovies.map(function (movie) {
    return movie.director;
  })
  return arrayOfDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// BONUS
// BONUS
// BONUS

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  let arrayOfDramasBySpielberg = arrayOfMovies.filter(function (movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
      return true;
    }
  })
    return arrayOfDramasBySpielberg.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfMovies) {
  let averagetRate = arrayOfMovies.reduce(function (accumulator, currentValue) {
    if (currentValue.hasOwnProperty("rate")) {
      return accumulator + currentValue.rate;
    }
    else {
      return accumulator;
    }
  }, 0);
  if (arrayOfMovies.length === 0) {
    return 0
  }
    averagetRate = averagetRate / arrayOfMovies.length
    return Number(averagetRate.toFixed(2))
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies) {
  let arrayOfDramas = arrayOfMovies.filter(function (movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });
  numberOfDramas = arrayOfDramas.length
  averageRateDramas = arrayOfDramas.reduce(function (accumulator, currentValue) {
    if (currentValue.hasOwnProperty("rate")) {
      return accumulator + currentValue.rate;
    }
    else {
      return accumulator;
    }
  }, 0);
  if (numberOfDramas === 0) {
    return 0
  }
  averageRateDramas = averageRateDramas / numberOfDramas
  return Number(averageRateDramas.toFixed(2));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(arrayOfMovies) {
    let moviesOrderedByYear = [...arrayOfMovies];
    moviesOrderedByYear.sort(function(a,b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return moviesOrderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  let moviesOrderdAlphabetically = [...arrayOfMovies]
  moviesOrderdAlphabetically.sort(function (a,b){
    return a.title.localeCompare(b.title)
  })
  moviesOrderdAlphabetically = moviesOrderdAlphabetically.map(function (a) {
    return a.title
  })
  let top20 = moviesOrderdAlphabetically.splice(0,20)
  return top20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

