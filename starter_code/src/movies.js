/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {
  var total = moviesArray.reduce(function(sum, movie){
    return sum + parseInt(movie.rate);
  }, 0);

  return parseFloat((total/moviesArray.length).toFixed(2));
}

console.log("Average rate: " + ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  // get drama movies
  var dramaMovies = moviesArray.filter(function(movie) {
    return movie.genre.includes("Drama");
  });

  // if there is not drama movies, return undefined
  if( dramaMovies.length == 0 ) {
    return;
  }

  var total = dramaMovies.reduce(function(sum, movie) {
    var rate = 0;
    if(movie.rate != "") {
      rate = parseInt(movie.rate);
    }
    return sum + rate;
  }, 0);

  return parseFloat((total/dramaMovies.length).toFixed(2));
}

console.log("Drama movies average rate: " + dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  var durationOrder = moviesArray.sort(function(a, b) {
    return parseInt(a.duration) - parseInt(b.duration);
  });

  /*var alphabeticOrder = durationOrder.sort(function(a, b) {
    return a.title < b.title;
  })*/
  return durationOrder;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray) {
  if( moviesArray == "" ) {
    return;
  }

  var dramaSpielberg = moviesArray.filter(function(movie) {
    return movie.genre.includes("Drama") && movie.director == "Steven Spielberg";
  });

  if(dramaSpielberg.length == 0) {
    return "Steven Spielberg directed 0 drama movies!";
  }

  return "Steven Spielberg directed " + dramaSpielberg.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  var movies = [];

  // get 20 movies
  if( moviesArray.length < 20 ) {
    movies = moviesArray.slice(0, moviesArray.length);
  } else {
    movies = moviesArray.slice(0, 20);
  }

  // order movies
  var ordered = movies.sort(function(a, b) {
    if(a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }

    if(a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }

    return 0;
  });

  // get only title
  var titles = ordered.map(function(e){
    return e.title;
  })

  return titles;

}

// Best yearly rate average
