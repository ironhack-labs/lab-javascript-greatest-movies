/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const sortedMovies = movies.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  const stevenMovies = movies.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    } else {
      return 0;
    }
  });
  console.log(stevenMovies);
  return stevenMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const sortedMovies = movies
    .slice()
    .sort(function(a, b) {
      return a.title.localeCompare(b.title);
    })

    .map(function(movie) {
      return movie.title;
    });
  return sortedMovies.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const averageRating = movies.reduce(function(accumulator, movie) {
    if (!movie.rate) {
      return 0 + accumulator;
    } else {
      return accumulator + movie.rate;
    }
  }, 0);

  let avg = averageRating / movies.length;
  let rounded = avg.toFixed(2);
  return parseFloat(rounded);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movie) {
  let dramaMovies = movie.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });

  if (!dramaMovies.length) {
    return 0;
  }

  let averageRating = dramaMovies.reduce(function(accumulator, movie) {
    if (!movie.rate) {
      return 0 + accumulator;
    } else {
      return accumulator + movie.rate;
    }
  }, 0);

  return Math.round((averageRating / dramaMovies.length) * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes (movies) {
//   let movieDuration = movies.forEach(movie {
//     movie.
//   });
// }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
