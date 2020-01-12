/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArr = movies.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(allMovies) {
  if (allMovies === []) {
    return 0;
  }
  const newArr = allMovies.filter(function(movie) {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      return true;
    }
  });
  return newArr.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie) {
  const newArr = movie.slice().sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  const alphaArr = newArr.map(function(movie) {
    return movie.title;
  });

  return alphaArr.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(allMovies) {
  if (allMovies == false) {
    return 0;
  }
  const totalRates = allMovies.reduce(function(sum, singleRate) {
    return (sum += singleRate.rate);
  }, 0);
  const avgRate = totalRates / allMovies.length;
  return Math.round(avgRate * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(allMovies) {
  if (allMovies == false) {
    return 0;
  }
  const newArr = allMovies.filter(function(movie) {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  return ratesAverage(newArr);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function correctTimes(str) {
  let splitStr = str.split('');
  let hours = parseInt(splitStr) * 60;
  let mins = splitStr.splice(3).join('');
  if (mins == false) {
    mins = 0;
  }
  if (splitStr.includes('h') == false) {
    return parseInt(splitStr.join(''));
  }
  return parseInt(mins) + hours;
}

function turnHoursToMinutes(arr) {
  let newArr = arr;
  const newArrMap = newArr.slice().map(function(movie) {
    movie.duration = correctTimes(movie.duration);
    return movie;
  });
  return newArrMap;
}

console.log(turnHoursToMinutes(movies));
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {}
