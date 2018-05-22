/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function getTime(timeString) {
  var hours = timeString.match(/(\d+)(?=h)/g),
      minutes = timeString.match(/(\d+)(?=min)/g);

  hours ? hours = parseInt(hours[0]) : hours = 0;
  minutes ? minutes = parseInt(minutes[0]) : minutes = 0;
  return [hours, minutes];
}

function convertToMinutes(timeArray) {
  var totalTime = (timeArray[0] * 60) + timeArray[1];
  return totalTime;
}

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie) {
      movie = { ...movie, duration: convertToMinutes(getTime(movie.duration)) };
      return movie;
  });
}

// Get the average of all rates with 2 decimals

function sumRates(moviesArray) {
  return moviesArray.reduce(function(acc, movie) {
    if (movie.rate) {
      acc += parseFloat(movie.rate);
    } else { return acc };
    return acc;
  }, 0);
}

function ratesAverage(moviesArray) {
  return Math.round(((sumRates(moviesArray) / moviesArray.length) * 1e2)) / 1e2;
}

// Get the average of Drama Movies

function searchGenre(genreArray, genre) {
  if (genreArray.indexOf(genre) != -1) { return true; }
}

// Creates array with all films that match the key/value pair passed as arguments.
function selectByValue (moviesArray, key, value) {
  if (moviesArray.length === 0) { return [] }
  if (key != "genre") {
    return moviesArray.filter(function(movie) {
      return movie[key] === value;
    });
  } else {
      var filmsByGenre = moviesArray.filter(function(movie) {
        return searchGenre(movie.genre, value);
      });

      if (filmsByGenre.length === 0) { return; }
        else { return filmsByGenre; }
    }
}

function dramaMoviesRate(moviesArray) {
  var films = selectByValue(moviesArray, "genre", "Drama");
  if (films) { return ratesAverage(films); }
  else { return; }
}

// Order by time duration, in growing order

function compareTitle(a, b) {
  return a.localeCompare(b);
}

function compareMinutes(a, b) {
  if (a.duration === b.duration) {
    return compareTitle(a.title, b.title);
  } else {
    return a.duration - b.duration;
  }
}

function orderByDuration(minuteArray) {
  return minuteArray.sort(compareMinutes);
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) { return; }
  // filmsToCount = All the films with 'Steven Spielberg' as director && 'Drama' as genre.
  var filmsToCount = selectByValue(selectByValue(moviesArray, "director", "Steven Spielberg"), "genre", "Drama");
  console.log(filmsToCount);
  if ((filmsToCount) || (filmsToCount.length === 0)) { return `Steven Spielberg directed ${ filmsToCount.length.toString() } drama movies!`; }
  else { return; }
}

// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  titlesArray = moviesArray.map(function(movie) { return movie.title });
  return titlesArray.sort(compareTitle).slice(0, 20);
}

// Best yearly rate average

// Returns array from unique values from array passed as argument.
function getUniques(arrayToFilter) {
  return arrayToFilter.filter(function(element, index) {
    return arrayToFilter.indexOf(element) === index;
  });
}

function bestYearAvg(moviesArray) {
  var highestAvg = 0,
      lowestYear = 0,
      // yearArray = unique elements of the sorted array of years.
      yearArray = getUniques(moviesArray.map(function(movie) { return movie.year }).sort(function(a, b) { return a - b }));

  if (moviesArray.length === 0) { return; }
  yearArray.forEach(function(yearToAvg) {
    var currentAvg = ratesAverage(selectByValue(moviesArray, "year", yearToAvg));
    if (currentAvg > highestAvg) {
      highestAvg = currentAvg;
      lowestYear = yearToAvg;
    };
  });
  return `The best year was ${ lowestYear } with an average rate of ${ highestAvg }`;
}
