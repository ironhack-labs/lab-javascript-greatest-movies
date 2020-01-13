/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesByYear = movies.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesByYear;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  /* const spielbergMovies = movies.filter(function(value) {
    return value.director === "Steven Spielberg";
  });
  const spielbergDramaMovies = spielbergMovies.filter(function(value) {
    return value.genre.includes("Drama");
  });*/
  /*const spielbergDramaMovies = movies
    .filter(function(value) {
      return value.director === "Steven Spielberg";
    })
    .filter(function(value) {
      return value.genre.includes("Drama");
    });
  return spielbergDramaMovies.length;*/
  const filtered = movies.filter(function(value) {
    if (
      value.director === "Steven Spielberg" &&
      value.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return filtered.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabeticallyOrdered = movies.slice().sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  return alphabeticallyOrdered.slice(0, 20).map(function(value) {
    return value.title;
  });
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const averageRate = movies.reduce(function(avg, movie) {
    if (!movie.rate) {
      return avg;
    }
    return avg + movie.rate / movies.length;
  }, 0);
  return Math.round(averageRate * 100) / 100;
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function(value) {
    return value.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const newMovies = movies.map(function(value) {
    let moviesDuration = value.duration.split(" ");
    let mins;
    if (moviesDuration.length === 1) {
      if (moviesDuration[0].indexOf("h") === -1) {
        mins = parseInt(moviesDuration[0]);
      } else {
        mins = parseInt(moviesDuration[0]) * 60;
      }
    } else {
      mins = parseInt(moviesDuration[0]) * 60 + parseInt(moviesDuration[1]);
    }
    const valueMins = { ...value };
    valueMins.duration = mins;
    return valueMins;
  });
  return newMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  if (movies.length === 1) {
    return `The best year was 2007 with an average rate of ${movies[0].rate}`;
  }
  //const moviesOrdered = orderByYear(movies);
  let maxAvg = 0;
  let bestYear;
  movies.forEach(function(value) {
    let year = value.year;
    let avgPerYear = 0;
    let previousYear = 0;
    if (year !== previousYear) {
      const numOfMovies = movies.filter(function(value) {
        return value.year === year;
      });

      avgPerYear = ratesAverage(numOfMovies);

      if (avgPerYear > maxAvg) {
        maxAvg = avgPerYear;
        bestYear = year;
      }
      if (avgPerYear === maxAvg) {
        bestYear = year;
      }
    }
    previousYear = year;
  });
  return `The best year was ${bestYear} with an average rate of ${maxAvg}`;
}
