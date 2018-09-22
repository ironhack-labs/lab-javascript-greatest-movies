/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (array) {
  var findMinutes = array.map(function (movie) {
    var copyMovie = Object.assign({}, movie);
    var horasEnMinutos = 0;
    var minutos = 0;
    if (copyMovie.duration.indexOf('h') > -1) {
      horasEnMinutos += copyMovie.duration[0]*60;
    }
    if (copyMovie.duration.indexOf('min') > -1) {
      if (copyMovie.duration.indexOf('h') > -1) {
        minutos += copyMovie.duration.substring(3, (copyMovie.duration.length-3));
      } else {
        minutos += copyMovie.duration.substring(0, (copyMovie.duration.length-3));
      }
    }
      var totalMinutes = Number(horasEnMinutos) + Number(minutos);
      copyMovie.duration = totalMinutes;
      return copyMovie;
  });
  return findMinutes;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  var sum = array.reduce(function(acc, currentValue) {
    return (Math.round((acc + currentValue.rate)*100)/100);
  }, 0);
  return sum / array.length;
}
console.log("The average rate is: " + ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var dramaMovies = array.filter(function(movie) {
    return movie.genre.find(function(singleGenre) {
      return singleGenre === 'Drama';
    });
  });
  if (!dramaMovies.length) {
    return undefined;
  }
  return (Math.round((ratesAverage(dramaMovies))*100)/100);
}
console.log('The average rate of "Drama" movies is: ' + dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration(array) {
  var orderedArray = array.sort(function (a, b) {
    if (a.duration === b.duration) {
      if (a.title > b.title) {
        return 1;
      }
    }
    return a.duration - b.duration;
  });
  return orderedArray;
}
// How many movies did STEVEN SPIELBERG

// function howManyMovies (array) {
  function howManyMovies(array) {
    if (array.length === 0) {
      return undefined;
    }
    var spielbergDramaMovies = array.filter(function(movies) {
      return movies.director === "Steven Spielberg" && movies.genre.indexOf("Drama") !== -1;
    });
    return (
      "Steven Spielberg directed " + spielbergDramaMovies.length + " drama movies!"
    );
  }
  console.log(howManyMovies(movies));

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  /* array.sort(function(a, b) {
    return a.title - b.title;
  }); */
  var movieTitles = array.map(function (titles) {
    return titles.title;
  }).sort();
  var first20 = [];
  var limit = 20;
  if (movieTitles.length < 20) {
    limit = movieTitles.length;
  }
  for (var i = 0; i < limit; i++) {
    first20.push(movieTitles[i]);
  }
  return first20;
}
 console.log(orderAlphabetically(movies));

// Best yearly rate average
