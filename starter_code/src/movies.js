/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  var modifiedTimeArr = movies.slice();
  modifiedTimeArr.map(function(movie) {
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
  });
  return modifiedTimeArr;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var totalRatings = movies.reduce(function(acc, cur) {
    return acc + parseFloat(cur.rate);
  }, 0);
  return parseFloat((totalRatings / movies.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaMovies = [];
  movies.forEach(function(movie) {
    var drama = movie.genre.find(function(g) {
      if (g === "Drama") return true;
    });
    if (drama !== undefined) {
      dramaMovies.push(movie);
    }
  });

  if (dramaMovies.length === 0) return undefined;

  ratesAverage(dramaMovies);
  return parseFloat(ratesAverage(dramaMovies));
}

var ratingsDramaMovies = dramaMoviesRate(movies);
console.log(ratingsDramaMovies);

// Order by time duration, in growing order
function orderByDuration(movies) {
  var orderedNumbers = movies.slice();
  orderedNumbers.sort(function(a, b) {
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

// Order by title and print the first 20 titles

// Best yearly rate average
