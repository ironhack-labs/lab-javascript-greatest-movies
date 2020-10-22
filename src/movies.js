// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  let newArray = array.map(function (element) {
    return element.director;
  });
  return newArray;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const newmoviesArr = ["movie1", "movie2", "movie3"];
console.log(newmoviesArr.length);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const stevenSpielbergDramaMovies = movies.filter(function (movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return movie;
    }
  });

  return stevenSpielbergDramaMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const totalRates = movies.reduce(function (total, movie) {
    return total + movie.rate;
  }, 0);
  console.log("this is not working", totalRates);
  return +(totalRates / movies.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const totalRates = dramaMovies.reduce(function (total, movie) {
    return total + movie.rate;
  }, 0);
  console.log("this is not working", totalRates);
  return +(totalRates / dramaMovies.length).toFixed(2);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.sort(function (movieA, movieB) {
    if (movieA.year < movieB.year) {
      return -1;
    }
    return 0;
  });
  return sorted.map(function (movie) {
    return movie;
  });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const sorted = movies.sort(function (movieA, movieB) {
    if (movieA.title < movieB.title) {
      return -1;
    }
    return 0;
  });
  return sorted.map(function (movie) {
    return movie.title;
  });
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
