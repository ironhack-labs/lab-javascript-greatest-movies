/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    return Object.assign({}, movie, {
      duration: minutesCalculation(movie)
    });
  });
}

function minutesCalculation(movie) {
  var splitArr = movie.duration.split(" ");
  var minutes = 0;
  if (splitArr.length === 2) {
    minutes += parseInt(splitArr[0].split("h")) * 60;
    minutes += parseInt(splitArr[1].split("min"));
  } else if (splitArr.length === 1) {
    if (splitArr[0][splitArr[0].length - 1] === "h") {
      minutes += parseInt(splitArr[0].split("h")) * 60;
    } else if (splitArr[0][splitArr[0].length - 1] === "n") {
      minutes += parseInt(splitArr[0].split("min"));
    }
  }
  movie.duration = parseInt(minutes);
  return movie.duration;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var moviesWithRate = movies.filter(
    movie => !isNaN(movie.rate) && movie.rate !== ""
  );

  var totalRatings = moviesWithRate.reduce(function(acc, cur) {
    return acc + parseFloat(cur.rate);
  }, 0);

  return parseFloat((totalRatings / moviesWithRate.length).toFixed(2));
}

// Get the average of Drama Movies
function getDramaMovies(movies) {
  var dramaMovies = [];
  movies.forEach(function(movie) {
    var drama = movie.genre.find(function(g) {
      if (g === "Drama") return true;
    });
    if (drama !== undefined) {
      dramaMovies.push(movie);
    }
  });

  return dramaMovies;
}
function dramaMoviesRate(movies) {
  var dramaMovies = getDramaMovies(movies);

  if (dramaMovies.length === 0) return undefined;

  return parseFloat(ratesAverage(dramaMovies));
}

var ratingsDramaMovies = dramaMoviesRate(movies);
console.log(ratingsDramaMovies);

// Order by time duration, in growing order
function orderByDuration(movies) {
  var orderedNumbers = movies.slice();
  return orderedNumbers.sort(function(a, b) {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
  });
}

var modifiedTimeMovies = turnHoursToMinutes(movies);
var moviesOrderedByDuration = orderByDuration(modifiedTimeMovies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length === 0) return undefined;

  var dramaMovies = getDramaMovies(movies);
  var spielBergMovies = dramaMovies.filter(
    movie => movie.director === "Steven Spielberg"
  );
  return (
    "Steven Spielberg directed " + spielBergMovies.length + " drama movies!"
  );
}

spielBergMovies = howManyMovies(movies);
console.log(spielBergMovies);
// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var top20 = [];
  movies.slice(0, 20).map(function(movie) {
    top20.push(movie.title);
  });
  top20.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
  });
  return top20;
}
orderAlphabetically(movies);

// Best yearly rate average

// Best yearly rate average
