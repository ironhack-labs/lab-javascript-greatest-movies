// Iteration 1: All directors? - Get the array of all directors.
//My code:
// function getAllDirectors(arrayOfMovies) {
//   let directors = arrayOfMovies.map(function (arrayElement) {
//     return arrayElement.director;
//   });
//   return directors;
// }
//better solution presented by Maxim, same stuff, just cleaner:
function getAllDirectors(arrayOfMovies) {
  return arrayOfMovies.map(function (arrayElement) {
    return arrayElement.director;
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//return only Spilbergs drama movies

function howManyMovies(movies) {
  let getStevenSpilbergDramas = movies.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return getStevenSpilbergDramas.length;
}

// Failed attempt to change this into new syntax
// function howManyMovies(movies) {
//   let getStevenSpilbergDramas = movies.filter(
//     (eachMovie) => element.director === "Steven Spielberg" && element.genre.includes("Drama")
//   );
//   return getStevenSpilbergDramas.length;
// }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
//rate at movies.rate

function ratesAverage(array) {
  let avarageRate = array.reduce(function (acc, val) {
    return acc + val.rate / array.length;
  }, 0);
  return Number(avarageRate.toFixed(2));
}
//   return avarageRate; //.toFixed(2) returns a string!!!, so changing it back to number with metrod Andre shown Number(variabName)

// Iteration 4: Drama movies - Get the average of Drama Movies
// average rate of ony drama movies (no other)

function dramaMoviesRate(movies) {
  let onlyDramas = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes("Drama");
  });
  let averageRateDramaMovies = onlyDramas.reduce(function (acc, drama) {
    return acc + drama.rate / onlyDramas.length;
  }, 0);
  return Number(averageRateDramaMovies.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year ascending (in growing order)
// I tried map as it returns new array I aimed to put sort in map to sort years and return them as new array
// function orderByYear(movies) {
//   let moviesByYear = movies.map(function (year)) {
//    return movies.year.sort(function (movieYear, anotherMovieYear) {
//     return movies.year - movies.year;
//   });
// } return moviesByYear
// }

// function orderByYear(movies) {
//   let moviesByYear = movies.sort(function (movieYear, anotherMovieYear) {
//     return movies.year - movies.year;
//   });
//   return moviesByYear;
// }

//below also did basic passes
// function orderByYear(movies) {
//   let moviesByYear = movies.sort();
//   return moviesByYear;
// }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration //of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
