/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    return { ...movie, duration: convertHoursIntoMinutes(movie.duration) };
  });
}

function convertHoursIntoMinutes(duration) {
  var totalHours = 0;
  var minutes = 0;
  var durations = duration.split(" ");
  durations.forEach(val => {
    if (val.includes("min")) minutes = getMin(val);
    else totalHours = getHours(val);
  });
  return Number(totalHours) * 60 + Number(minutes);
}

function getMin(duration) {
  return duration.substring(0, duration.length - 3);
}

function getHours(duration) {
  return duration.substring(0, duration.length - 1);
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var count = movies.length;
  var totalRates = movies
    .filter(function(movie) {
      return movie.rate !== "";
    })
    .reduce((total, current) => {
      return total + parseFloat(current.rate);
    }, 0);
  return parseFloat((totalRates / count).toFixed(2));
}
// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  return dramaMovies.length === 0 ? undefined : ratesAverage(dramaMovies);
}
// Order by time duration, in growing order

function orderByDuration(movies) {
  return movies.sort((movie1, movie2) => {
    if (
      movie1.duration < movie2.duration ||
      (movie1.duration === movie2.duration && movie1.title < movie2.title)
    ) {
      return -1;
    }
    return 1;
  });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length === 0) return undefined;
  var dramaMoviesOfSpielberg = movies.filter(dramaMovie => {
    return dramaMovie.director.includes("Steven Spielberg") && dramaMovie.genre.includes("Drama");
  });
  return "Steven Spielberg directed " + dramaMoviesOfSpielberg.length + " drama movies!";
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies
    .map(movie => {
      return movie.title;
    })
    .sort((title1, title2) => {
      return title1 > title2 ? 1 : -1;
    })
    .splice(0, 20);
}
// Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) return undefined;
  var map1 = new Map();
  for (var movie of movies) {
    if (!map1.has(movie.year)) {
      map1.set(movie.year, []);
    }
    map1.get(movie.year).push(movie);
  }
  var list = [];
  map1.forEach((value, key) => {
    list.push([key, ratesAverage(value)]);
  });
  var bestYearItem = list.sort((item1, item2) => {
    if (item2[1] > item1[1] || (item2[1] === item1[1] && item2[0] < item1[0])) {
      return 1;
    }
    return -1;
  })[0];
  return "The best year was " + bestYearItem[0] + " with an average rate of " + bestYearItem[1];
}
