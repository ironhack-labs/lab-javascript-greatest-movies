/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray) {
  let averageRate = movieArray.reduce(function(accumulator, currentMovie) {
    if (currentMovie.rate === "") {
      return accumulator;
    }
    return (accumulator += parseFloat(currentMovie.rate));
  }, 0);

  return parseFloat((averageRate / movieArray.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray) {
  let dramaArray = movieArray.filter(function(movie) {
    return movie.genre.indexOf("Drama") >= 0;
  });
  if (dramaArray.length === 0) {
    return 0;
  } else return ratesAverage(dramaArray);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArray.sort(function(movie1, movie2) {
    if (parseFloat(movie1.year) < parseFloat(movie2.year)) {
      return -1;
    } else if (parseFloat(movie1.year) > parseFloat(movie2.year)) {
      return 1;
    } else {
      return movie1.title.localeCompare(movie2.title);
    }
  });
  return moviesArray;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movieArray) {
  let spielbergArray = movieArray.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") >= 0
    );
  });
  return spielbergArray.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  movieArray.sort(function(movie1, movie2) {
    return movie1.title.localeCompare(movie2.title);
  });
  let titleArray = movieArray.map(function(movie) {
    return movie.title;
  });

  return titleArray.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieArray) {
  let array = movieArray.map(function(movie) {
    let hours = movie.duration.slice(0, movie.duration.indexOf("h"));
    let minutes = movie.duration.slice(
      movie.duration.indexOf(" ") + 1,
      movie.duration.indexOf("m")
    );
    let duration;

    if (movie.duration.indexOf("m") < 0) {
      duration = parseFloat(hours) * 60;
    } else if (movie.duration.indexOf("h") < 0) {
      duration = parseFloat(minutes);
    } else {
      duration = parseFloat(hours) * 60 + parseFloat(minutes);
    }

    return Object.assign({}, movie, { duration }); // we copy movie in a new object and the proprety duration override the one in {movie}
  });
  return array;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
