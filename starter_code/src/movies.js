/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  return (
    Math.round(
      (array.reduce((count, eachMovie) => {
        return count + Number(eachMovie.rate);
      }, 0) /
        array.length) *
        100,
    ) / 100
  );
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMovies(array) {
  let list = array.filter(movie => {
    let validResult = false;
    movie.genre.forEach(gen => {
      if (gen === 'Drama') {
        validResult = true;
      }
    });
    if (validResult === true) {
      return movie;
    }
  });
  return list;
}
function dramaMoviesRate(array) {
  let list = dramaMovies(array);
  return isNaN(list) === true ? ratesAverage(list) : 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(array) {
  let sortedList = [];
  sortedList = array.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return sortedList;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  let dramas = dramaMovies(array);
  let dramasBySpiel = dramas.filter(movie => {
    return (movie.director === 'Steven Spielberg') === true ? movie : 0;
  });
  return dramasBySpiel.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  return array
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(movie => movie.title)
    .filter((movie, count) => {
      return count < 20 === true ? movie : 0;
    });
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let convertedMovies = {};
  convertedMovies = array.map(movie => {
    let convertedTime = movie,
      h = 0,
      m = 0,
      divider = convertedTime.duration.indexOf('h');
    if (convertedTime.duration.includes('h') === true) {
      h = 60 * convertedTime.duration[divider - 1];
    }
    if (convertedTime.duration.includes('min') === true) {
      m = Number(convertedTime.duration.slice(divider + 1).replace('min', ''));
      //   console.log(m);
    }
    convertedTime.duration = h + m;
    return convertedTime;
  });
  console.log(convertedMovies);
  return convertedMovies;
}

// The previous function has gotten a lot bigger as I've been tweaking to try and get it to pass Jasmine

let testResult = turnHoursToMinutes(movies);
// console.log(testResult);
// BONUS Iteration: Best yearly rate average - Best yearly rate average
