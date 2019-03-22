/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return [...movies].map(movie => {
    return Object.assign({}, movie, {
      duration: +movie.duration.split(" ").reduce((acum, element) => {
        return element.indexOf("h") < 0
          ? +element.split("min")[0] + acum
          : +element.split("h")[0] * 60 + acum;
      }, 0)
    });
  });
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  return parseFloat(
    (
      movies.reduce((acum, movie) => {
        return acum + movie.rate;
      }, 0) / movies.length
    ).toFixed(2)
  );
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaMovies = [...movies].filter(movie =>
    movie.genre.includes("Drama")
  );
  return dramaMovies.length > 0 ? ratesAverage(dramaMovies) : undefined;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort((prev, cur) => {
    if (prev.duration === cur.duration) {
      if (typeof prev.title !== undefined && typeof cur.title !== undefined) {
        return prev.title.localeCompare(cur.title);
      }
    } else {
      return prev.duration - cur.duration;
    }
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length > 0) {
    var stevenSpielbergMovies = [...movies]
    .filter(
      elements => elements.director === "Steven Spielberg"
    )
    .filter(
        stevenSpielberg => {
            return stevenSpielberg.genre.indexOf("Drama") >= 0
        }
    );

    return `Steven Spielberg directed ${
      stevenSpielbergMovies.length
    } drama movies!`;
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return [...movies].sort((prev, cur) => {
          if (typeof prev.title !== undefined && typeof cur.title !== undefined) {
            return prev.title.localeCompare(cur.title);
          }
      }).map(titleObj => titleObj.title).slice(0, 20);
}

// Best yearly rate average
function bestYearAvg(yearRateArray) {
    if(yearRateArray.length > 0) {
        var ratesByYear = [];
        yearRateArray.map(yearRate => {
            ratesByYear[yearRate.year] = yearRate;
        });
        return ratesByYear;
    }
}
