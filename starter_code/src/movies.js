/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf("h") !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf("min") !== -1) {
      minutes = parseInt(
        elem.duration.substring(
          elem.duration.length - 5,
          elem.duration.length - 3
        ),
        10
      );
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);
console.log(movies);

// Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  var totalRates = moviesArray.reduce(function(accumulator, current) {
    return accumulator + current.rate;
  }, 0);

  var average = totalRates / moviesArray.length;

  average = Math.round(average * 100) / 100;

  return average;
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  var dramaMovies = moviesArray.filter(function(movie) {
    return movie.genre.indexOf("Drama") > -1;
  });

  if (dramaMovies.length == 0) {
    return undefined;
  } else {
    var result = ratesAverage(dramaMovies);
    return Math.round(result * 100) / 100;
  }
}

// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  var moviesArrInMinString = turnHoursToMinutes(moviesArray);
  var moviesArrInMinInt = moviesArrInMinString.map(function(movie) {
    return { duration: parseInt(movie.duration()) };
  });

  moviesArrInMinInt.sort(function(a, b) {
    return a.duration - b.duration;
  });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
  var dramaMovies = moviesArray.filter(function(movie) {
    return movie.genre.indexOf("Drama") > -1;
  });
  var filteredMovies = dramaMovies.filter(function(movie) {
    return movie.director === "Steven Spielberg";
  });

  if (moviesArray.length == 0) {
    return undefined;
  } else if (filteredMovies.length == 0) {
    return "Steven Spielberg directed 0 drama movies!";
  } else {
    return (
      "Steven Spielberg directed " + filteredMovies.length + " drama movies!"
    );
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    var titleArr = moviesArray.map(function(movie){
        return movie.title });
    var sortedArr = titleArr.sort();
    if (sortedArr.length<21){
        return sortedArr;
    }
    else {
        sortedArr.splice(20,sortedArr.length-20);
    return sortedArr;
    };
}



// Best yearly rate average
