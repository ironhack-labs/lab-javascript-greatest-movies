/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies => {
  const moviesSorted = [];
  moviesSorted.push(...movies);
  moviesSorted.sort(function(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year == b.year) {
      if (a.title.toUpperCase() <= b.title.toUpperCase()) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  });
  return moviesSorted;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = movies => {
  const dramaBySpielberg = movies.filter(
    movie => movie.director === "Steven Spielberg"
  );
  dramaBySpielberg.forEach((movie, index) => {
    let drama = false;
    for (let i = 0; i < movie.genre.length; i++) {
      if (movie.genre[i] === "Drama") {
        drama = true;
      }
    }
    if (drama === false) {
      dramaBySpielberg.splice(index, index + 1);
    }
  });
  return dramaBySpielberg.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  const listOf20 = movies.slice(0, 20);
  listOf20.sort((a, b) => {
    if (a.title.toUpperCase() <= b.title.toUpperCase()) {
      return -1;
    } else {
      return 1;
    }
  });
  const titlesOf20 = listOf20.map(movie => movie.title);
  return titlesOf20;
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = movies => {
  if (movies.length === 0) {
    return 0;
  }
  let noNote = 0;
  let averageNote = movies.reduce((total, current) => {
    if (!current.rate) {
      noNote++;
      return total;
    }
    return total + current.rate;
  }, 0);
  averageNote = averageNote / (movies.length - noNote);
  return parseFloat(averageNote.toFixed(2));
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {
  const dramaMovies = [];
  dramaMovies.push(...movies);
  dramaMovies.forEach((movie, index) => {
    let drama = false;
    for (let i = 0; i < movie.genre.length; i++) {
      if (movie.genre[i] === "Drama") {
        drama = true;
      }
    }
    if (drama === false) {
      dramaMovies.splice(index, index + 1);
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  return ratesAverage(dramaMovies);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies => {
  const moviesInMinutes = [];
  moviesInMinutes.push(...movies);
  moviesInMinutes.forEach(movie => {
    let hour = parseInt(movie.duration.slice(0, movie.duration.indexOf("h")));
    let minutes =
      hour * 60 +
      parseInt(
        movie.duration.slice(
          movie.duration.indexOf("h") + 1,
          movie.duration.indexOf("min")
        )
      );
    movie.duration = parseInt(minutes);
  });
  return moviesInMinutes;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
