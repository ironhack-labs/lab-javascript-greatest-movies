/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
// array = movies

function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
    var minutes = 0;
    var hours = 0;
    var temp = []
    if (movie.duration.indexOf("h") !== -1) {
      temp = movie.duration.split("h")
      hours = Number(temp[0])
    }
    if (movie.duration.indexOf("min") !== -1) {
      if (temp[1] !== undefined) {
        minutes = Number(temp[1].split("min")[0])
      } else
        minutes = Number(movie.duration.split("min")[0])
    }
    return Object.assign({}, movie, {
      duration: hours * 60 + minutes
    });
  });
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var result = movies.reduce(function (acc, value) {
    if (value.rate === '')
      value.rate = 0;
    return acc + parseFloat(value.rate);
  }, 0) / movies.length;
  return Math.round(result * 100) / 100;
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var result = movies.filter(movie => movie.genre.indexOf('Drama') !== -1);
  if (result.length == 0)
    return undefined;
  return ratesAverage(result);
}

// Order by time duration, in growing order

function orderByDuration(movies) {
  //return turnHoursToMinutes(movies).sort((a,b) => a.duration - b.duration)
  return movies.sort(function (a, b) {
    var test = (a.duration - b.duration)
    return test != 0 ? test : a.title > b.title ? 1 : -1;
  });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length == 0)
    return undefined;
  var nrOfMovies = movies.filter(movie => movie.director == "Steven Spielberg" && movie.genre.indexOf('Drama') !== -1).length;
  var answer = 'Steven Spielberg directed ' + nrOfMovies + ' drama movies!';
  return answer;
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var orderedMovies = movies.sort(function (a, b) {
    if (a.title > b.title)
      return 1;
    else
      return -1;
  });
  if (orderedMovies.length > 20)
    orderedMovies = orderedMovies.slice(0, 20)
  orderedMovies = orderedMovies.map((movies) => movies.title)
  return orderedMovies
}

// Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length == 0)
    return undefined
  var years = movies.map((movie) => movie.year)
  var uniqueYears = [];
  uniqueYears = years.filter((year) => uniqueYears.indexOf(year[i]) == -1)
  uniqueYears.sort((a, b) => a - b);
  var movieArray = [];
  for (var i in uniqueYears) {
    movieArray.push(movies.filter((movies) => movies.year === uniqueYears[i]))
  }
  var max = { averageRate: 0};
  for (var y in movieArray) {
    if (max.averageRate < ratesAverage(movieArray[y])) {
      max.year = uniqueYears[y];
      max.averageRate = ratesAverage(movieArray[y]);
    }
  }
  return 'The best year was ' + max.year + ' with an average rate of ' + max.averageRate;
}