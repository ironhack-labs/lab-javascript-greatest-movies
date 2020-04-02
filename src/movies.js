/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const newArray = [...movies];
  newArray.sort(function(movA, movB) {
    if (movA.year < movB.year) {
      return -1;
    }
    if (movA.year > movB.year) {
      return 1;
    }
    if (movA.year === movB.year) {
      if (movA.title < movB.title) {
        return -1;
      }
      if (movA.title > movB.title) {
        return 1;
      }
      if (movA.title === movB.title) {
        return 0;
      }
      return 0;
    }
  });
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  const dramaMovies = movies.filter(function(movie) {
    if (
      movie.genre.includes("Drama") &&
      movie.director === "Steven Spielberg"
    ) {
      return true;
    }
  });
  return dramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const newArray = [...movies];
  const alfaOrder = newArray
    .sort(function(movA, movB) {
      if (movA.title < movB.title) {
        return -1;
      }
      if (movA.title > movB.title) {
        return 1;
      }
      if (movA.title === movB.title) {
        return 0;
      }
      return 0;
    })
    .map(function(movie) {
      return movie.title;
    });

  return alfaOrder.slice(0, 20);
}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length <= 0) {
    return 0;
  } else {
    const movieRates = movies.map(function(movie) {
      return movie.rate;
    });
    const reduceRate = movieRates.reduce(function(accumulator, currentValue) {
      let updatedAccumulator = accumulator + currentValue;
      return updatedAccumulator;
      // return accumulator + currentValue; // shorter way
    }, 0);
    return parseFloat((reduceRate / movieRates.length).toFixed(2));
  }
}
ratesAverage(movies);

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  if (dramaMovies.length <= 0) {
    return 0;
  } else {
    const movieRates = dramaMovies.map(function(movie) {
      return movie.rate;
    });
    const reduceRate = movieRates.reduce(function(accumulator, currentValue) {
      let updatedAccumulator = accumulator + currentValue;
      return updatedAccumulator;
    }, 0);
    return parseFloat((reduceRate / movieRates.length).toFixed(2));
  }
}
dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
