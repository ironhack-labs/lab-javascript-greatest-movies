/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  var newMovieDurationArray = arr.map(function(movie) {
    var newMovie = Object.assign({}, movie);
    var durationArray = newMovie.duration.split(" ");
    if (durationArray.length === 2) {
      var hours = durationArray[0].replace("h", "");
      hours = parseInt(hours) * 60;
      var minutes = durationArray[1].replace("min", "");
      minutes = parseInt(minutes);
      newMovie.duration = hours + minutes;
    } else if (durationArray[0].includes("h")) {
      var hours = durationArray[0].replace("h", "");
      hours = parseInt(hours) * 60;
      newMovie.duration = hours;
    } else {
      var minutes = durationArray[0].replace("min", "");
      minutes = parseInt(minutes);
      newMovie.duration = minutes;
    }
    return newMovie;
  });
  return newMovieDurationArray;
}

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var allRates = arr.reduce(function(acc, elem) {
    return (acc += Number(elem.rate));
  }, 0);
  return parseFloat((allRates / arr.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var dramaMovies = arr.filter(function(movie) {
    return movie.genre.indexOf("Drama") !== -1; //checking if a specific string exists within another string
  });

  if (dramaMovies.length !== 0) {
    return ratesAverage(dramaMovies);
  } else {
    return undefined;
  }
}

// Order by time duration, in growing order
function orderByDuration(arr) {
  return arr.sort(function(a, b) {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}
// How many movies id STEVEN SPIELBERG
function howManyMovies(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  var spielbergMovies = arr.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") !== -1
    );
  });

  return (
    "Steven Spielberg directed " + spielbergMovies.length + " drama movies!"
  );
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.sort(function(movie1, movie2) {
      return movie1.title.localeCompare(movie2.title);
  })
  .slice(0, 20)
  .map(function(movie) {
      return movie.title;
  });
}

//My way didn't work, why?

/*function orderAlphabetically(arr) {
  arr.title
    .sort
    .slice(0, 20)
    .map(function(movie) {
      return movie.title;
    });
}
*/

// Best yearly rate average
// Ironhack Solution...I got stuck :(

function bestYearAvg(movies) {
  if (!movies || movies.length === 0) {
      return undefined;
  }
  
  var yearRates = movies.reduce(function(rates, movie) {
      if (!rates[movie.year]) {
          rates[movie.year] = {
              movies: 0,
              rate: 0,
              avg: 0
          }
      }

      rates[movie.year].movies++;
      rates[movie.year].rate += Number(movie.rate);
      rates[movie.year].avg = rates[movie.year].rate / rates[movie.year].movies

      return rates;
  }, {});

  var sortedYears = Object.keys(yearRates).sort(function(year1, year2) {
      return yearRates[year2].avg - yearRates[year1].avg;
  });

  return 'The best year was ' + sortedYears[0] + ' with an average rate of ' + yearRates[sortedYears[0]].avg;

}