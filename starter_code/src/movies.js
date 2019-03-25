/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var ratesAverage = movies.reduce(function(accumulator, film) {
    return accumulator + Number(film.rate);
  }, 0);
  return (ratesAverage / movies.length).toFixed(2);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var trackScore = 0;
  var compterElementDrama = 0;
  movies.forEach(function(element) {
    if (element.genre.includes("Drama") === true) {
      trackScore = trackScore + Number(element.rate);
      compterElementDrama = compterElementDrama + 1;
    }
  });
  return trackScore / compterElementDrama;
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }

  let spielbergMovies = [];
  movies.forEach(function(movie) {
    if (
      movie.genre.includes("Drama") === true &&
      movie.director.includes("Steven Spielberg") === true
    ) {
      return spielbergMovies.push(movie);
    } else {
      return "Steven Spielberg directed 0 drama movies!";
    }
  });
  return (
    "Steven Spielberg directed " + spielbergMovies.length + " drama movies!"
  );
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var ordered = movies.sort(function(a, b) {
    console.log(a.title);
    return a.title.localeCompare(b.title);
  });

  var titles = ordered
    .map(function(movie) {
      return movie.title;
    })
    .slice(0, 20);

  return titles;
}

// Best yearly rate average
function bestYearAvg(movies) {
  var yearlyRates = [];

    var newArray = movies.map(function(movie) {
        if ()
    return [movie.year, movie.rate];
  });

  newArray.forEach(function(yearlyRates) {

  });
}
var yearAverage = movies.reduce(function(accumulator, film) {
    return accumulator + Number(film.rate);
  }, 0);
  return (yearAverage / movies.length).toFixed(2);

  //unfinished