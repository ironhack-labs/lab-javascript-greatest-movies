/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

/*const orderByYear = movies.sort(function(a, b) {
  if (a.year === b.year) {
    return a.title.localeCompare(b.title);
  }
  return a.year - b.year;
});*/
function orderByYear(allMovies) {
  const orderByYear = allMovies.sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  if (allMovies.length < 1) {
    return [];
  }
  return orderByYear;
}

console.log(orderByYear(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movie) {
  const howManyMovies = movie
    .filter(function(movie) {
      if (
        movie.director === "Steven Spielberg" &&
        movie.genre.includes("Drama")
      ) {
        return true;
      }
    })
    .map(function(movie) {
      return movie.title;
    });
  return howManyMovies.length;
}

console.log(howManyMovies(movies));

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(allMovies) {
  const orderAlphabetically = allMovies
    .slice()
    .sort(function(a, b) {
      return a.title.localeCompare(b.title);
    })
    .map(function(movie) {
      return movie.title;
    });

  if (allMovies.length < 1) {
    return [];
  }
  if (orderAlphabetically.length > 20) {
    return orderAlphabetically.slice(0, 20);
  }
  return orderAlphabetically;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(allMovies) {
  if (allMovies.length === 0) {
    return 0;
  }
  const ratesAverage =
    allMovies.reduce(function(a, b) {
      if (b.rate) {
        return b.rate + a;
      } else {
        return a + 0;
      }
    }, 0) / allMovies.length;
  return Math.round(ratesAverage * 100) / 100;
}
console.log(ratesAverage(movies));

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movie) {
  const dramaMovies = movie.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });
  return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  // I order the movies by years.
  const moviesOrdered = orderByYear(movies);
  let maxAverage = 0;
  let bestYear;

  if (movies.length === 0) {
    return null;
  } else {
    moviesOrdered.forEach(movie => {
      let year = movie.year;
      let averagePerYear = 0;
      let yearPreviousMovie = 0;

      if (year > yearPreviousMovie) {
        // I get an array with the movies per year.
        const moviesPerYear = moviesOrdered.filter(
          movie => movie.year === year
        );

        // Calculate the average per year.
        averagePerYear = ratesAverage(moviesPerYear);

        if (averagePerYear > maxAverage) {
          maxAverage = averagePerYear;
          bestYear = year;
        }
      }

      yearPreviousMovie = year;
    });

    return `The best year was ${bestYear} with an average rate of ${maxAverage}`;
  }
}
