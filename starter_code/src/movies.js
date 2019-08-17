/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  let sum = arr.reduce(function(accumulator, value) {
    if (value !== "") {
      accumulator += parseFloat(value.rate);
      return accumulator;
    } else {
      accumulator += 0;
    }
  }, 0);
  return Math.round((sum / arr.length) * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function extractDramas(arr) {
  let dramaMovies = arr.filter(function(movie) {
    let containsDrama = false;
    for (i = 0; i < movie.genre.length; i++) {
      if (movie.genre[i] === "Drama") {
        containsDrama = true;
      }
    }
    if (containsDrama === true) return true;
  });
  return dramaMovies;
}

function dramaMoviesRate(arr) {
  let dramaMovies = extractDramas(arr);
  if (dramaMovies.length !== 0) return ratesAverage(dramaMovies);
  else return 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(arr) {
  let moviesByDuration = arr.sort(function(a, b) {
    if (a.duration === b.duration) return a.title.localeCompare(b.title);
    if (typeof a && typeof b !== "string") {
      return a.duration - b.duration;
    } else {
      return a.duration.localeCompare(b.duration);
    }
  });
  return moviesByDuration;
}
// Note to teachers: the duration data for the movies is given in strings, but the test "Return the new array in ascending order" tests numbers.
// Wouldn't it be better for the test data to be in the same format the given data is in?

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  if (!arr.length) return 0;
  let dramaMovies = extractDramas(arr);
  if (!dramaMovies.length) return 0;
  let spielbergDramas = dramaMovies.filter(function(movie) {
    let directedBySpielberg = false;
    if (movie.director === "Steven Spielberg") {
      directedBySpielberg = true;
    }
    if (directedBySpielberg === true) return true;
  });
  if (!spielbergDramas.length) return 0;
  return spielbergDramas.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let top20 = [];
  let alphabeticalMovies = arr.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  // console.log(alphabeticalMovies)
  let alphabeticalTitles = alphabeticalMovies.map(function(movie) {
    return movie.title;
  });
  // console.log(alphabeticalTitles)
  top20 = alphabeticalTitles.slice(0, 20);
  return top20;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newArr = arr.map(function(movie) {
    const newMovie = {
      ...movie
    };
    return newMovie;
  });
  newArr.map(function(movie) {
    let timeInMin = 0;
    let hoursInMin = 0;
    let minutes = 0;
    let minutesStr;
    if (movie.duration.includes("h") && movie.duration.includes("min")) {
      hoursInMin += parseFloat(movie.duration) * 60;
      minutesStr = movie.duration.substring(
        movie.duration.indexOf(" ") + 1,
        movie.duration.length
      );
    } else if (movie.duration.includes("h")) {
      hoursInMin += parseFloat(movie.duration) * 60;
      minutesStr = 0;
    } else {
      minutesStr = movie.duration;
    }
    minutes += parseFloat(minutesStr);
    timeInMin = timeInMin + hoursInMin + minutes;
    movie.duration = timeInMin;
  });
  return newArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
