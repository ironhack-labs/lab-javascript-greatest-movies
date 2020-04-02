/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let tempArray = [...movies];

  tempArray.sort((movieA, movieB) => {
    if (movieA.year < movieB.year) {
      return -1;
    }
    if (movieA.year > movieB.year) {
      return 1;
    } else {
      if (movieA.title < movieB.title) {
        return -1;
      }
      if (movieA.title > movieB) {
        return 1;
      } else return 0;
    }
  });
  return tempArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  return movies.filter(movie => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes(`Drama`)
    );
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sortedMovies = [...movies];

  sortedMovies.sort((movieA, movieB) => {
    if (movieA.title < movieB.title) {
      return -1;
    }
    if (movieA.title > movieB.title) {
      return 1;
    } else return 0;
  });

  filteredMovies = sortedMovies.filter((movie, i) => i < 20);

  let titlesArray = filteredMovies.map(movie => movie.title);

  return titlesArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let averageRating =
    movies.reduce((accumulator, movie) => {
      if (movie.rate) {
        return accumulator + movie.rate;
      } else return accumulator;
    }, 0) / movies.length;

  return parseFloat(averageRating.toPrecision(3));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(movie => {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });

  if (dramaMovies.length === 0) {
    return 0;
  } else {
    let averageDramaRating =
      dramaMovies.reduce((accumulator, movie) => {
        return accumulator + movie.rate;
      }, 0) / movies.length;
    return parseFloat(averageDramaRating.toPrecision(3));
  }
}
//not sure why the last test is failling. It seems to me that I am only returning ratings of Drama movies?

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
