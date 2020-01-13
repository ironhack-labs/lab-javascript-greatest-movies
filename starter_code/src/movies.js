/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

/*const orderByYear = movies.sort(function(a, b) {
  if (a.year === b.year) {
    return a.title.localeCompare(b.title);
  }
  return a.year - b.year;
});*/
function orderByYear(allMovies) {
  const orderByYear = allMovies.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return orderByYear;
}

console.log(orderByYear(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movie) {
  const howManyMovies = movie.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
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
function convertStrToMinutes(str) {
  // input str can be in these formats:
  // "2h 22min" | "2h" | "45min"
  const splitted = str.split(" ");

  let minConversion;

  if (splitted.length === 2) {
    // "2h 22min"
    let hours = parseInt(splitted[0]);
    let minutes = parseInt(splitted[1]);
    minConversion = hours * 60 + minutes;
  } else if (splitted[0].indexOf("h") !== -1) {
    // "2h"
    let hours = parseInt(splitted[0]);
    minConversion = hours * 60;
  } else if (splitted[0].indexOf("min") !== -1) {
    // "45min"
    let minutes = parseInt(splitted[0]);
    minConversion = minutes;
  }

  return minConversion;
}

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    const durationInMinutes = convertStrToMinutes(movie.duration);

    // return Object.assign({}, movie, { duration: durationInMinutes });

    // return { ...movie, duration: durationInMinutes };

    const newObj = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      genre: movie.genre,
      rate: movie.rate,
      duration: durationInMinutes // ✅
    };

    return newObj;

    // movie.duration = durationInMinutes; // ❌
    // return movie;
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// 1- group the movies by year
// 2- for each year, calculate the avg rate
// 3- sort the years by their avg rate

/*function bestYearAvg(movies) {
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
}*/

function bestYearAvg(movies) {
  // 1- group the movies by year
  // 2- for each year, calculate the avg rate
  // 3- sort the years by their avg rate
  //

  if (movies.length === 0) {
    return null;
  }

  const movieYears = movies.map(function(movie) {
    return movie.year;
  });

  const uniqueMovieYears = movieYears.filter(function(year, index) {
    if (movieYears.indexOf(year) === index) {
      // this condition will only be true ONCE for every year in the array
      return true;
    }
  });

  uniqueMovieYears.sort(function(yearA, yearB) {
    const moviesA = getMoviesForYear(movies, yearA);
    const moviesB = getMoviesForYear(movies, yearB);

    const avgA = ratesAverage(moviesA);
    const avgB = ratesAverage(moviesB);

    if (avgA === avgB) {
      return yearA - yearB;
    }
    return avgB - avgA;
  });

  function getMoviesForYear(movies, year) {
    return movies.filter(function(movie) {
      return movie.year === year;
    });
  }

  const topYear = uniqueMovieYears[0];
  const topYearMovies = getMoviesForYear(movies, topYear);
  const topRate = ratesAverage(topYearMovies);

  return "The best year was " + topYear + " with an average rate of " + topRate;
}
