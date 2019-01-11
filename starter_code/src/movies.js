/* eslint no-restricted-globals: 'off' */
//// Turn duration of the movies from hours to minutes

var turnHoursToMinutes = movies.map(function(oneMovie) {
  var hours = 0;
  var minutes = 0;

  var hours = oneMovie.slice(0, oneMovie.duration.indexOf("h"));

  var minDuration = hours + minutes;

  return {
    title: oneMovie.title,
    year: oneMovie.year,
    director: oneMovie.director,
    duration: minDuration,
    genre: oneMovie.genre,
    rate: oneMovie.rate
  };
});

//// Get the average of all rates with 2 decimals
// Create a ratesAverage method that receive an array as a parameter and solve the challenge.
function ratesAverage(movies) {
  var total = movies.reduce(function(sum, oneMovie) {
    return sum + Number(oneMovie.rate);
  }, 0);

  return Number((total / movies.length).toFixed(2));

  // Math.round((total / movies.length) * 100) / 100;
}

//// Get the average of Drama Movies
// Create a dramaMoviesRate that receives an array as a parameter to get the average rate
// of all drama movies.
// 1. create new array of dramas

var dramas = movies.filter(function(oneMovie) {
  return oneMovie.genre === "Drama";
});

// 2. create function of rates average

function dramaMoviesRate(dramas) {
  var total = dramas.reduce(function(sum, oneDrama) {
    return sum + Number(oneDrama.rate);
  }, 0);

  return Number((total / dramas.length).toFixed(2));
}

//// Order by time duration, in growing order

//// How many movies did STEVEN SPIELBERG
// Create a howManyMovies method that receives an array as a parameter and filter the array
// so we can have only the drama movies where Steven Spielberg is the director.
// 1. create new array of Spielberg movies
var spielberg = movies.filter(function(oneMovie) {
  return (oneMovie.director = "Steven Spielberg");
});

// 2. create function to filter dramas
function howManyMovies(spielberg) {
  var spielbergDramas = spielberg.filter(function(oneMovie) {
    return Number((oneMovie.genre = "Drama"));
  });

  return "Steven Spielberg directed " + spielbergDramas + " dramas";
}

//// Order by title and print the first 20 titles

//// Best yearly rate average
