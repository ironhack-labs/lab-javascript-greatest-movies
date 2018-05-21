/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayMovies) {

  return arrayMovies.map(function (element) {
    var hours = 0,
      minutes = 0,
      movie = [];

    if (element.duration.indexOf('min') < 0) {
      hours = element.duration.slice(0, element.duration.indexOf('h'));
      minutes = 0;
    } else if (element.duration.indexOf('h') < 0) {
      hours = 0;
      minutes = element.duration.slice(0, element.duration.indexOf('min'));
    } else {
      hours = element.duration.slice(0, element.duration.indexOf('h'));
      minutes = element.duration.slice(element.duration.indexOf('h') + 2, element.duration.indexOf('min'));
    }
    movie = {
      "title": element.title,
      "year": element.year,
      "director": element.director,
      "duration": (parseInt(hours) * 60 + parseInt(minutes)),
      "genre": element.genre,
      "rate": element.rate
    };
    return movie;
  });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arrayMovies) {
  if (arrayMovies.length > 0) {
    return Number((arrayMovies.reduce(function (accumulated, element) {
      if (!element.rate>0) {element.rate=0.00;}
      return accumulated += parseFloat(element.rate);
    }, 0) / arrayMovies.length).toFixed(2));
  } else return undefined;
}

// Get the average of Drama Movies
function dramaMoviesRate(arrayMovies) {
  var moviesDrama = [];
  console.log(arrayMovies);
  moviesDrama = arrayMovies.filter(function (element) {
    return element.genre[0]==='Drama' ;//&& element.rate>0;
  });
  console.log(moviesDrama);
  return ratesAverage(moviesDrama);
}

// Order by time duration, in growing order
function orderByDuration(arrayMovies) {
  return arrayMovies.sort(function (element){

  } );
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayMovies) {

}

// Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {

}

// Best yearly rate average
function bestAverageRate(arrayMovies) {

}