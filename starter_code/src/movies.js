/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var rateNumber = movies.map(function(movies) {
    return Number.parseFloat(movies.rate);
  });
  var rateTotal = rateNumber.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  var average = (rateTotal / movies.length).toFixed(2);
  return Number(average);
}
// Get the average of Drama Movies

function dramaMoviesRate(dramaMovies) {
  if (dramaMovies.length === 0) return 0;
  const filteredMovies = dramaMovies.filter(function(movie) {
    if (movie.rate === "") movie.rate = 0;
    return movie.genre.includes("Drama");
  });
  if (!filteredMovies.length) return undefined;
  const avg = ratesAverage(filteredMovies);
  return avg;
  // return avg;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.duration.sort();
}

//  console.log(movies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(sS) {
  if (!sS) return undefined;

  const drama = sS.filter(function(movie) {
    if (movie.genre === "Drama");
    {
      return movie.genre.includes("Drama");
    }
  });

  const filteredDrama = drama.filter(function(film) {
    if (!drama) {
      return "Steven Spielbierg directed 0 drama movies!";
    }
    return film.director.includes("Steven Spielberg");
  });
  if (filteredDrama) {
    return `Steven Spielberg directed ${filteredDrama.length} drama movies!`;
  }
}
//Order by title and print the first 20 titles
function orderAlphabetically(movie) {
  const alpha = movies.map(function(movie) {
    return movie.title;
  });
// Best yearly rate average
