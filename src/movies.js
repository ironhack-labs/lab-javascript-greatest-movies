// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const spielbergsDramas = movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergsDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  // These are the best movies based on their rates, so supposedly all of them have a remarkable rate. In this iteration, we want to know the
  // average rate of all of them and display it on the console.
  // Create a ratesAverage() function that receives an array
  // as a parameter and solves the challenge.
  // The rate must be returned rounded to 2 decimals!
  // 💡 Maybe you want to "reduce" the data to a single value. 😉
  if (!movies.length) return 0;

  const moviesRates = movies
    .map((movie) => movie.rate)
    .map((rate) => {
      if (typeof rate !== "number") {
        return 0;
      } else {
        return rate;
      }
    });

  const ratesTotal = moviesRates.reduce((acc, rate) => (acc += rate));
  const averageFinal = ratesTotal / moviesRates.length;

  //console.log(averageFinal.toFixed(2)); // doesnt work with Jasmine...no idea why...

  return averageFinal;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  const dramaMovies = arr.filter(function (movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
    return false;
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const sumDramaMovies = dramaMovies.reduce(function (acc, element) {
    return acc + element.rate;
  }, 0);
  return parseFloat((sumDramaMovies / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let orderYear = array.sort((a, b) => {
    if (a.title === b.title) {
      return a.year - b.year;
    } else {
      return -1;
    }
  });
  return orderYear.map((element) => element);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let movieTitles = array.map((element) => element.title);
  movieTitles.sort();
  if (movieTitles.length > 20) {
    return movieTitles.slice(0, 20);
  } else {
    return movieTitles;
  }
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
