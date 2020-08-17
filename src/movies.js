// Iteration 1: All directors? - Get the array of all directors.

// const getAllDirectors = (movies) => {
//   return movies.director.map(function (director) {
//     return directorsArr;
//   });
// };

function getAllDirectors(movies) {
  const directorsArr = movies.map(function (movie) {
    return movie.director;
  });
  console.log(getAllDirectors);
  return directorsArr;
}

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaSteveSpielbergArr = movies.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  console.log(dramaSteveSpielbergArr);
  return dramaSteveSpielbergArr.length;
}

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const totalRates = movies.reduce(function (acc, movie) {
    if (movie.rate) {
      return acc + movie.rate;
    } else {
      return acc;
    }
  }, 0);
  const avr = Number((totalRates / movies.length).toFixed(2));
  return avr;
}

ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  //get the list of movies that are dramas
  const dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  //get the average of the drama movie rates
  const dramaRate = ratesAverage(dramaMovies);
  return dramaRate;
}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const sortedByYear = [...movies].sort(function (movie1, movie2) {
    return movie1.year - movie2.year;
    // if (movie1.year < movie2.year) {
    //   return -1;
    // }
    // if (movie1.year > movie2.year) {
    //   return 1;
    // }
    // return 0;
  });
  return sortedByYear;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
