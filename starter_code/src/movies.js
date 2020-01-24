/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let moviesByYear = [...array].sort(function(moviesA, moviesB) {
    if (moviesA.year > moviesB.year) {
      return 1;
    } else if (moviesA.year < moviesB.year) {
      return -1;
    } else {
      if (moviesA.title > moviesB.title) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return moviesByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let spielbergDramaMovies = array.filter(function(value) {
    return value.director === 'Steven Spielberg' && value.genre.includes('Drama');
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let moviesTitle = array.map(function(value) {
    return value.title;
  });
  let firstTwenty = moviesTitle.sort().slice(0, 20);
  return firstTwenty;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let moviesAverage = array.reduce(function(accumulator, value) {
    if (value.rate === undefined) {
      return accumulator;
    } else {
      return accumulator + value.rate / array.length;
    }
  }, 0);
  return Math.round(moviesAverage * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaMovies = array.filter(function(value) {
    return value.genre.includes('Drama');
  });
  let dramaMoviesAverage = ratesAverage(dramaMovies);
  return dramaMoviesAverage;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  let newArray = array.map(function(movie) {
    let duration = 0;
    let durationString = movie.duration;
    for (let value of durationString.split(' ')) {
      let number = parseInt(value);
      if (value.includes('h')) {
        duration += number * 60;
      }
      if (value.includes('min')) {
        duration += number;
      }
    }
    return { ...movie, duration };
  });
  return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {}
