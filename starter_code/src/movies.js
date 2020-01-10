/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let sorted = moviesArray.slice().sort(function(movieA, movieB) {
    if (movieA.title && movieB.title && movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    } else {
      return movieA.year - movieB.year;
    }
  });
  return sorted;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {
  let filtered = moviesArray.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") > -1
    ) {
      return true;
    }
  });
  return filtered.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  let titles = moviesArray.slice().map(function(movie) {
    return movie.title;
  });
  titles.sort(function(titleA, titleB) {
    return titleA.localeCompare(titleB);
  });
  return titles.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let sum = moviesArray.reduce(function(accumulator, movie) {
    if (typeof movie.rate !== "number") {
      return accumulator;
    }
    return accumulator + movie.rate;
  }, 0);
  let average = sum / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  let dramas = moviesArray.filter(function(movie) {
    if (movie.genre.indexOf("Drama") > -1) {
      return true;
    }
  });
  return ratesAverage(dramas);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  let converted = moviesArray.map(function(movie) {
    let minutes = 0;
    let timeHM = movie.duration.split(" ");
    if (timeHM.length === 2) {
      let hours = Number(timeHM[0].slice(0, -1));
      minutes = Number(timeHM[1].slice(0, -3));
      minutes += hours * 60;
    } else if (timeHM.length === 1) {
      if (timeHM[0].indexOf("h") > -1) {
        minutes = Number(timeHM[0].slice(0, -1) * 60);
      } else if (timeHM[0].indexOf("min") > -1) {
        minutes = Number(timeHM[0].slice(0, -3));
      }
    }
    let shallowCopyMovie = {
      ...movie
    };
    shallowCopyMovie.duration = minutes;
    return shallowCopyMovie;
  });
  return converted;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  if (moviesArray.length === 1) {
    return (
      "The best year was " +
      moviesArray[0].year +
      " with an average rate of " +
      moviesArray[0].rate
    );
  }
  let sortedByYear = orderByYear(moviesArray);
  let averages = [];
  let year = sortedByYear[0].year;
  let prevIndex = 0;
  sortedByYear.forEach(function(movie, index, array) {
    if (year !== movie.year) {
      averages.push({
        year: year,
        averageRate: ratesAverage(array.slice(prevIndex, index))
      });
      // start new year
      year = movie.year;
      prevIndex = index;
    }
  });
  averages.sort(function(a, b) {
    if (a.averageRate === b.averageRate) {
      return b.year - a.year;
    }
    return a.averageRate - b.averageRate;
  });
  return (
    "The best year was " +
    averages[averages.length - 1].year +
    " with an average rate of " +
    averages[averages.length - 1].averageRate
  );
}
